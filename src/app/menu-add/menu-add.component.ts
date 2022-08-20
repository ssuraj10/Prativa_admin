import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {

  Form: any;

  constructor(private service: AuthService, private router: Router,) { }

  ngOnInit(): void {
    this.Form = new FormGroup({
      menu_name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      category_name: new FormControl("", Validators.required),
    });
  }

  onSubmit() {

    this.service.menuAdd(this.Form.value).subscribe((res: any) => {


      this.router.navigate(["./menu"]);


    });
  }

}

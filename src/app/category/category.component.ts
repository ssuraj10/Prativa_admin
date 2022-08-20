import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  selectedItem: number = 1;
  category: any;
  items: any;

  constructor(private api: AuthService) { }

  ngOnInit(): void {
    this.api.getAllCategory().subscribe((res: any) => {

      this.category = res.data
      console.log(res.data);

      console.log(this.category);

    });
    this.getitem(this.selectedItem)

  }
  getitem(id) {
    this.api.getItems(id).subscribe(data => {
      this.items = data.data;
    });
  }

  delete(id) {
    this.api.categorydelete(id).subscribe(data => {
      this.ngOnInit();
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service'

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.scss']
})
export class ListRestaurantComponent implements OnInit {

  collection = {};
  constructor(private restaurant : RestaurantService) { }

  ngOnInit(): void {
    this.restaurant.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    });
  }

}

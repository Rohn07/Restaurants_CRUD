import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestaurantService } from '../restaurant.service'

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {
  alert:boolean = false;
  addRestaurant = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    address : new FormControl('')
  })

  constructor(private restaurant : RestaurantService) { }

  ngOnInit(): void {
  }

  addInformation() {
    //console.warn(this.addRestaurant.value);
    this.restaurant.addRestaurant(this.addRestaurant.value).subscribe((result) => {
      this.alert = true;
      this.addRestaurant.reset({});
    })
    
  }
  
  alertClose() {
    this.alert = false;
  }

}

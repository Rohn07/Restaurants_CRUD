import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.scss'],
})
export class UpdateRestaurantComponent implements OnInit {
  alert: boolean = false;
  updateRestaurant = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(
    private router: ActivatedRoute,
    private update: RestaurantService
  ) {}

  ngOnInit(): void {
    // console.warn(this.router.snapshot.params.id);
    this.update
      .getRestaurant(this.router.snapshot.params.id)
      .subscribe((result) => {
        // console.warn("result", result);
        this.updateRestaurant = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          address: new FormControl(result['address']),
        });
      });
  }

  Update() {
    //console.warn(this.updateRestaurant.value);
    this.update
      .updateRestaurant(
        this.router.snapshot.params.id,
        this.updateRestaurant.value
      )
      .subscribe((result) => {
        //console.warn('update result', result);
        this.alert = true;
      });
  }

  alertClose() {
    this.alert = false;
  }
}

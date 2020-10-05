import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestaurantService } from '../restaurant.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  alert :boolean = false;
  registerUser = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl('')
  })

  constructor(private register:RestaurantService) { }

  ngOnInit(): void {
  }

  userInformation() {
    console.warn(this.registerUser.value);
    this.register.registerUser(this.registerUser.value).subscribe((result) => {
      console.warn("result",result);
      this.alert = true;
    })
  }

  alertClose() {
    this.alert = false;
  }

}

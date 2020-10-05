import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  url = "http://localhost:3000/restaurants";
  rootUrl = "http://localhost:3000/";

  constructor(private http : HttpClient) { }
  getList() {
    return this.http.get(this.url);
  }

  addRestaurant(data) {
    return this.http.post(this.url,data);
  }

  deleteRestaurant(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getRestaurant(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateRestaurant(id,data) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  registerUser(data) {
    return this.http.post(this.rootUrl+"users",data);
  }
}

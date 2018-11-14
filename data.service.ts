import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//For our users component, we want to fetch a list of users from a public API. 
//To do that, we're going to use the Angular CLI to generate a service for us. 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  //We defined a method called getUsers() which we'll call in our component shortly.
  // It returns a list of users from a public testing API.
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}

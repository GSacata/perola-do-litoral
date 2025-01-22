import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PerlitServiceService {

  base_url = "http://127.0.0.1:8000"
  headers = new HttpHeaders({"Content-Type": "application/json"})
  
  constructor(private http: HttpClient) { }

  getAllRestaurantMenus() : Observable<any> {
    return this.http.get((this.base_url + "/cardapios/cardapios-rest"), {headers: this.headers})
  }

  getAllRestaurantDishes(): Observable<any> {
    return this.http.get((this.base_url + "/cardapios/pratos"), {headers: this.headers})
  }

  getOneRestaurantMenu(id: number): Observable<any> {
    return this.http.get((this.base_url + `/cardapios/cardapios-rest/${id}`), {headers: this.headers})
  }
  
  getOneRestaurantDish(id: number): Observable<any> {
    return this.http.get((this.base_url + `/cardapios/pratos/${id}`), {headers: this.headers})
  }
}

import { Component, OnInit } from '@angular/core';
import { PerlitServiceService } from '../services/perlit-service.service';
import { Observable } from 'rxjs';
import { CardapioRestauranteModel } from '../interfaces/CardapioRestaurante.interface';
import { AppModule } from '../app.module';
import { PratoModel } from '../interfaces/Prato.interface';

@Component({
  selector: 'app-perola-do-litoral',
  standalone: true,
  imports: [AppModule],
  templateUrl: './perola-do-litoral.component.html',
  styleUrl: './perola-do-litoral.component.scss',
})

export class PerolaDoLitoralComponent {
  menu: CardapioRestauranteModel[] = [];
  // dish: PratoModel = {id: 0, dish_name: "", has_vegetarian: false, veget_variety: "", has_vegan: false, vegan_variety: "", overview: "", warning: ""};
  dishes: PratoModel[] = []
  filteredDishes: PratoModel[] = [];

  getAllMenus() {
    this.perlitService.getAllRestaurantMenus().subscribe({
      next: (data) => {
        this.menu = data
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {console.log("Getting all menus completed")}
    })
  }

  getAllDishes() {
    this.perlitService.getAllRestaurantDishes().subscribe({
      next: (data) => {
        this.dishes = data
        console.log("this.dishes: ", this.dishes) // DEV-ERASE
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {console.log("Getting all dishes completed")}
    })
  }

  // fillThisMenu(dishId: number) {
  //   for (let item of this.dishes) {
  //     if (dishId == item.id) {
  //       this.menuDishes.push(item);
  //     }
  //   }
  //   console.log(this.menuDishes)
  //   this.menuDishes = [];
  // }

  fillThisMenu(dishIdList: number[]) {
    console.log("chamou fillThisMenu")
    this.filteredDishes = this.dishes.filter(obj => dishIdList.includes(obj.id))
    console.log("this.filteredDishes ", this.filteredDishes);
    // for (let dishId of dishIdList) {
    //   for (let item of this.dishes) {
    //     if (dishId == item.id) {
    //       this.menuDishes.push(item);
    //     }
    //   }
    //   console.log(this.menuDishes)
      // this.menuDishes = [];
    // }
  }


  // getOneDish(id: number) {
  //   this.perlitService.getOneRestaurantDish(id).subscribe({
  //     next: (data) => {
  //       this.dish = data
  //     },
  //     error: (err) => {
  //       console.log(err)
  //     },
  //     complete: () => {console.log("Getting all menus completed")}
  //   })
  // }

  constructor (private perlitService: PerlitServiceService) {
    this.getAllMenus()
    this.getAllDishes()
  }
}
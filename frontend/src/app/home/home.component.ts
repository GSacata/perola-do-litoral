import { Component } from '@angular/core';
import { PerolaDoLitoralModule } from '../perola-do-litoral/perola-do-litoral.module';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PerolaDoLitoralModule,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor () {}
}

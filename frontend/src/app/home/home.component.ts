import { Component } from '@angular/core';
import { PerolaDoLitoralModule } from '../perola-do-litoral/perola-do-litoral.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PerolaDoLitoralModule,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor () {}
}

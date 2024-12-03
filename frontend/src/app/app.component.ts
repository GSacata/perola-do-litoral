import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MadreperolaComponent } from './madreperola/madreperola.component';
import { PerolaDoLitoralComponent } from './perola-do-litoral/perola-do-litoral.component';
import { ContatoComponent } from './contato/contato.component';
import { BuffetComponent } from './buffet/buffet.component';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent, MadreperolaComponent, PerolaDoLitoralComponent, ContatoComponent, BuffetComponent, AdminComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'perola-do-litoral';
}

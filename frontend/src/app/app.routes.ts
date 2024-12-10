import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { PerolaDoLitoralComponent } from './perola-do-litoral/perola-do-litoral.component';
import { MadreperolaComponent } from './madreperola/madreperola.component';
import { BuffetComponent } from './buffet/buffet.component';
import { AdminComponent } from './admin/admin.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'restaurante', component: PerolaDoLitoralComponent},
    {path: 'bar', component: MadreperolaComponent},
    {path: 'buffet', component: BuffetComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'sobre-nos', component: SobreNosComponent},
];

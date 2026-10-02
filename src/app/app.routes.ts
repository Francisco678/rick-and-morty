import { Routes } from '@angular/router';
import { HomeComponent } from './rick-morty-project/pages/home-component/home-component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"rickandmorty",
        loadComponent:()=>import('./rick-morty-project/pages/dashboard-component/dashboard-component')
    },
    {
        path:"**",
        redirectTo:'/'
    }
];

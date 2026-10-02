import { Routes } from '@angular/router';
import { HomeComponent } from './rick-morty-project/pages/home-component/home-component';
import { CharactersComponent } from './rick-morty-project/components/characters-component/characters-component';
import { LocationsComponent } from './rick-morty-project/components/locations-component/locations-component';
import { EpisodesComponent } from './rick-morty-project/components/episodes-component/episodes-component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"rickandmorty",
        loadComponent:()=>import('./rick-morty-project/pages/dashboard-component/dashboard-component'),
        children:[
            {
                path:'characters',
                component:CharactersComponent
            },
            {
                path:'locations',
                component:LocationsComponent
            },
            {
                path:'episodes',
                component:EpisodesComponent
            },
            {
                path:"**",
                redirectTo:'characters'

            }
            
        ]
    },
    
    {
        path:"**",
        redirectTo:'/'
    },
    
];

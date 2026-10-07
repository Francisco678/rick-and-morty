import { Component, inject, signal } from '@angular/core';
import { LocationResponse } from '../../interfaces/api-location-interfaces';
import { ApiRickMortyService } from '../../service/api-rick-morty-service';

@Component({
  imports: [],
  selector: 'locations-component',
  styleUrl: './locations-component.css',
  templateUrl: './locations-component.html',
})
export class LocationsComponent {

  locations = signal<LocationResponse[] | null>(null);
  service = inject(ApiRickMortyService);


  constructor(){
    this.service.getLocations().subscribe(response=>{
      this.locations.set(response);
    })
  }


}

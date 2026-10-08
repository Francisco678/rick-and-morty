import { Component, inject, signal } from '@angular/core';
import { CustomLocationResponse, LocationResponse } from '../../interfaces/api-location-interfaces';
import { ApiRickMortyService } from '../../service/api-rick-morty-service';
import { map, Observable, tap } from 'rxjs';
import { CharacterResponse } from '../../interfaces/api-character-interfaces';

@Component({
  imports: [],
  selector: 'locations-component',
  styleUrl: './locations-component.css',
  templateUrl: './locations-component.html',
})
export class LocationsComponent {

  locations = signal<CustomLocationResponse[]>([]);
  service = inject(ApiRickMortyService);


  constructor(){
    this.service.getLocations().subscribe(locations=>{
      
      this.getResidentCharactersByLocation(locations);
      
    })
  }


  getResidentCharactersByLocation(locations:LocationResponse[]){
    console.log(`LOCATIONS:`);
    console.log(locations);

  
    locations.forEach(objLoc=>{
        let urlsGetUsers:string[] =objLoc.residents;
        let idsGetUsers:string[] = this.getCharacterIds(urlsGetUsers);
        console.log(`IDs: ${idsGetUsers}`)
        
      
        this.service.getCharactersByIds(idsGetUsers)
        .subscribe(charactersResponse=>{
          console.log(`CHARACTERS: ${charactersResponse}`)
          let customRLocation:CustomLocationResponse = {
              id:objLoc.id,
              name:objLoc.name,
              dimension:objLoc.dimension,
              type:objLoc.type,
              created:objLoc.created,
              residents:charactersResponse,
              url:objLoc.url
            } 
            console.log(`CUSTOM LOC: ${customRLocation}`)

            this.locations.update(current=>[
              ...current,
              customRLocation
            ])
        })
    })

  }


      
  getCharacterIds(characterUrls:string[]):string[]{

    let idsGetUsers:string[] =[];

    characterUrls.forEach(url=>{
      let id = url.split("/").pop()!;
      idsGetUsers.push(id); 
    })

    return idsGetUsers;
  }


}



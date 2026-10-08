import { Component, inject, signal } from '@angular/core';
import { CustomLocationResponse, LocationResponse } from '../../interfaces/api-location-interfaces';
import { ApiRickMortyService } from '../../service/api-rick-morty-service';
import { catchError, forkJoin, map, Observable, of, tap } from 'rxjs';
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


  constructor() {

    this.service.getLocations().subscribe(locations => {

      /*
      Las locations se almacenan desde aqui en la señal para que de un principio ya esten
      ordenadas y almacenadas. No como en la mecanica anterior que se hiban a agregando 
      dentro del metodo getResidentCharactersByLocation conforme se hiban consultando sus 
      character ya que son ese valor se construian los objetos para insertar en la señal, 
      eso provocaba que las location en la señal estuvieran desordenadas y por alguna razon 
      que no se almacenaran todas.

      */

      this.locations.set(locations.map(locResponse => ({
        id: locResponse.id,
        name: locResponse.name,
        dimension: locResponse.dimension,
        type: locResponse.type,
        created: locResponse.created,
        residents: [],
        url: locResponse.url
      })))

      this.getResidentCharactersByLocation(locations);

    })
  }


  getResidentCharactersByLocation(locations: LocationResponse[]) {
    console.log(`LOCATIONS:`);
    console.log(locations);


    locations.forEach(objLoc => {
      let urlsGetUsers: string[] = objLoc.residents;
      let idsGetUsers: string[] = this.getCharacterIds(urlsGetUsers);


      if (idsGetUsers.length === 0) {
        return;
      }
      else {
        this.service.getCharactersByIds(idsGetUsers)
          .subscribe(charactersResponse => {

            /* 
              Se actualiza solo la propiedad residents de un objeto location en la señal,
              es decir se le asignan la lista de characters que se consulto de la api que 
              residen ahi

              Para actualizar solo un objeto se compara el id de todas las locations que ya estan
              en la señal para saber a cual se le modificara la propiedad residents
            */

            this.locations.update(current =>
              current.map(location =>
                location.id === objLoc.id
                  ? { ...location, residents: charactersResponse } //si la condicion se cumple
                  : location //si no, no se modifica el objeto
              )
            )

          })
      }

    })

  }



  getCharacterIds(characterUrls: string[]): string[] {

    let idsGetUsers: string[] = [];

    characterUrls.forEach(url => {
      let id = url.split("/").pop()!;
      idsGetUsers.push(id);
    })

    return idsGetUsers;
  }


}



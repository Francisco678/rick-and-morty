import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { ApiCharacterResponse, CharacterResponse } from "../interfaces/api-character-interfaces";
import { ApiEpisodeResponse, EpisodeResponse } from "../interfaces/api-episode-interfaces";
import { ApiLocationResponse, LocationResponse } from "../interfaces/api-location-interfaces";


@Injectable({ providedIn: 'root' })
export class ApiRickMortyService {

   http = inject(HttpClient);
   totPages: number = 0;
   currentPage: number = 9;


   getCharacters(): Observable<CharacterResponse[]> {

      return this.http.get<ApiCharacterResponse>("https://rickandmortyapi.com/api/character", {
         params: {
            page: this.currentPage
         }
      })
         .pipe(
            tap(ApiResponse => { this.totPages = ApiResponse.info.pages }),
            map(ApiResponse => ApiResponse.results)
         )
   }


   getCharacterById(id: String | null): Observable<CharacterResponse> {

      return this.http.get<CharacterResponse>(`https://rickandmortyapi.com/api/character/${id}`)

   }

   getEpisodesByUrl(url: string): Observable<EpisodeResponse> {

      return this.http.get<EpisodeResponse>(url)

   }

   getCaharactersByPage(indicador: number): Observable<CharacterResponse[]> {

      this.currentPage = this.currentPage + 1 * indicador;

      if (this.currentPage < 1 || this.currentPage > this.totPages) {
         console.log(`No puedes ir a esta pagina: ${this.currentPage}`)
         this.currentPage = 1;
      }
      console.log(`Estas en la pagina ${this.currentPage}`)

      return this.http.get<ApiCharacterResponse>(`https://rickandmortyapi.com/api/character/`, {
         params: {
            page: this.currentPage
         }
      }).pipe(
         map(apiRepsonse => apiRepsonse.results)
      )



   }


   getLocations(): Observable<LocationResponse[]> {

      return this.http.get<ApiLocationResponse>("https://rickandmortyapi.com/api/location")
         .pipe(
            map(apiResponse => apiResponse.results)
         )
   }


   getCharactersByIds(idsGetUsers: string[]): Observable<CharacterResponse[]> {

      /*La respuesta de la peticion se inserta en un array porque hay casos donde
      una location tiene una sola url por tanto a este metodo llega un arreglo con 
      el valor de solo un id y al hacer la peticion con ese id devulve un objeto 
      y no un []
      */
      return this.http.get<CharacterResponse[] | CharacterResponse>
         (`https://rickandmortyapi.com/api/character/${idsGetUsers.join(",")}`).pipe(
            map(response =>
               Array.isArray(response) ? response : [response]
            )
         )
   }


   getEpisodes(): Observable<EpisodeResponse[]> {

      return this.http.get<ApiEpisodeResponse>(`https://rickandmortyapi.com/api/episode`)
         .pipe(
            map(response => response.results)
         )
   }

}
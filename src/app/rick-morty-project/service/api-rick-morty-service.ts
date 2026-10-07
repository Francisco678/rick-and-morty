import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import {  ApiCharacterResponse, CharacterResponse } from "../interfaces/api-character-interfaces";
import { EpisodeResponse } from "../interfaces/api-episode-interfaces";


@Injectable({providedIn:'root'})
export class ApiRickMortyService{

    http  =inject(HttpClient);
    totPages:number =0;
    currentPage:number = 9;
    

     getCharacters():Observable<CharacterResponse[]>{

        return this.http.get<ApiCharacterResponse>("https://rickandmortyapi.com/api/character",{
         params:{
            page:this.currentPage
         }
        })
        .pipe(
            tap(ApiResponse =>{this.totPages = ApiResponse.info.pages}),
            map(ApiResponse => ApiResponse.results)
        )
     }


     getCharacterById(id:String | null):Observable<CharacterResponse>{

        return this.http.get<CharacterResponse>(`https://rickandmortyapi.com/api/character/${id}`)
        
     }

     getEpisodesByUrl(url:string):Observable<EpisodeResponse>{

        return this.http.get<EpisodeResponse>(url)

     }

     getCaharactersByPage(indicador:number):Observable<CharacterResponse[]>{

      this.currentPage = this.currentPage +1*indicador;

      if(this.currentPage <1 || this.currentPage >this.totPages){
         console.log(`No puedes ir a esta pagina: ${this.currentPage}`)
         this.currentPage = 1;
      }
      console.log(`Estas en la pagina ${this.currentPage}`)
      
      return this.http.get<ApiCharacterResponse>(`https://rickandmortyapi.com/api/character/`,{
         params:{
            page:this.currentPage
         }
      }).pipe(
         map(apiRepsonse => apiRepsonse.results)
      )
   
      

     }

}
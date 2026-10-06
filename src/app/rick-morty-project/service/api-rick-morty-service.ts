import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import {  ApiCharacterResponse, CharacterResponse } from "../interfaces/api-character-interfaces";
import { EpisodeResponse } from "../interfaces/api-episode-interfaces";


@Injectable({providedIn:'root'})
export class ApiRickMortyService{

    http  =inject(HttpClient);

     getCharacters():Observable<CharacterResponse[]>{

        return this.http.get<ApiCharacterResponse>("https://rickandmortyapi.com/api/character")
        .pipe(
            map(ApiResponse => ApiResponse.results)
        )
     }


     getCharacterById(id:String | null):Observable<CharacterResponse>{

        return this.http.get<CharacterResponse>(`https://rickandmortyapi.com/api/character/${id}`)
        
     }

     getEpisodesByUrl(url:string):Observable<EpisodeResponse>{

        return this.http.get<EpisodeResponse>(url)

     }

}
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterResponse } from '../../interfaces/api-character-interfaces';
import { ApiRickMortyService } from '../../service/api-rick-morty-service';
import { EpisodeResponse } from '../../interfaces/api-episode-interfaces';
import { forkJoin, Observable } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-character-detail-component',
  styleUrl: './character-detail-component.css',
  templateUrl: './character-detail-component.html',
})
export class CharacterDetailComponent {

  service = inject(ApiRickMortyService);
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');

  character =signal<CharacterResponse | null>(null);
  episodes = signal<EpisodeResponse[]>([])


  constructor(){
    this.service.getCharacterById(this.id).
    subscribe(response=>{
      this.character.set(response)
      console.log("CHARACTER")
      console.log(this.character())
      this.getEpisodes(this.character()?.episode)
    });
  }


  getEpisodes(apisodes:string[] | undefined){


    const request: Observable<EpisodeResponse>[] | undefined   = apisodes?.map(url=>this.service.getEpisodesByUrl(url))

    if(request !=undefined){
      forkJoin(request).subscribe(response=>{
        this.episodes.set(response)
      })

    }

  }


  



}

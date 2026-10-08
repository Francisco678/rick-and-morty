import { Component, inject, signal } from '@angular/core';
import { EpisodeResponse } from '../../interfaces/api-episode-interfaces';
import { ApiRickMortyService } from '../../service/api-rick-morty-service';

@Component({
  imports: [],
  selector: 'app-episodes-component',
  styleUrl: './episodes-component.css',
  templateUrl: './episodes-component.html',
})
export class EpisodesComponent {

  episodes = signal<EpisodeResponse[]>([]);
  service = inject(ApiRickMortyService);


  constructor(){
    
    this.service.getEpisodes().subscribe(response=>{
      this.episodes.set(response);
    })
  }
}

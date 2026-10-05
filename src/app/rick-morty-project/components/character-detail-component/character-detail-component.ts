import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterResponse } from '../../interfaces/api-character-interfaces';
import { ApiRickMortyService } from '../../service/api-rick-morty-service';

@Component({
  imports: [],
  selector: 'app-character-detail-component',
  styleUrl: './character-detail-component.css',
  templateUrl: './character-detail-component.html',
})
export class CharacterDetailComponent {

  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');

  character =signal<CharacterResponse | null>(null);

  service = inject(ApiRickMortyService);


  constructor(){
    this.service.getCharacterById(this.id).
    subscribe(response=>{
      this.character.set(response)
      console.log(response);
    });
  }



}

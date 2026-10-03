import { Component, inject, signal } from '@angular/core';
import { CharacterResponse } from '../../interfaces/api-character-interfaces';
import { ApiRickMortyService } from '../../service/api-rick-morty-service';
import { CharacterCard } from '../character-card/character-card';

@Component({
  imports: [CharacterCard],
  selector: 'app-characters-component',
  styleUrl: './characters-component.css',
  templateUrl: './characters-component.html',
})
export class CharactersComponent {

  characters = signal<CharacterResponse[]>([]);
  service = inject(ApiRickMortyService);


  constructor(){
    this.service.getCharacters().subscribe(charactersResponse=>{
      this.characters.set(charactersResponse);
    })
  }



}

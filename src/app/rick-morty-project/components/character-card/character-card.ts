import { Component, input } from '@angular/core';
import { CharacterResponse } from '../../interfaces/api-character-interfaces';

@Component({
  imports: [],
  selector: 'character-card',
  styleUrl: './character-card.css',
  templateUrl: './character-card.html',
})
export class CharacterCard {
  inputCharacter = input.required<CharacterResponse>();
}

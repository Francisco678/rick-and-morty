import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-character-detail-component',
  styleUrl: './character-detail-component.css',
  templateUrl: './character-detail-component.html',
})
export class CharacterDetailComponent {


  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');


  constructor(){
    console.log(this.id)
  }


}

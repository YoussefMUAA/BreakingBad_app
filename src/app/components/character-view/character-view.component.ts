import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  character: Character | any
  constructor(
    private activatedRoute: ActivatedRoute,
    private characterServices: CharactersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      const idCharacter = parseInt(params['idcharacter']);
      const response = await this.characterServices.getById(idCharacter)
      this.character = response[0];
    })

  }

}

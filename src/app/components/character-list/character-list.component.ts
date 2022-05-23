import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  arrCharacters: Character[] = [];
  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //cuando cargue este componente lo voy hacer desde dos rutas distintas, la ruta home que carga todos los personajes, y la ruta search que solo carga los personajes por nombre
    this.activatedRoute.params.subscribe(params => {
      // console.log('parametros de ruta', params)
      if (params['nameCharacter'] !== undefined) {
        //hacer un busqueda
        this.charactersService.getByName(params['nameCharacter']).subscribe(data => {
          this.arrCharacters = data;
        })
      }
      else {
        //muestro todos los personajes
        //opcion 1 Observables
        this.charactersService.getAll().subscribe(data => {
          this.arrCharacters = data;
          console.log(this.arrCharacters)
        })

        //opcion 2 Promises
        /* this.arrCharacters = await this.charactersService.getAll()
        console.log(this.arrCharacters) */
      }
    })
  }

}

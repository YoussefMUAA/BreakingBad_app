import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getName($event: any) {
    //$event.target.value me devuelve el nombre del personaje que quiero buscar.

    //como no le puedo pasar ester valor al componente lista personajes por que se carga dentro del routeroutlet voy a generar una ruta para la busqueda.
    const nombreBusqueda = $event.target.value;
    this.router.navigate(['/search', nombreBusqueda])

  }

}

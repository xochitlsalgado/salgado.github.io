import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service'; // Importa el servicio

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mensaje: string = "";

  // Inyecta el servicio en el constructor
  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    // Usa el servicio para obtener el mensaje
    this.mensaje = this.headerService.obtenerEstado();
  }
}

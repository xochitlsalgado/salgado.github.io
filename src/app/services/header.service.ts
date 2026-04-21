import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor() { }

  obtenerEstado() {
    return "header service running...";
  }
}

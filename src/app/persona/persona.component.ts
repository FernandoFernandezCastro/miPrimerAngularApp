import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  nombre: string = 'Juan';
  apellido: string = 'Perez';
  edad: number = 28;
  //private edad: number = 28;
  /*getEdad():number{
    return this.edad;
  }*/

}

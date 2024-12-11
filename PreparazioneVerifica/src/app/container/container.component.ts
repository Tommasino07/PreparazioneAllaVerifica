import { Component } from '@angular/core';
import { MacchinaComponent } from '../macchina/macchina.component';

@Component({
  selector: 'app-container',
  imports: [MacchinaComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  car: string[]; 
  constructor() { 
     this.car = ['Ruspa', 'Gru', 'Autocarro', 'Cariola', 'Italia', 'Spagna', 'Germania', 'Brasile', 'Argentina', 'Svizzera']; 
  }
  ngOnInit() {
  }

}

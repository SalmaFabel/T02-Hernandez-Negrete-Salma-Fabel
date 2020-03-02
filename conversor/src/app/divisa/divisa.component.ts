import { Component} from '@angular/core';

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  styleUrls: ['./divisa.component.css']
})
export class DivisaComponent {
 
  val1:number;
  rta:number;
  cambio:number;

  Operacion(){

    this.rta=this.val1*this.cambio;
  }

}

import { Component} from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {

  val1:number;
  rta:number;

  Operacion(){

    this.rta=(this.val1*1.8)+32;
  }

}

import { Component} from '@angular/core';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.component.html',
  styleUrls: ['./medidas.component.css']
})
export class MedidasComponent  {

  val1:number;
  rta:number;

  Operacion(){

    this.rta=this.val1*0.39370;
  }
 

}

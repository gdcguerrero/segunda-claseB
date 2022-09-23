import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  public flag : boolean = true;

  public valor :string = ""

  constructor() {
    
  }

  ngOnInit(): void {
    this.ocultar();
  }

  ocultar(){
    let btn = document.getElementById("btn");
    btn?.addEventListener("click", () => {
      //this.flag = !this.flag
      let inp : HTMLInputElement = document.getElementById("inp") as HTMLInputElement;
      let escala : HTMLInputElement = document.getElementById("escala") as HTMLInputElement;
    })
  }
}

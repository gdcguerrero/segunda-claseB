import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-diamante',
  templateUrl: './diamante.component.html',
  styleUrls: ['./diamante.component.scss']
})
export class DiamanteComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked , AfterViewInit, AfterViewChecked, OnDestroy{
  
  constructor() {
    //console.log("Constructor");
  }

  ngOnInit(): void {
    //console.log("OnInit");
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("ngOnChanges");
  }

  ngAfterContentInit(): void {
    //console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    //console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    //console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    //console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    //console.log("ngOnDestroy");
  }

  nameInput(input : any) {
    //console.log(input);
  }
}

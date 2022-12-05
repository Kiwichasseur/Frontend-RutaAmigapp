import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-btn-primary',
  templateUrl: './my-btn-primary.component.html',
  styleUrls: ['./my-btn-primary.component.css']
})
export class MyBtnPrimaryComponent implements OnInit {

  @Input() textoBoton: string;

  constructor() { }

  ngOnInit(): void {
  }

}

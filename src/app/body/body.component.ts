import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class MyBodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  temp = 23;
}
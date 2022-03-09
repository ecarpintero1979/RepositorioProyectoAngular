import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class MyBodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() temp: string;
  @Input() city: string;
  @Input() imagen: string;
}

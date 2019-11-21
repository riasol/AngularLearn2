import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-rx-driven',
  templateUrl: './rx-driven.component.html',
  styleUrls: ['./rx-driven.component.css']
})
export class RxDrivenComponent implements OnInit {
  @Input() items = new BehaviorSubject<string[]>([]);

  constructor() {
  }

  ngOnInit() {
  }

}

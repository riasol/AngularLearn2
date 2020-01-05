import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, of, ReplaySubject} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {switchMap} from 'rxjs/operators';

interface Item {
  id: string;
  name: string;
}

@Component({
  selector: 'app-rx-driven',
  templateUrl: './rx-driven.component.html',
  styleUrls: ['./rx-driven.component.css']
})
export class RxDrivenComponent implements OnInit {
  @Input() items = new BehaviorSubject<string[]>([]);
  newItem$ = new ReplaySubject<Item[]>(1);
  dataSource$ = combineLatest(of([]), this.newItem$)
    .pipe(switchMap(([all, newItem]) => {
      return of(all.concat(newItem));
    }));
  form = new FormGroup({name: new FormControl()});
  editItem$ = new ReplaySubject<Item>(1);
  displayedColumns = ['name', 'controls'];
  dataSource: any;

  constructor() {
  }

  ngOnInit() {
    this.dataSource$.subscribe(d => {
      this.dataSource = d;
    });
  }

  edit(element?: any) {
    const nextElem = element ? element : {id: (new Date()).toString()} as Item;
    this.editItem$.next(nextElem);
    if (!element) {
      this.newItem$.next([nextElem]);
    }
  }

  cancel() {
    this.editItem$.next(null);
    this.newItem$.next([]);
  }
}

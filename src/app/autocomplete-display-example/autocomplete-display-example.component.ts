import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
  id: string;
}

/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'app-autocomplete-display-example',
  templateUrl: 'autocomplete-display-example.component.html',
  styleUrls: ['autocomplete-display-example.component.css'],
})
export class AutocompleteDisplayExampleComponent implements OnInit {
  myControl = new FormControl('2');
  users: User[] = [
    {name: 'Mary', id: '1'},
    {name: 'Shelley', id: '2'},
    {name: 'Igor', id: '3'}
  ];
  filteredOptions: Observable<User[]>;

  constructor() {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.users.slice())
      );
  }

  displayFn = (user?: User | string): string | undefined => {
    if (user.hasOwnProperty('name')) {
      return (user as User).name;
    } else {
      return user ? this.users.find(item => item.id === user).name : undefined;
    }
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.users.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}


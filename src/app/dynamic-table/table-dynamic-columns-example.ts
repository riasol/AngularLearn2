import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Table dynamically changing the columns displayed
 */
@Component({
  selector: 'app-table-dynamic-columns-example',
  styleUrls: ['table-dynamic-columns-example.css'],
  templateUrl: 'table-dynamic-columns-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
// tslint:disable-next-line:component-class-suffix
export class TableDynamicColumnsExample implements OnInit {
  form = new FormGroup({});
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;
  cnt = 0;
  editedCol: string;

  get refreshCnt() {
    return this.cnt++;
  }

  addColumn() {
    if (this.columnsToDisplay.length < this.displayedColumns.length) {
      this.columnsToDisplay.push(this.displayedColumns[this.columnsToDisplay.length]);
    }

  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }


  dataFn() {
    return this.data;
  }

  switchEditedCol(column: string) {
    this.editedCol = column;
    this.data.forEach((row, i) => {
      this.form.get(`f${i}`).setValue(row[column]);
    });
  }

  ngOnInit(): void {
    this.data.forEach((row, i) => {
      this.form.addControl(`f${i}`, new FormControl());
    });
  }
}



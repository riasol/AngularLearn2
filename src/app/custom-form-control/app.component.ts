import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomErrorStateMatcher} from './error-state-matcher';

@Component({
  selector: 'app-custom-form-control',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  myForm: FormGroup;

  matcher = new CustomErrorStateMatcher();

  constructor() {
    this.myForm = new FormGroup({
      favoriteFood: new FormControl(null, Validators.required)
    });
  }

  submitForm() {
    console.log(this.myForm.value);
  }
}

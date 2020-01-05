import {ChangeDetectionStrategy, Component, DoCheck, Input, OnInit, Optional, Self, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, FormControlName, NgControl} from '@angular/forms';
import {ErrorStateMatcher, MatFormFieldControl, MatInput, MatSelect} from '@angular/material';

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: [
    './custom-select.component.scss'
  ],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: CustomSelectComponent
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomSelectComponent implements ControlValueAccessor, OnInit, DoCheck {

  @ViewChild('input', {static: true})
  input: MatInput;
  control: FormControl;

  constructor(
    @Optional() @Self() ngControl: NgControl,
    @Optional() private controlName: FormControlName) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  @Input()
  get errorStateMatcher(): ErrorStateMatcher {
    return this.input.errorStateMatcher;
  }

  set errorStateMatcher(val) {
    this.input.errorStateMatcher = val;
  }

  @Input()
  get placeholder() {
    return this.input.placeholder;
  }

  set placeholder(plh) {
    this.input.placeholder = plh;
  }

  @Input()
  get value() {
    return this.input.value;
  }

  set value(val) {
    this.input.value = val;
  }

  ngOnInit(): void {
    this.control = this.controlName.control;
  }

  ngDoCheck(): void {
    // this.input.updateErrorState();
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    // this.input.registerOnChange(fn);
  }

  registerOnTouched(fn: any): void {
    // this.input.registerOnTouched(fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    // this.input.setDisabledState(isDisabled);
  }
}

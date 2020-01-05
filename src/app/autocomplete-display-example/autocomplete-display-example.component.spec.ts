import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteDisplayExampleComponent } from './autocomplete-display-example.component';

describe('AutocompleteDisplayExampleComponent', () => {
  let component: AutocompleteDisplayExampleComponent;
  let fixture: ComponentFixture<AutocompleteDisplayExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteDisplayExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteDisplayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

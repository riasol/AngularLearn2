import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RxDrivenComponent} from './rx-driven.component';

describe('RxDrivenComponent', () => {
  let component;
  let fixture: ComponentFixture<RxDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RxDrivenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxDrivenComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display item from rx', () => {
    component.items.next(['item 1']);
    fixture.detectChanges();
    expect((fixture.nativeElement.querySelector('.items') as HTMLElement).childElementCount).toBe(1);
    expect(fixture.debugElement.nativeElement.querySelector('.item').textContent).toBe('item 1');
    /*component.data.next('2nd item');
    expect(component.nativeElement).toMatch('2nd item');*/
  });
});

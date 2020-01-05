import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {RxDrivenComponent} from './rx-driven.component';
import {BehaviorSubject, combineLatest, forkJoin, of, ReplaySubject, timer} from 'rxjs';
import {delay, map, tap} from 'rxjs/operators';

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

  it('should display item from rx', () => {
    component.items.next(['item 1']);
    fixture.detectChanges();
    expect((fixture.nativeElement.querySelector('.items') as HTMLElement).childElementCount).toBe(1);
    expect(fixture.debugElement.nativeElement.querySelector('.item').textContent).toBe('item 1');
    /*component.data.next('2nd item');
    expect(component.nativeElement).toMatch('2nd item');*/
  });

  it('should compare forrkjoin vs combine latest', () => {
    const newSource = (name: string, delayMS: number) => {
      return of(`${name} - ${delayMS}`).pipe(
        delay(delayMS)
      );
    };
    const newSourceTimer = (name: string, delayMS: number, times: number) => {
      return timer(delayMS, times).pipe(
        map(sec => `${sec} - ${name} - ${delayMS}`)
      );
    };
    combineLatest(newSource('cl1', 1000), newSource('cl2', 1500))
      .pipe(tap(v => console.log(v)))
      .subscribe(([s1, s2]) => {
        console.log(s1, s2);
      });
    forkJoin(newSource('cl1b', 1000), newSource('cl2b', 10000))
      .pipe(tap(v => console.log(v)))
      .subscribe(([s1, s2]) => {
        console.log(s1, s2);
      });
  });

  it('should covert observable to aarray', fakeAsync(() => {
    const base = [1, 1, 3];
    let arr;
    of(base).subscribe(items => {
      arr = items;
    });
    expect(arr).toBe(base);
  }));

  it('Behaviour subject work', fakeAsync(() => {
    const stream$ = new BehaviorSubject<number>(1);
    const expectedArr = [];
    stream$.subscribe(num => {
      expectedArr.push(num);
    });
    stream$.next(2);
    expect(expectedArr).toEqual([1, 2]);
  }));
  it('ReplaySubject  work', fakeAsync(() => {

    const stream$ = new ReplaySubject<number>(2);
    const expectedArr = [];
    stream$.next(1);
    stream$.next(2);
    stream$.subscribe(num => {
      expectedArr.push(num);
    });
    expect(expectedArr).toEqual([1, 2]);
  }));

});

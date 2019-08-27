import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HomeComponent } from '../home/home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        BrowserAnimationsModule],
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const debugElement = fixture.debugElement.query(By.css('h1'));
    expect(debugElement).toBeTruthy();
  }));

  it('should render "Bohemian Rhapsody" in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bohemian Rhapsody');
  }));

  it('should render a p tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const debugElement = fixture.debugElement.query(By.css('p'));
    expect(debugElement).toBeTruthy();
  }));

  /*

  it('should render a button tag', async(() => {
    const fixture = TestBed.createComponent(SplashComponent);
    const debugElement = fixture.debugElement.query(By.css('button'));
    expect(debugElement).toBeTruthy();
  }));

  it('should be able to click continue button', async(() => {
    spyOn(component, 'toAccountList');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.toAccountList).toHaveBeenCalled();
    });
  }));
  */

});

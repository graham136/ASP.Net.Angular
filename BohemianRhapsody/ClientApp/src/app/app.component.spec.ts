import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app/app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { NavMenuComponent } from '../app/nav-menu/nav-menu.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [AppComponent, NavMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a div tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.css('div'));
    expect(debugElement).toBeTruthy();
  }));

  it('should render a router-outlet tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.css('router-outlet'));
    expect(debugElement).toBeTruthy();
  }));

  it('should render a app-nav-menu tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.css('app-nav-menu'));
    expect(debugElement).toBeTruthy();
  }));
   
});

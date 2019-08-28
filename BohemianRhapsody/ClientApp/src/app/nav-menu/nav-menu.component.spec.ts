import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [NavMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a div tag', async(() => {
    const fixture = TestBed.createComponent(NavMenuComponent);
    const debugElement = fixture.debugElement.query(By.css('div'));
    expect(debugElement).toBeTruthy();
  }));

  it('should render a  "a" tag', async(() => {
    const fixture = TestBed.createComponent(NavMenuComponent);
    const debugElement = fixture.debugElement.query(By.css('a'));
    expect(debugElement).toBeTruthy();
  }));

  it('should render a li tag', async(() => {
    const fixture = TestBed.createComponent(NavMenuComponent);
    const debugElement = fixture.debugElement.query(By.css('li'));
    expect(debugElement).toBeTruthy();
  }));

});

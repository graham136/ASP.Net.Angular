import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SongListComponent } from '../Song/song-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InjectionToken } from '@angular/core';
export const BASE_URL = new InjectionToken<string>('BASE_URL');


describe('SongListComponent', () => {
  let component: SongListComponent;
  let fixture: ComponentFixture<SongListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule],
      providers: [
        { provide: BASE_URL, useValue: 'http://localhost' }        
      ],
      declarations: [SongListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a h1 tag', async(() => {
    const fixture = TestBed.createComponent(SongListComponent);
    const debugElement = fixture.debugElement.query(By.css('h1'));
    expect(debugElement).toBeTruthy();
  }));

  it('should render "Songs" in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(SongListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Songs');
  }));

  it('should render a p tag', async(() => {
    const fixture = TestBed.createComponent(SongListComponent);
    const debugElement = fixture.debugElement.query(By.css('p'));
    expect(debugElement).toBeTruthy();
  }));



  it('should render a button tag', async(() => {
    const fixture = TestBed.createComponent(SongListComponent);
    const debugElement = fixture.debugElement.query(By.css('button'));
    expect(debugElement).toBeTruthy();
  }));

  it('should be able to click continue button', async(() => {
    spyOn(component, 'onAddClick');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.onAddClick).toHaveBeenCalled();
    });
  }));


});

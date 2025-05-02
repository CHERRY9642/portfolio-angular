import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // initial render
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a heading "About Me"', () => {
    const heading = fixture.debugElement.query(By.css('h1'));
    expect(heading.nativeElement.textContent).toBe('About Me');
  });

  it('should type out "Frontend Developer" in the typed-text span', (done) => {
    component.startTyping(); // start typing effect

    setTimeout(() => {
      fixture.detectChanges(); // force view update with currentText
      const typedTextElement = fixture.debugElement.query(By.css('.typed-text')).nativeElement;
      expect(typedTextElement.textContent).toBe('Frontend Developer'); // match your first title
      done();
    }, 2000); // wait long enough based on typingSpeed and title length
  });

  it('should change text to "Frontend Developer" initially', (done) => {
    component.startTyping();

    setTimeout(() => {
      fixture.detectChanges(); // re-render after text update
      const typedTextElement = fixture.debugElement.query(By.css('.typed-text')).nativeElement;
      expect(typedTextElement.textContent).toBe('Frontend Developer');
      done();
    }, 2000); // same delay
  });
});


import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OurNavComponent } from './our-nav.component';

describe('OurNavComponent', () => {
  let component: OurNavComponent;
  let fixture: ComponentFixture<OurNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [OurNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

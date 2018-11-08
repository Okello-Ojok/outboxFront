import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUnder0constructionComponent } from './page-under0construction.component';

describe('PageUnder0constructionComponent', () => {
  let component: PageUnder0constructionComponent;
  let fixture: ComponentFixture<PageUnder0constructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUnder0constructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUnder0constructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

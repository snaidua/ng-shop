import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnToolbarComponent } from './qn-toolbar.component';

describe('QnToolbarComponent', () => {
  let component: QnToolbarComponent;
  let fixture: ComponentFixture<QnToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QnToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

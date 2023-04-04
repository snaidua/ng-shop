import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnPageComponent } from './qn-page.component';

describe('QnPageComponent', () => {
  let component: QnPageComponent;
  let fixture: ComponentFixture<QnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

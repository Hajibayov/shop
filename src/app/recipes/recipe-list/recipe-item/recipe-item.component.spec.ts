import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciperItemComponent } from './recipe-item.component';

describe('ReciperItemComponent', () => {
  let component: ReciperItemComponent;
  let fixture: ComponentFixture<ReciperItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReciperItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReciperItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

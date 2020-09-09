import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListCardComponent } from './items-list-card.component';

describe('ItemsListCardComponent', () => {
  let component: ItemsListCardComponent;
  let fixture: ComponentFixture<ItemsListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsListCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

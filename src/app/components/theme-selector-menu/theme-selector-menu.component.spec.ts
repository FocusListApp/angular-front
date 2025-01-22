import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSelectorMenuComponent } from './theme-selector-menu.component';

describe('ThemeSelectorMenuComponent', () => {
  let component: ThemeSelectorMenuComponent;
  let fixture: ComponentFixture<ThemeSelectorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSelectorMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeSelectorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

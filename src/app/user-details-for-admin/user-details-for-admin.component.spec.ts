import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsForAdminComponent } from './user-details-for-admin.component';

describe('UserDetailsForAdminComponent', () => {
  let component: UserDetailsForAdminComponent;
  let fixture: ComponentFixture<UserDetailsForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsForAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

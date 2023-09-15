import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMovieComponent } from './update-movie.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormBuilder and necessary modules
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('UpdateMovieComponent', () => {
  let component: UpdateMovieComponent;
  let fixture: ComponentFixture<UpdateMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMovieComponent],
      imports: [FormsModule, ReactiveFormsModule,RouterTestingModule,HttpClientTestingModule,[ToastrModule.forRoot()]], // Import FormsModule and ReactiveFormsModule
      providers: [FormBuilder], // Provide FormBuilder
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Rest of your test cases
});

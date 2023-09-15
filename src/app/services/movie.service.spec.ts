import { TestBed } from '@angular/core/testing';
import { MovieService } from './movie.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  });

  httpMock = TestBed.inject(HttpTestingController);
});

it('should get movies', () => {
  service = TestBed.get(MovieService);
  service.getMovies().subscribe();
});


});

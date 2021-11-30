import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChartsdataService } from './chartsdata-service';

describe('ChartsdataServiceService', () => {
  let service: ChartsdataService, httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ChartsdataService,
      ]
    });
    service = TestBed.inject(ChartsdataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should retrieve employee 2019 Data', () => {
    service.get2019data()
      .subscribe(emps => {
        expect(emps).toBeTruthy('No EmployeeData returned');
        expect(emps.employeesNum.length).toBe(12, 'Incorrect number of months');
        expect(emps.year).toBe('2019');
      })

    const req = httpTestingController.expectOne('https://localhost:44359/api/employeedata2019');

    expect(req.request.method).toEqual("POST");

    req.flush({
      "employeesNum": [69, 99, 77, 55, 46, 88, 100, 90, 49, 50, 48, 46],
      "year": "2019"
    });
  })


  it('should retrieve employee 2019 Data', () => {
    service.get2019data()
      .subscribe(emps => {
        expect(emps).toBeTruthy('No EmployeeData returned');
        expect(emps.employeesNum.length).toBe(12, 'Incorrect number of months');
        expect(emps.year).toBe('2020');
      })

    const req = httpTestingController.expectOne('https://localhost:44359/api/employeedata2020');

    expect(req.request.method).toEqual("POST");

    req.flush({
      "employeesNum": [69, 67, 90, 66, 105, 88, 100, 90, 77, 65, 99, 120],
      "year": "2020"
    });
  })

  it('should retrieve employee 2021 Data', () => {
    service.get2019data()
      .subscribe(emps => {
        expect(emps).toBeTruthy('No EmployeeData returned');
        expect(emps.employeesNum.length).toBe(12, 'Incorrect number of months');
        expect(emps.year).toBe('2021');
      })

    const req = httpTestingController.expectOne('https://localhost:44359/api/employeedata2021');

    expect(req.request.method).toEqual("POST");

    req.flush({
      "employeesNum": [68, 98, 104, 147, 69, 95, 110, 90, 77, 65, 68, 130],
      "year": "2021"
    });
  })
});

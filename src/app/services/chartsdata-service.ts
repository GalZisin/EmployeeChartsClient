import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEmployeeResponce } from '../model/chart.model';

@Injectable({
  providedIn: 'root'
})
export class ChartsdataService {

  private readonly BASE_URL = 'https://localhost:44359/api/';

  constructor(private http: HttpClient) { }

  get2021data(): Observable<any> {
    return this.http.post<IEmployeeResponce>(this.BASE_URL + 'employeedata2021', null);

  }
  get2020data(): Observable<any> {
    return this.http.post<IEmployeeResponce>(this.BASE_URL + 'employeedata2020', null);
  }
  get2019data(): Observable<any> {
    return this.http.post<IEmployeeResponce>(this.BASE_URL + 'employeedata2019', null)
  }
}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://datadashboard.health.gov.il/api/checkup/nursing/';
@Injectable({
  providedIn: 'root',
})

export class ApiService {

  baseUrl = 'http ://localhost/api/';

  constructor(private http: HttpClient) {}

  public getAllByYearIsNull(): Observable<any>{
    debugger
    return this.http.get<any[]>(API_URL);
  }

  public getAllByComparisonGroup(): Observable<any>{
    debugger
    return this.http.get<any[]>('https://datadashboard.health.gov.il/api/experienceInstitutes/surveyPatientExperienceVariables');
  }
}
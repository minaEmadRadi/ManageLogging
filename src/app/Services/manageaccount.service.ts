import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class ManageaccountService {

  private url = 'User';

  constructor(private http: HttpClient) {}

  public getUseres(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateUser(User: User): Observable<User[]> {
    return this.http.put<User[]>(
      `${environment.apiUrl}/${this.url}`,
      User
    );
  }

  public createUser(User: User): Observable<User[]> {
    return this.http.post<User[]>(
      `${environment.apiUrl}/${this.url}`,
      User
    );
  }

  public deleteUser(User: User): Observable<User[]> {
    return this.http.delete<User[]>(
      `${environment.apiUrl}/${this.url}/${User.id}`
    );
  }
}

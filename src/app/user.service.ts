import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/rx';

interface MyData {
  message: string;
  success: boolean;
}
interface IsLoggedIn {
  status: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getSomeData() {
    return this.http.get<MyData>('/api/database.php');
  }

  isLoggedIn(): Observable<IsLoggedIn> {
    return this.http.get<IsLoggedIn>('/api/isloggedin.php');
  }
}

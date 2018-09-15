import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
interface MyData {
  success: boolean;
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /*using local storage*/
   private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: HttpClient) {
  }

  setLoggedInStatus(value: boolean) {
    this.loggedInStatus = value;
     localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() {
    /*using local storage*/
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  getUserDetails(username, password) {
    return this.http.post<MyData>('/api/auth.php', {
      username,
      password
    });
  }
}

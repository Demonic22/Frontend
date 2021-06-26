import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private webService:WebService) { }

  public loginUser(loginUser: object){
    return this.webService.post('login',loginUser); 
   }
}

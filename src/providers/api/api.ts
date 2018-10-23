import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  public apiUrl: string = 'https://development.mycit.co.in/pradnyaphp/tblNameNewV1Pdo/';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

}

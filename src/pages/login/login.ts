import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient  } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';

import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ApiProvider]
})
export class LoginPage {

  private username: string;
  private password: string;
  private selectedUserType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public api: ApiProvider, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    let body = new FormData();
    body.append('Usertype', this.selectedUserType);
    body.append('Mobileno', this.username);
    body.append('Password', this.password);

    this.http.post(this.api.apiUrl+'Login.php', body)
        .toPromise()
        .then((data: any) => {
          if(data.success == '0') {
            // console.log('Success', data.Parent_Fname);
            alert(data.message);
            return data;
          } else{
                // this.navCtrl.push(ListdemoPage, { parentFName: data.Parent_Fname, parentLName: data.Parent_Lname });
                alert("Welcome "+data.Parent_Fname+" "+data.Parent_Lname);
                console.log(data);
              }
       })
       .catch(err => {
          console.log('Error', err);
          return err;
       })
  }
}

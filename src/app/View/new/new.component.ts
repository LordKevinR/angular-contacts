import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api/api.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  newForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),

  })

  constructor(private api: ApiService, private router: Router,) { }

  postForm(form: any) {

    this.api.putContact(form).subscribe(res => {
      console.log(res);
    })
  }

  cancel(){
    this.router.navigate(['/dashboard']);
  }
}

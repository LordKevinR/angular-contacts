import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IContactsList } from '../../Models/contactsList.interface'
import { ApiService } from 'src/app/Services/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  dataContact: IContactsList;

  editForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),

  })

  constructor (private activerouter: ActivatedRoute, private router: Router, private api:ApiService) {

    let contactid = this.activerouter.snapshot.params['id'];
    this.api.getSingleContact(contactid).subscribe(res => {
      this.dataContact = res[0];
      this.editForm.setValue({
        'id': this.dataContact.id,
        'firstName': this.dataContact.firstName,
        'lastName': this.dataContact.lastName,
        'email': this.dataContact.email,
        'phoneNumber': this.dataContact.phoneNumber,
      });
    });
  }

  postForm(form: any) {

    this.api.putContact(form).subscribe(res => {
      console.log(res);
    })

  }

  delete(){
    let data = this.editForm.value;
    this.api.deleteContact(data).subscribe(res => {
      console.log(data);
    })
  }

  cancel(){
    this.router.navigate(['/dashboard']);
  }

}

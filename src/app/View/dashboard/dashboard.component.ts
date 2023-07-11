import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api/api.service';
import { Router } from '@angular/router';
import { IContactsList } from '../../Models/contactsList.interface'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  contacts: IContactsList[] = [];

  constructor(private api: ApiService, private router:Router) {

    this.api.getAllContacts().subscribe(res => {
      this.contacts = res;
    })
  }

  editContact(id: number) {
    this.router.navigate(['edit', id]);
  }

  newContact(){
    this.router.navigate(['new']);
  }
}

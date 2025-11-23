import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class Users {

  users = [
    { id: 1, nom: "amir", role: "Admin", email: "amir@company.com" },
    { id: 2, nom: "abelwaheb", role: "Support", email: "abdelwaheb@company.com" },
    { id: 3, nom: "iyed", role: "User", email: "iyed@company.com" }
  ];
}

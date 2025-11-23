import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  nom: string;
  email: string;
  role: string;
  statut: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class Admin {
  users: User[] = [
    { id: 1, nom: 'Amir Bellili', email: 'amir@techflow.com', role: 'Administrateur', statut: 'Actif' },
    { id: 2, nom: 'Sarra Ben', email: 'sarra@techflow.com', role: 'Responsable', statut: 'Actif' },
    { id: 3, nom: 'Mohamed Ali', email: 'mohamed@techflow.com', role: 'Utilisateur', statut: 'Inactif' },
  ];

  newUser: User = { id: 0, nom: '', email: '', role: 'Utilisateur', statut: 'Actif' };

  ajouterUser() {
    if (!this.newUser.nom || !this.newUser.email) return;
    this.newUser.id = this.users.length ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
    this.users.push({ ...this.newUser });
    this.newUser = { id: 0, nom: '', email: '', role: 'Utilisateur', statut: 'Actif' };
  }

  supprimerUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }

  toggleStatut(user: User) {
    user.statut = user.statut === 'Actif' ? 'Inactif' : 'Actif';
  }
}

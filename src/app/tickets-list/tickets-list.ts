import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-tickets-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // ⬅️ أضفنا RouterModule
  templateUrl: './tickets-list.html',
  styleUrls: ['./tickets-list.css']
})
export class TicketsList {

  search: string = '';

  tickets = [
    { id: 1, titre: 'Problème login', priorite: 'Haute', statut: 'Ouvert', date: '10/11/2025' },
    { id: 2, titre: 'Erreur API', priorite: 'Moyenne', statut: 'En cours', date: '11/11/2025' },
    { id: 3, titre: 'Bug UI', priorite: 'Basse', statut: 'Résolu', date: '12/11/2025' },
    { id: 4, titre: 'Demande fonctionnalité', priorite: 'Moyenne', statut: 'Ouvert', date: '13/11/2025' }
  ];

  get filteredTickets() {
    if (!this.search.trim()) return this.tickets;

    const s = this.search.toLowerCase();

    return this.tickets.filter(t =>
      t.titre.toLowerCase().includes(s) ||
      t.priorite.toLowerCase().includes(s) ||
      t.statut.toLowerCase().includes(s)
    );
  }
}

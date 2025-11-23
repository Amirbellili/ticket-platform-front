import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-form.html',
  styleUrls: ['./ticket-form.css']
})
export class TicketForm {

  mode: 'create' | 'edit' = 'create';
  ticketId: number | null = null;

  ticket = {
    titre: '',
    description: '',
    priorite: 'Moyenne',
    statut: 'Ouvert'
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mode = 'edit';
      this.ticketId = Number(id);

      // Exemple de données simulées (normalement backend)
      this.ticket = {
        titre: "Bug d'affichage",
        description: "Le tableau des tickets ne charge pas correctement.",
        priorite: 'Haute',
        statut: 'En cours'
      };
    }
  }

  enregistrer() {
    if (this.mode === 'create') {
      console.log("📌 Nouveau ticket créé :", this.ticket);
    } else {
      console.log(`📌 Ticket ${this.ticketId} modifié :`, this.ticket);
    }

    this.router.navigate(['/tickets']);
  }
}


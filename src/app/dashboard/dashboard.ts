import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // ⬅️ مهم جداً

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],   // ⬅️ لازم نضيفو هنا
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {

  ticketsOuverts = 32;
  ticketsEnCours = 8;
  ticketsResolus = 20;
  tempsResolution = "2h 15m";

  evolution = [
    { date: "1 Nov", value: 12 },
    { date: "8 Nov", value: 8 },
    { date: "15 Nov", value: 25 },
    { date: "22 Nov", value: 18 },
    { date: "25 Nov", value: 35 }
  ];
}

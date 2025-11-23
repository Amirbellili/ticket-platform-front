import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrls: ['./settings.css']
})
export class Settings {
  
  user = {
    name: "Amir Bellili",
    email: "amir.bel@example.com"
  };

  preferences = {
    darkMode: false,
    notifications: true
  };

  saveSettings() {
    alert("Paramètres sauvegardés !");
  }
}

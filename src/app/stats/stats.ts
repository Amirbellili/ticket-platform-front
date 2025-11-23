import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.html',
  styleUrls: ['./stats.css']
})
export class Stats implements AfterViewInit {

  // Données du graphique bar
  evolution = [
    { label: "Jan", value: 35 },
    { label: "Fév", value: 20 },
    { label: "Mar", value: 45 },
    { label: "Avr", value: 30 },
    { label: "Mai", value: 55 }
  ];

  // Données pie chart
  pieData = {
    resolus: 40,
    urgents: 20,
    cours: 25
  };

  ngAfterViewInit() {
    this.drawBarChart();
    this.drawPieChart();
  }

  // Dessiner Bar Chart
  drawBarChart() {
    const canvas: any = document.getElementById('barChart');
    const ctx = canvas.getContext('2d');

    const barWidth = 40;
    const barGap = 40;
    const baseY = 180;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.evolution.forEach((item, index) => {
      const x = 50 + index * (barWidth + barGap);
      const height = item.value * 2.5;

      ctx.fillStyle = "#4a6cf7";
      ctx.fillRect(x, baseY - height, barWidth, height);

      ctx.fillStyle = "#333";
      ctx.fillText(item.label, x + 5, baseY + 20);
    });
  }

  // Dessiner Pie Chart
  drawPieChart() {
    const canvas: any = document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');
    const total = this.pieData.resolus + this.pieData.urgents + this.pieData.cours;

    const angles = [
      (this.pieData.resolus / total) * 2 * Math.PI,
      (this.pieData.urgents / total) * 2 * Math.PI,
      (this.pieData.cours / total) * 2 * Math.PI
    ];

    const colors = ["#2ecc71", "#e74c3c", "#3498db"];
    let start = 0;

    angles.forEach((angle, i) => {
      ctx.beginPath();
      ctx.moveTo(150, 150);
      ctx.fillStyle = colors[i];
      ctx.arc(150, 150, 100, start, start + angle);
      ctx.fill();
      start += angle;
    });
  }
}

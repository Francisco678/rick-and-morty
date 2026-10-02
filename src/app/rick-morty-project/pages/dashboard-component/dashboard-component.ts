import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-home-component',
  styleUrl: './dashboard-component.css',
  templateUrl: './dashboard-component.html',
})
export default class DashBoardComponent {}

import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardData: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getDashboardData().subscribe(data => {
      this.dashboardData = data;
    });
  }
}

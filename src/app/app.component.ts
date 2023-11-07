import { Component, OnInit } from '@angular/core';
import { Graph } from './graph/graph';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Graphs';
  percents: Graph[] = [];
  error = '';
  success = '';
        
  constructor(private apiService: ApiService) {
  }
}


        
 
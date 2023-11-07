import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-graphReport',
  templateUrl: './graphReport.html',
  styleUrls: ['./graphReport.scss']
})
export class GraphReport implements OnInit {
  data: any;
  chartOptions: any;
  surveyData: any[] = [];
  graphData: any[] = [];
  fetchData: any;
  constructor(private http: HttpClient, private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.loadData();
    this.fetchData();
  }

  loadData() {
    this.http.get<any[]>('assets/comparisonGroup.json').subscribe(data => {
      this.prepareChartData(data);
    });
  }

  prepareChartData(data: any[]) {
    const uniqueSubjects:any[] = []; // To store unique subjects
    const uniqueScores:any[] = []; // To store unique scores
    const uniqueItems:any[] = []; // To store unique scores

    this.data = {
      labels: data.map(item => {
        if (!uniqueSubjects.includes(item.subject)) {
          uniqueSubjects.push(item.subject);
          uniqueItems.push(item);
          return item.subject;
        }
      }),
      datasets: [
        {
          label: 'בינוניים-גדולים',
          data: data.map(item => {
            if (uniqueItems.find(x => item == x)) {
              uniqueScores.push(item.avgSubjectScore);
              return item.score;
            }
            
            return null;
          })
        },
        {
            label: 'מרכז על',
            data: data.map(item => {
              if (uniqueItems.find(x => item)) {
                uniqueScores.push(item.avgSubjectScore);
                return item.score;
              }
              
              return null;
            })
        },
        {
          label: 'קטנים',
          data: data.map(item => {
            if (uniqueItems.find(x => item == x)) {
              uniqueScores.push(item.avgSubjectScore);
              return item.score;
            }
            
            return null;
          })
      }
      ],
  }

     this.chartOptions = {
      responsive: true
    }  
  }
}
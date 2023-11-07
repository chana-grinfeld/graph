import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-graph',
    templateUrl: './graph.html',
    styleUrls: ['./graph.scss']
  })
  
  export class Graph implements OnInit{
    chartOptions:any;
    chartData: any;
    comparisonGroupList:Graph[] = [];
    data: any;
    year: Graph[] = [];
    yearIsNullList: any[] = [];

    constructor(private apiService: ApiService) {
      this.data = {
        labels: ['תנאים פיזיים', 'יעילות הטיפול', 'העצמת המטופל', 'רצף טיפולי', 'מתן מידע', 'יחס וכבוד למטופל','נכונות להמליץ', 'מטופל בידיים טובות', 'שביעות רצון כללית'],
        datasets: [
            {
              label: 'בינוניים-גדולים',
              data: this.getGraphsByComparisonGroup("בינוניים-גדולים")
            },
            {
                label: 'מרכז על',
                data: this.getGraphsByComparisonGroup("מרכז על")
            },
            {
              label: 'קטנים',
              data: [this. getGraphsByComparisonGroup("קטנים")]
          }
        ]
    }
  }

    ngOnInit() {
        this.getGraphsByComparisonGroup('Center / Periphery');
    }
    //By Year Is Null
  getGraphsByYearIsNull(yearIsNullList: String) {
    const filteredData = this.comparisonGroupList.filter(item => item.year === null);
    this.apiService.getAllByYearIsNull()
    .subscribe(data => {
      console.log()
      this.yearIsNullList = data.filter((x: { yearIsNullList: string; }) => x.yearIsNullList == null);
      console.log(yearIsNullList);
      this.chartData = [
        { data: filteredData.map(item => item.year), label: 'Year' }
      ];
      this.chartOptions = {
        responsive: true
      };
    });
}

    getGraphsByComparisonGroup(comparisonGroup: string) {
      this.apiService.getAllByComparisonGroup().subscribe(data => {
        this.comparisonGroupList = data.filter((x: { comparisonGroup: string }) => x.comparisonGroup === comparisonGroup);
        this.prepareChartData();
      });
    }
  
    prepareChartData() {
      this.data = {
        labels: this.comparisonGroupList.map(item => item.comparisonGroupList),
        datasets: [
          {
            label: 'Comparison Group',
            data: this.comparisonGroupList.map(item => item.comparisonGroupList)
          }
        ]
      };
  
      this.chartOptions = {
        responsive: true
      };
    }
}
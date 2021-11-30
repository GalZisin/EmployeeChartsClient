import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import *  as pluginAnnotations from 'chartjs-plugin-datalabels';
import { ChartsdataService } from '../services/chartsdata-service';
import { chartName, MyChartDataSets } from '../model/chart.model';
import * as chartJs from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


  constructor(private chartDataService: ChartsdataService) { }
  public employeeData2021: number[] = [];
  public employeeData2020: number[] = [];
  public employeeData2019: number[] = [];
  ngOnInit(): void {
    this.fetchData();

  }

  private fetchData() {
    this.chartDataService.get2021data().subscribe(
      res => {
        // console.log(res)
        this.employeeData2021 = res.employeesNum;
        this.displayChart(res.employeesNum, res.year)
      }
    )
    this.chartDataService.get2020data().subscribe(
      res => {
        // console.log(res)
        this.employeeData2020 = res.employeesNum;
        this.displayChart(res.employeesNum, res.year)
      }
    )
    this.chartDataService.get2019data().subscribe(
      res => {
        // console.log(res)
        this.employeeData2019 = res.employeesNum;
        this.displayChart(res.employeesNum, res.year)

        // console.log(JSON.stringify(this.employeeData2019))
        // console.log(res.year)
      }
    )
  }

  // public ChartsData: ChartDataSets[] = [
  //   // { data: [65, 70, 80, 81, 90, 100, 110, 112, 120, 126, 133, 145], label: 'Series A', type: 'bar' },
  //   // { data: [55, 66, 90, 77, 100, 80, 101, 111, 125, 130, 140, 149], label: 'Series B', type: 'line' },
  //   // {
  //   //   data: [
  //   //     { x: 55, y: 66 },
  //   //     { x: 60, y: 68 },
  //   //     { x: 78, y: 99 },
  //   //     { x: 89, y: 77 },
  //   //     { x: 78, y: 87 },
  //   //     { x: 85, y: 100 },
  //   //     { x: 89, y: 110 },
  //   //     { x: 100, y: 127 },
  //   //     { x: 137, y: 110 },
  //   //     { x: 145, y: 144 },
  //   //     { x: 146, y: 147 },

  //   //   ], label: 'Series C', pointRadius: 10, type: 'scatter'
  //   // }
  //   { data: this.employeeData2021, label: 'Series A', type: 'bar' },
  //   { data: this.employeeData2020, label: 'Series B', type: 'line' },
  //   { data: [this.employeeData2019], label: 'Series C', pointRadius: 10, type: 'scatter' }
  // ];

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        // {
        //   id: 'y-axis-1',
        //   position: 'right',
        //   gridLines: {
        //     color: 'rgba(255,0,0,0.3)',
        //   },
        //   ticks: {
        //     fontColor: 'red',
        //   }
        // }
      ]
    },
    annotation: {

    },

  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(11, 127, 171, 0.3)',

      borderColor: 'blue',
      // pointBackgroundColor: 'rgba(148,159,177,1)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(148,159,177,0.8)'

    },
    { // dark grey
      backgroundColor: 'transparent',
      borderColor: 'green',
      // pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      // backgroundColor: 'lightred',
      borderColor: 'red',
      pointHoverRadius: 10,
      pointBackgroundColor: '#F08080',
      //pointBorderColor: '#fff',

      pointHoverBackgroundColor: 'red',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  // public lineChartType: ChartType = 'line';

  public lineChartPlugins = [pluginAnnotations];
  public ChartsData: MyChartDataSets[] = [];
  public readonly lineChartType: chartJs.ChartType = 'line';

  private displayChart(chartData: number[], chartName: chartName) {
    if (!chartData || chartData.length == 0 || !chartName) {
      return;
    }
    let chartLine = this.ChartsData.find(el => el.label === chartName);
    const tempChartLine: MyChartDataSets = { data: chartData, label: chartName };
    if (!chartLine) {
      this.ChartsData = [...this.ChartsData, tempChartLine];
    } else {
      chartLine = tempChartLine;
    }
  }
}




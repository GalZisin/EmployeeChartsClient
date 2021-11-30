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

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData() {
    this.chartDataService.get2021data().subscribe(
      res => {
        this.displayChart(res.employeesNum, res.year)
      }
    )
    this.chartDataService.get2020data().subscribe(
      res => {
        this.displayChart(res.employeesNum, res.year)
      }
    )
    this.chartDataService.get2019data().subscribe(
      res => {
        this.displayChart(res.employeesNum, res.year)
      }
    )
  }

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
      ]
    },
    annotation: {

    },

  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(11, 127, 171, 0.3)',
      borderColor: 'blue',
    },
    {
      backgroundColor: 'transparent',
      borderColor: 'green',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      borderColor: 'red',
      pointHoverRadius: 10,
      pointBackgroundColor: '#F08080',
      pointHoverBackgroundColor: 'red',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;

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




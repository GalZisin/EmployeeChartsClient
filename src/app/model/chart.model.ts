import { ChartDataSets } from "chart.js";


export interface IEmployeeResponce {
    employeesNum: number[];
    year: chartName;
}

export type chartName = '2019' | '2020' | '2021' | '';

export interface MyChartDataSets extends ChartDataSets {
    label: chartName;
}
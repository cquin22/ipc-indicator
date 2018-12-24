import {IDataResultChart} from './i-data-result-chart';


export interface IChart {
  view?: Array<number>; // the dimensions of the chart [width, height]. If left undefined, the chart will fit to the parent container size
  results?: Array<IDataResultChart>; // the chart data
  scheme?: any; // the color scheme of the chart
  customColors?: any; // custom colors for the chart. Used to override a color for a specific value
  animations?: boolean; // enable animations default: true
  cardColor?: string; // color of the card background, defaults to color based on value and scheme
  bandColor?: string; // color of the card color-bar, defaults to color based on value and scheme
  textColor?: string; // color of the card text, defaults to the inverse of the card color
  emptyColor?: string; // color of empty card slots
  innerPadding?: any; // padding around each card in px
  valueFormatting?: any; // function that formats the card value
  labelFormatting?: any; // function that formats the card label
  // vertical bar
  legend?: boolean;
  legendTitle?: string;
  legendPosition?: string;
  xAxis?: boolean;
  yAxis?: boolean;
  showGridLines?: boolean;
  roundDomains?: boolean;
  showXAxisLabel?: boolean;
  showYAxisLabel?: boolean;
  xAxisLabel?: string;
  yAxisLabel?: string;
  xAxisTickFormatting?: string;
  yAxisTickFormatting?: string;
  xAxisTicks?: any;
  yAxisTicks?: any;
  showDataLabel?: boolean;
  gradient?: boolean;
  activeEntries?: Array<Object>;
  barPadding?: number;
  tooltipDisabled?: boolean;
  tooltipTemplate?: any;
  yScaleMax?: number;
  yScaleMin?: number;
  roundEdges?: boolean;
  // Line chart
  rangeFillOpacity?: number;
  timeline?: boolean;
  autoScale?: boolean;
  curve?: any;
  referenceLines?: Array<Object>;
  showRefLines?: boolean;
  showRefLabels?: boolean;
  xScaleMin?: any;
  xScaleMax?: any;
  // Pie grid chart
  minWidth?: number;
  designatedTotal?: number;
}

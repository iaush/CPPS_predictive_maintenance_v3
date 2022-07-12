import {LegendMarkers, MarkerType} from "@progress/kendo-angular-charts";

const chartFontFamily = 'sans-serif';
const markerType: MarkerType = 'circle';

const legendType: LegendMarkers = {
  type: markerType
};

export const chartConfig = {
  mainTitleFont: `1.3vw ${chartFontFamily}`,
  axisTitleFont: `1vw ${chartFontFamily}`,
  axisLabelFont: `0.75vw ${chartFontFamily}`,
  legendFont:  `1vw ${chartFontFamily}`,
  markerSize:  15,
  lineWidth: 3,
  majorLineWidth: 1,
  lineChartWidth: 5,
  lineColor: '#9191a1',
  legendType
};

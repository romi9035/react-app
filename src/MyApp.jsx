import React,{ useState } from "react";
import {
    Avatar,
    Card,
    CardHeader,
    Text,
    ShellBar,
    ShellBarItem,
    List,
    StandardListItem,
    CustomListItem,
    ValueState,
    ProgressIndicator,
    FlexBox,
    FlexBoxJustifyContent,
    FlexBoxWrap,
    FlexBoxDirection,
    AnalyticalTable,
    Icon
  } from "@ui5/webcomponents-react";
  import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";
import {BarChart,LineChart } from "@ui5/webcomponents-react-charts";
import lineChartIcon from '@ui5/webcomponents-icons/dist/line-chart.js';
import addIcon from "@ui5/webcomponents-icons/dist/add.js";
import barChartIcon from '@ui5/webcomponents-icons/dist/horizontal-bar-chart.js';
const dataset = [
    {
      month: "January",
      data: 65
    },
    {
      month: "February",
      data: 59
    },
    {
      month: "March",
      data: 80
    },
    {
      month: "April",
      data: 81
    },
    {
      month: "May",
      data: 56
    },
    {
      month: "June",
      data: 55
    },
    {
      month: "July",
      data: 40
    }
  ];
  
export function MyApp() {
    const [toggleCharts, setToggleCharts] = useState("lineChart");
    const [loading, setLoading] = useState(false);
    const handleHeaderClick = () => {
        if (toggleCharts === "lineChart") {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setToggleCharts("barChart");
            }, 2000);
          } else {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setToggleCharts("lineChart");
            }, 2000);
          }
    };
    const contentTitle = toggleCharts === 'lineChart' ? 'Line Chart' : 'Bar Chart';
const switchToChart = toggleCharts === 'lineChart' ? 'Bar Chart' : 'Line Chart';
  return <div>
<ShellBar
  logo={<img src="reactLogo.png" />}
  profile={
    <Avatar>
      <img src="profilePictureExample.png" />
    </Avatar>
  }
  primaryTitle="My App"
>
  <ShellBarItem icon={addIcon} text="Add" />
</ShellBar>

  <Card header={<CardHeader titleText="Stock Prices" subtitleText={`Click here to switch to ${switchToChart}`} interactive  onClick={handleHeaderClick}/>}
   style={{ width: "300px" }}
   avatar={ <Icon name={ toggleCharts === "lineChart" ? lineChartIcon : barChartIcon } /> }>
    
  <Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>
  {toggleCharts === "lineChart" ? (
      <LineChart
        dimensions={[{ accessor: "month" }]}
        measures={[{ accessor: "data", label: "Stock Price" }]}
        dataset={dataset}
        loading={loading}
      />
    ) : (
      <BarChart
        dimensions={[{ accessor: "month" }]}
        measures={[{ accessor: "data" }]}
        dataset={dataset}
        loading={loading}
      />
    )}
  </Card>
</div>;
}

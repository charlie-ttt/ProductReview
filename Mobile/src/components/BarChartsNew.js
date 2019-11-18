import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { StackedBarChart } from 'react-native-chart-kit';

const BarCharts = () => {
  const data = {
    labels: ['❤️', '🍰'],
    legend: [''],
    data: [[45], [80]],
    barColors: ['#dfe4ea', '#ced6e0', '#a4b0be']
  };
  // const screenWidth = Dimensions.get('window').width;
  return (
    <StackedBarChart
      width={Dimensions.get('window').width - 250}
      height={220}
      data={data}
      yAxisSuffix="%"
      withInnerLines={false}
      hasLegend={false}
      chartConfig={{
        backgroundColor: 'white',
        backgroundGradientFrom: '#eff3ff',
        backgroundGradientTo: '#efefef',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16
        }
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    />
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    // alignSelf: 'flex-start',
    width: '45%'
    // marginRight: 10
  }
});

export default BarCharts;

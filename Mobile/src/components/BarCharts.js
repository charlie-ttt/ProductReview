import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const BarCharts = () => {
  const barData = {
    labels: ['yum', '💗'],
    datasets: [
      {
        data: [55, 95]
      }
    ]
  };
  // const screenWidth = Dimensions.get('window').width;
  return (
    <View style={styles.backgroundStyle}>
      <BarChart
        // style={graphStyle}
        yAxisSuffix="%"
        fromZero={true}
        withInnerLines={false}
        data={barData}
        width={150}
        height={220}
        // yAxisLabel={''}
        // verticalLabelRotation={270}
        // withHorizontalLabels={false}
        chartConfig={{
          backgroundColor: 'white',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 0,
          color: () => `rgba(0, 0, 0)`,

          style: {
            justifyContent: 'center'
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    // alignSelf: 'flex-start',
    width: 180,
    marginRight: 10
  }
});

export default BarCharts;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const BarCharts = () => {
  const barData = {
    labels: ['🍰', '💗'],
    datasets: [
      {
        data: [85, 34]
      }
    ]
  };
  // const screenWidth = Dimensions.get('window').width;
  return (
    // <View style={styles.backgroundStyle}>
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
        // backgroundColor: 'white',
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        backgroundGradientFrom: 'white',
        backgroundGradientTo: 'white',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(101, 157, 236, ${opacity})`,

        style: {
          justifyContent: 'center'
        }
      }}
      style={styles.backgroundStyle}
    />

    // </View>
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

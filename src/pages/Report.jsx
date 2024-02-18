import React, { useState, useContext } from 'react';
import { ScrollView, StyleSheet, View, Modal, TouchableOpacity, Text, useWindowDimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { TabView, TabBar } from 'react-native-tab-view';
import { Fragment } from 'react';
import { ReportContext } from '../common/contexts/ReportContext';

const FirstRoute = () => (
  <View style={styles.container}>

  </View>
);

const SecondRoute = () => (
  <View style={styles.container}>

  </View>
);

const ThirdRoute = () => (
  <View style={styles.container}>

  </View>
);

// 設定tabBar顏色
const renderTabBar = (props) => (
  <TabBar
    {...props}// 顯示props.navigationStateroutes 資訊[卡路里 巨量 營養素]
    style={{ backgroundColor: '#888888' }}
    indicatorStyle={{
      backgroundColor: '#FFFFFF',
      height: 3
    }}
  />
);

export default function Report() {

  const [index, setIndex] = useState(0);

  // 交易畫面共用資料以及函數
  const {
    translate
  } = useContext(ReportContext);

  const layout = useWindowDimensions();

  const routes = [
    { key: 'first', title: translate('REPORT.TITLE.K_CAL') },// 卡路里
    { key: 'second', title: translate('REPORT.TITLE.QUANTITY') },// 巨量
    { key: 'third', title: translate('REPORT.TITLE.NUTRIENTS') }// 營養素
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute />;
      case 'second':
        // 透過傳遞參數方式 避免每次組件渲染造成SearchBar重新回到初始狀態
        return <SecondRoute />;
      case 'third':
        return <ThirdRoute />;
      default:
        return <FirstRoute />;
    }
  };

  return (
    <Fragment>
      {/** 滾動Tab */}
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </Fragment>
  );
}

Report.propTypes = {

};

Report.defaoultProps = {

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444444'
  },
});
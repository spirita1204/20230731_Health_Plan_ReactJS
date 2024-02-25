import React from 'react';
import { Fragment } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Record from '../../common/components/Record';

export default function AvatarPage() {
  return (
    <Fragment>
      <ScrollView style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              {/* 头像框 */}
              <View style={styles.avatarContainer}>
                {/* 这里放置头像 */}
              </View>
              {/* 显示姓名 */}
              <Text style={styles.name}>Spiritachen</Text>
            </View>
            {/* 文章数量、追随者数量、正在关注数 */}
            <View tyle={styles.infoContainer2}>
              <View style={styles.infoContainer}>
                <View style={styles.infoWrapper}>
                  <Text style={styles.infoNumber}>10</Text>
                  <Text style={styles.infoText}>文章</Text>
                </View>
                <View style={styles.infoWrapper}>
                  <Text style={styles.infoNumber}>100</Text>
                  <Text style={styles.infoText}>追隨者</Text>
                </View>
                <View style={{ ...styles.infoWrapper, marginRight: 0 }}>
                  <Text style={styles.infoNumber}>50</Text>
                  <Text style={styles.infoText}>正在關注</Text>
                </View>
              </View>
              {/* 按钮 */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon name="create" size={16} color="#FFFFFF" style={{ marginTop: 2, marginRight: 2 }} />
                    <Text style={styles.buttonText}>日記項目</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.header}>
            <View style={styles.infoContainer2}>
              <View style={styles.infoContainer3}>
                <Text style={styles.infoText}>目前減少 : 4公斤</Text>
              </View>
              <View style={styles.infoContainer3}>
                <Text style={styles.infoText}>進程 : 每星期增加0.3公斤</Text>
              </View>
              <View style={styles.infoContainer3}>
                <Text style={styles.infoText}>還剩 : 6公斤</Text>
              </View>
            </View>
          </View>
        </View>
        {/* 顯示過往紀錄資料 */}
        <Record />
      </ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444444',
    flex: 1,
  },
  container2: {
    alignItems: 'center',
    backgroundColor: '#666666',
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  headerContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#FFFFFF', // 头像框背景色
    marginRight: 10,
    // 可以添加样式以使其看起来像一个头像框
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  infoContainer2: {
    flexDirection: 'column',
  },
  infoContainer3: {
    backgroundColor: '#888888',
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 2,
    alignItems: 'center'
  },
  infoWrapper: {
    alignItems: 'center',
    marginRight: 20,
  },
  infoNumber: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#666666',
    borderWidth: 1,
    borderColor: '#00DD00',
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginTop: 15,
    borderRadius: 5,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
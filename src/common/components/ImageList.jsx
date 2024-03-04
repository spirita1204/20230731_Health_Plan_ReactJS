import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { FlatList, StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';


ImageList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default function ImageList({ items }) {

  const { t } = useTranslation('common');

  const [dim] = useState((Dimensions.get('window').width - 30) / 2);

  const itemsTest = [
    { title: '法國麵包', time: '30分鐘' },
    { title: '英國麵包', time: '30分鐘' },
    { title: '德國麵包', time: '30分鐘' },
    { title: '台灣麵包', time: '30分鐘' },
    { title: '日本麵包', time: '30分鐘' },
    { title: '香港麵包', time: '30分鐘' },
    { title: '香蕉起司火腿麵包', time: '30分鐘' },
    { title: '超級美味噴麵包', time: '30分鐘' },
    { title: '日本麵包', time: '30分鐘' },
    { title: '香港麵包', time: '30分鐘' },
    { title: '香蕉起司火腿麵包', time: '30分鐘' },
    { title: '超級美味噴麵包', time: '30分鐘' },
    { title: '日本麵包', time: '30分鐘' },
    { title: '香港麵包', time: '30分鐘' },
    { title: '香蕉起司火腿麵包', time: '30分鐘' },
    { title: '超級美味噴麵包', time: '30分鐘' },
  ];

  return (
    <Fragment>
      <FlatList
        data={(items.length != 0 ? items : itemsTest)}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { width: dim, backgroundColor: '#888888' }]}>
            <Image source={{ uri: 'https://tokyo-kitchen.icook.network/uploads/recipe/cover/373627/63cf385d08778d22.jpg' }} style={styles.itemImage} />
            <View style={styles.overlay}>
              <Text style={styles.itemName}>{item.title}</Text>
              <Text style={styles.itemCode}>{item.time + ' ' + t('TIME.MIN')}</Text>
            </View>
          </View>
        )}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 8,
    height: 150,
    overflow: 'hidden', // Hide any overflow
    position: 'relative',
    margin: 7, // Adjust spacing between items
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Fill the entire container
    justifyContent: 'flex-end',
    padding: 10,
  },
  itemName: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  itemCode: {
    fontSize: 12,
    color: '#fff',
  },
  itemImage: {
    width: '100%',
    height: '100%', // Adjust the height based on your preference
    borderRadius: 8,
    marginBottom: 0,
  },
});
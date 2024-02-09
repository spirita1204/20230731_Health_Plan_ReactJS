import React from 'react'
import { Fragment } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native';

export default function Report() {
  return (
    <Fragment>
      <ScrollView style={styles.container}>

      </ScrollView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10, // Add padding around the content
    backgroundColor: '#444444'
  },
});
import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from '../common/components/Header';
import TabBar from '../common/components/TabBar';

const Tab = createBottomTabNavigator();

export default function HomePage() {
    return (
        <TabBar/>
    )
}

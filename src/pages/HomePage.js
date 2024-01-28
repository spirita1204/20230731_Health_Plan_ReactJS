import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../common/components/TabBar';

const Tab = createBottomTabNavigator();

export default function HomePage() {
    return (
        <TabBar/>
    )
}

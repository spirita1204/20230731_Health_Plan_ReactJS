import React from 'react';
import { MyPlaceProvider } from '../contexts/MyPlaceContext';
import MyPlace from '../../pages/MyPlace';

const MYPLACE = (import('../../pages/MyPlace'));

export default (
    <MyPlaceProvider><MyPlace /></MyPlaceProvider>
);
import React from 'react';
import { Fragment } from 'react';
import HeatMap from 'react-native-heatmap-chart';

export default function HeatMapCharts() {
    return (
        <Fragment>
            <HeatMap
                values={[
                    0, 4, 6, 1, 7, 3, 0, 8, 6, 2,
                    0, 10, 20, 12, 0, 0, 10, 0, 17, 8,
                    0, 6, 0, 6, 10, 23, 20, 12, 0, 0,
                    10, 0, 17, 8, 0, 6, 0, 6, 10, 23,
                    10, 0, 17, 8, 0, 6, 0, 6, 10, 23,
                    10, 0, 17, 8, 0, 6, 0, 6, 10, 23,
                    10, 0, 17, 8, 0, 6, 0, 6, 10, 23,
                    10, 0, 17, 8, 0, 6, 0, 6, 10, 23,
                    10, 0, 17, 8, 0, 6, 0, 6, 10, 23,
                    10, 0, 17, 8, 0, 6, 0, 6, 10, 23,
                ]}
                numberOfLines={10}
                blocksSize={7}
                blocksStyle={{
                    margin: 1
                }}
            />
        </Fragment>
    );
};
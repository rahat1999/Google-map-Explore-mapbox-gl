import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
mapboxgl.accessToken = 'pk.eyJ1IjoicmFoYXQtdmFpIiwiYSI6ImNrdjBodXpyMzdtYnEydW84anN1eTNwb2YifQ.LBEptf3z3HbL1dyEGaW29g';

const MapDirection = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.415482, 23.707310],
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])
    return (
        <div>
            <div id="map"></div>

        </div>
    );
};

export default MapDirection;
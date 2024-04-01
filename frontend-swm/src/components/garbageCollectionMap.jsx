import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const GarbageCollectionMap = ({activeLocation}) => {
    console.log('2here', activeLocation)
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) {
            const map = L.map('map').setView([18.5204, 73.8567], 12);
            const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

            const startLocation = L.latLng(18.5204, 73.8567);

            const locations = [
                L.latLng(18.5204, 73.8567), // Pune center
                L.latLng(18.5548, 73.8021), // Hinjawadi
                L.latLng(18.4635, 73.8677), // Katraj
                L.latLng(18.5322, 73.8478), // Magarpatta
                L.latLng(18.4962, 73.9419), // Kothrud
                L.latLng(18.5394, 73.8391), // Shivajinagar
                L.latLng(18.5196, 73.8553), // Swargate
                L.latLng(18.5203, 73.8566), // FC Road
                L.latLng(18.5203, 73.9167), // Hadapsar
                L.latLng(18.5165, 73.6567)  // Deccan
            ];

            // const activeLocation = [1, 1, 0, 1, 1, 1, 1, 1, 0, 1];

            const reorderedLocations = reorderLocationsUsingDijkstra(startLocation, locations, activeLocation);

            L.marker(startLocation).addTo(map);

            reorderedLocations.forEach(function (location, index) {
                if (activeLocation[index] === 1) {
                    var marker = L.marker(location).addTo(map);
                    marker.bindTooltip((index + 1).toString(), { className: 'sequence-marker', permanent: true }).openTooltip();
                }
            });

            const waypoints = [startLocation].concat(reorderedLocations.filter((location, index) => activeLocation[index] === 1));

            L.Routing.control({
                waypoints: waypoints,
                routeWhileDragging: true
            }).addTo(map);

            mapRef.current = map;
        }
    }, []);

    function reorderLocationsUsingDijkstra(startLocation, locations, activeLocation) {
        const activeLocations = locations.filter((location, index) => activeLocation[index] === 1);
        activeLocations.sort(function (a, b) {
            const distanceA = startLocation.distanceTo(a);
            const distanceB = startLocation.distanceTo(b);
            return distanceA - distanceB;
        });
        return activeLocations;
    }

    return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
};

export default GarbageCollectionMap;
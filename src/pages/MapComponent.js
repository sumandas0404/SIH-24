import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

function MapComponent({ source, destination }) {
  useEffect(() => {
    if (source && destination) {
      const map = L.map('map').setView([source.lat, source.lon], 6);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(source.lat, source.lon),
          L.latLng(destination.lat, destination.lon)
        ],
        createMarker: () => null,
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: '#ff0000', opacity: 0.8, weight: 5 }],
        },
      }).addTo(map);

      return () => {
        // Clean up the map and routing control
        map.removeControl(routingControl);
        map.off();
        map.remove();
      };
    }
  }, [source, destination]);

  return (
    <div id="map" style={{ height: '500px', width: '100%' }}></div>
  );
}

export default MapComponent;

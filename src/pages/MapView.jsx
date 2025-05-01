import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";

// Mock reports data (replace with your backend data later)
const reports = [
  {
    id: 1,
    title: "Streetlight Issue",
    description: "Streetlight not working in the area.",
    location: { lat: 27.7108, lng: 85.3148 },
    status: "Under Review",
    category: "Electricity",
  },
  {
    id: 2,
    title: "Road Damage",
    description: "There is a large pothole in the road.",
    location: { lat: 27.711, lng: 85.315 },
    status: "Resolved",
    category: "Infrastructure",
  },
];

function MapView() {
  const [map, setMap] = useState(null);

  const center = [27.7108, 85.3148]; // Default center (Kathmandu, Nepal)
  const zoomLevel = 13; // Initial zoom level

  useEffect(() => {
    if (map) {
      map.setView(center, zoomLevel); // Adjust map view
    }
  }, [map]);

  // Custom Icon for Markers
  const customIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <MapContainer
        center={center}
        zoom={zoomLevel}
        style={{ width: "100%", height: "100%" }}
        whenCreated={setMap}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Add Marker Clusters */}
        <MarkerClusterGroup>
          {reports.map((report) => (
            <Marker
              key={report.id}
              position={[report.location.lat, report.location.lng]}
              icon={customIcon}
            >
              <Popup>
                <h3>{report.title}</h3>
                <p>{report.description}</p>
                <p>Status: {report.status}</p>
                <p>Category: {report.category}</p>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default MapView;

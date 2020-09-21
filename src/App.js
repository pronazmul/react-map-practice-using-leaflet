import React, {useState } from 'react';
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import './App.css'
import "leaflet/dist/leaflet.css"

function App() {


  const [mapCenter, setMapCenter] = useState({ lat:21.45388, lng:91.96765});
  const [mapZoom, setMapZoom] = useState(10);



  return (
<div className="map">
          <h1 style={{textAlign:'center'}}>React Map Using Leaf let</h1>
            <LeafletMap center={mapCenter} zoom={mapZoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </LeafletMap>
        </div>
  );
}

export default App;

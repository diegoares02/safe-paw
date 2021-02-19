import { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

class MapSafePaw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            draggable: true,
            dimensions: [1024, 2048],
            markerData: [{ latitude: 51.505, longitude: -0.09, message: "First" },
            { latitude: 51.505, longitude: -0.08, message: "Second" },
            { latitude: 51.503, longitude: -0.08, message: "Third" }, { latitude: 51.525, longitude: -0.08, message: "Fourth" }],
        };
    }
    render() {
        return (
            <MapContainer center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false} >
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {this.state.markerData.map(marker => (
                    <Marker position={[marker.latitude, marker.longitude]} >
                        <Popup >
                            {marker.message}
                        </Popup>
                    </Marker >
                ))}
            </MapContainer>
        );
    }
}
export default MapSafePaw;
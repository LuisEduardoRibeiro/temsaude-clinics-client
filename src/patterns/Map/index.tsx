import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import L, { LatLngExpression } from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as MapMarkerActions from '../../store/mapmarker/actions'
import { MapMarker } from '../../store/mapmarker/types';
import { MapMarkerApplicationState } from '../../store';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapStateProps {
    mapmarker?: MapMarker[]
}


const Map: React.FC<MapStateProps> = (props) => {

    let center: LatLngExpression = [-23.5693952, -46.6261297];


    const renderMarkers = (mapmarker: MapMarker[] = []) => {
        if (mapmarker) {
            return mapmarker.map((v, i) => {
                return (
                    <Marker key={`marker-${i}`} position={v.position}>
                        <Popup>
                            <span>{v.popText}</span>
                        </Popup>
                    </Marker>
                )
            })
        }

        return <></>
    }

    return (
        <MapContainer
            center={center}
            zoom={13}
            zoomControl={false}
            style={{ height: '100vh', width: '100wh' }}
        >

            <ZoomControl position='bottomright' />

            <TileLayer
                url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=OvG1azZ4Ww590VccCuLg"
                attribution={`<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`}
            />

            {renderMarkers(props.mapmarker)}

        </MapContainer>
    )
}


const mapStateToProps = (state: MapMarkerApplicationState) => ({
    mapmarker: state.mapmarker.data
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MapMarkerActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Map)
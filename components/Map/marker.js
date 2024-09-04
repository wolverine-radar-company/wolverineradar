import React, { useState, useRef, useMemo, useCallback } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const center = {
    lat: 42.3314,
    lng: -83.0458,
  }
  
export default function DraggableMarker() {
const [draggable, setDraggable] = useState(false)
const [position, setPosition] = useState(center)
const markerRef = useRef(null)
const eventHandlers = useMemo(
    () => ({
    dragend() {
        const marker = markerRef.current
        if (marker != null) {
        setPosition(marker.getLatLng())
        }
    },
    }),
    [],
)
const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
}, [])

return (
    <Marker
        icon={new Icon({iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png', iconSize: [25, 41], iconAnchor: [12, 41]})}
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        
        >
            
        <Popup minWidth={90} >
            <span onClick={toggleDraggable}>
            {draggable
                ? 'Marker is draggable'
                : 'Click here to make marker draggable'}
            </span>
        </Popup>

    </Marker>
)
}

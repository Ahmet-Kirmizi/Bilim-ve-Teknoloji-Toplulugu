import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <div style={{ height: '40vh', width: '40%' }} className="p-3">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={35.2502969}
                    lng={33.0200841}
                    text="Bilim ve Teknoloji Topluluğu"
                />
            </GoogleMapReact>
        </div>
    );
}
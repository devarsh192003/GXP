// import React, { useEffect, useState, useRef } from "react";
// import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

// const Map = withScriptjs(withGoogleMap((props) => {
//   const [selectedMarker, setSelectedMarker] = useState(null);
//   const infoWindowRef = useRef(null);

//   useEffect(() => {
//     const map = new window.google.maps.Map(document.getElementById("map"), {
//       zoom: 15,
//       center: { lat: 22.41421557872951, lng: 73.30347595320116 },
//     });

//     const marker = new window.google.maps.Marker({
//       position: {lat: 22.41421557872951, lng: 73.30347595320116 },
//       map: map,
//     });

//     marker.addListener("click", () => {
//       setSelectedMarker(marker);
//       if (!infoWindowRef.current) {
//         infoWindowRef.current = new window.google.maps.InfoWindow({
//           content: "<p>Your selected location</p>"
//         });
//       }
//       infoWindowRef.current.open(map, marker);
//     });
//   }, []);

//   return (
//     <GoogleMap
//       defaultZoom={15}
//       defaultCenter={{ lat: 22.41421557872951, lng: 73.30347595320116 }}
//     >
//       <Marker
//         position={{ lat: 22.41421557872951, lng: 73.30347595320116 }}
//         onClick={() => {
//           setSelectedMarker(useEffect().marker);
//         }}
//       />
//       {selectedMarker ? (
//         <InfoWindow
//           position={{ lat: selectedMarker.position.lat(), lng: selectedMarker.position.lng() }}
//           onCloseClick={() => {
//             setSelectedMarker(null);
//           }}
//         >
//           <div>
//             <h4>Your selected location</h4>
//             <p>Get directions: <a href="https://maps.google.com?saddr=Current+Location&daddr=22.41421557872951,73.30347595320116" target="_blank">Google Maps</a></p>
//           </div>
//         </InfoWindow>
//       ) : null}
//     </GoogleMap>
//   );
// }));

// function Page() {
//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <div style={{ width: "100%", height: "400px" }} id="map">
//         <Map
//           googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCLlatSecu1bsrnk4XW8rYIpD5shqL30Y0"
//           loadingElement={<div style={{ height: `100%` }} />}
//           containerElement={<div style={{ height: `400px` }} />}
//           mapElement={<div style={{ height: `100%` }} />}
// />
// </div>
// </div>
// );
// }

// export default Map;
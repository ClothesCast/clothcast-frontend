import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useUserLocation from "../../hooks/useUserLocation";
import { APIProvider } from "@vis.gl/react-google-maps";
import styled from "styled-components";

const MapPage: React.FC = () => {
  const location = useLocation();
  //const navigate = useNavigate();
  const surveyData = location.state || { style: null, owned_clothes: {} };

  //const [clickedLocation, setClickedLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [requestData, setRequestData] = useState(surveyData);
  const { currentLocation, getCurrentLocation } = useUserLocation();
  const mapRef = useRef<HTMLDivElement>(null);

  let map: google.maps.Map;
  async function initMap(): Promise<void> {

    if (currentLocation) {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    map = new Map(document.getElementById("map") as HTMLElement, {
      center: {lat: currentLocation.latitude, lng: currentLocation.longitude},
      zoom: 8,
    });
    }
  }


// 사용자 현재 위치 불러오기
  useEffect(() => {
    getCurrentLocation();
}, []);

// currentLocation 갱신 뒤 지도 설정
useEffect(() => {
  if (currentLocation){
    console.log(currentLocation);
    initMap()
  }
}, [currentLocation]);


  return (
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <MapContainer id="map" ref={mapRef}>
        </MapContainer>
      </APIProvider>
  );
};

export default MapPage;

const MapContainer = styled.div`
  width : 100%;
  height : calc(100vh - 40px);

`;
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useUserLocation from "../../hooks/useUserLocation";
import { APIProvider } from "@vis.gl/react-google-maps";

declare global {
    interface Window {
      google: any;
      initMap: () => void;
    }
  }

  /*
  const loadMapScript = () => {
    return new Promise<void>((resolve) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = () => {
        resolve();
      };
    });
  };
  */



const MapPage: React.FC = () => {
  const location = useLocation();
  //const navigate = useNavigate();
  const surveyData = location.state || { style: null, owned_clothes: {} };

  //const [clickedLocation, setClickedLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [requestData, setRequestData] = useState(surveyData);
  const { currentLocation, getCurrentLocation } = useUserLocation<any>();
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    getCurrentLocation();
    //loadMap();

  }, []);

  /*
  const loadMap = async () => {
    await loadMapScript();
  };
  

  window.initMap = () => {
    // 지도 부르기
    if (mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: currentLocation,
        zoom: 14,
      });
      /** 
      const marker = new window.google.maps.Marker({
        position: {
          lat: lat || 37.5,
          lng: lng || 126.97,
        },
        map,
      });
      */
  

  /** 
  const handleSubmit = () => {
    console.log("Final Data to Send:", {...requestData, location : currentLocation});
    // 이후 백엔드 API로 전송하는 로직 추가 가능
  };
  */
  


  return (
    <div>
      <h1>지도 페이지</h1>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>

      </APIProvider>
      <div
      className="map"
      style={{ width: "500px", height: "500px" }}
      ref={mapRef}
    ></div>
    </div>
  );
};

export default MapPage;


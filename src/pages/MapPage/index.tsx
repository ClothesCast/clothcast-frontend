import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useUserLocation from "../../hooks/useUserLocation";
import { APIProvider } from "@vis.gl/react-google-maps";
import styled from "styled-components";

const MapPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const surveyData = location.state || { style: null, owned_clothes: {} };
  //const [requestData, setRequestData] = useState(surveyData);
  const { currentLocation, getCurrentLocation } = useUserLocation();

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);

  // 지도 초기화 함수
  async function initMap(): Promise<void> {
    if (!currentLocation || !mapContainerRef.current || mapRef.current) return;

    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    const mapInstance = new Map(mapContainerRef.current, {
      center: { lat: currentLocation.latitude, lng: currentLocation.longitude },
      zoom: 8,
      mapId: "DEMO_MAP_ID",
    });

    const markerInstance = new AdvancedMarkerElement({
      map: mapInstance,
      title: "현재 위치",
      position: { lat: currentLocation.latitude, lng: currentLocation.longitude },
    });

    mapRef.current = mapInstance;
    markerRef.current = markerInstance;

    // 지도 클릭 이벤트 추가: 클릭한 곳으로 마커 이동
    mapInstance.addListener("click", (event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
        const newLocation = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        };

        // 마커 위치 업데이트
        if (markerRef.current) {
          markerRef.current.position = newLocation;
        }

        console.log("클릭한 위치:", newLocation);
      }
    });
  }

  // 사용자 현재 위치 불러오기
  useEffect(() => {
    getCurrentLocation();
  }, []);

  // `currentLocation` 변경 후 지도 초기화
  useEffect(() => {
    if (currentLocation) {
      console.log("사용자 현재 위치:", currentLocation);
      initMap();
    }
  }, [currentLocation]);


  const submitHandler = () => {
    navigate('/loading',{state: {...surveyData,location: {latitude: markerRef.current?.position?.lat, longtitude: markerRef.current?.position?.lng} }});
  }

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <MapContainer ref={mapContainerRef}/>
        <ButtonContainer>
          {currentLocation && <SelectButton onClick={submitHandler}>선택완료</SelectButton>}
        </ButtonContainer>
    </APIProvider>
  );
};

export default MapPage;

const MapContainer = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  position: absolute;
  z-index: 100;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;  /* 화면 아래쪽 여백 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000; /* 지도보다 위로 */
`;

const SelectButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #357ac9;
  }
`;

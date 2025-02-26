import { useState } from 'react';

interface Location {
    latitude: number,
    longitude: number
}

/** 사용자의 현재 위치를 가져옵니다  */
const useUserLocation = () => {
    const [currentLocation, setCurrentLocation] = useState<null | Location>(null);
  
    const getCurrentLocation = () => {

        // 위치 서비스 제공 x => 서울시청역으로 위치 설정
        if (!navigator.geolocation) {
            setCurrentLocation({latitude: 37.5665, longitude: 126.9780});
            return;
        };

        // 현재 위치를 가져옵니다
         navigator.geolocation.getCurrentPosition(
            // 성공 시 사용자 위치로 설정
            (position) => {
            setCurrentLocation({ longitude: position.coords.longitude, latitude: position.coords.latitude });
            }, 
            () => setCurrentLocation({latitude: 37.5665, longitude: 126.9780}) // error handling: 서울시청역으로 위치 설정
        );
        console.log(currentLocation)
    }


    return {currentLocation, getCurrentLocation }
}

export default useUserLocation;
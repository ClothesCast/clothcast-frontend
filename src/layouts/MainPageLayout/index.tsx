import { useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from '../../assets/logo.png';
import { Sky, Cloud, Clouds, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from "@react-three/fiber";
import { Group } from "three";

const WeatherScene = () => {
    const ref = useRef<Group>(null!);

    // ✅ 구름 설정
    const [cloudConfig] = useState({
        segments: 20,
        volume: 6,
        opacity: 0.8,
        fade: 10,
        growth: 4,
        speed: 0.1,
        x: 6,
        y: 1,
        z: 1,
        color: "white",
    });

    useFrame((state) => {
        if (!ref.current) return;
        ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 5) / 4;
        ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 5) / 4;
    });

    return (
        <>
            <Sky sunPosition={[100, 40, 100]} />
            <ambientLight intensity={4.0} />
            <group ref={ref}>
                <Clouds limit={400}>
                    <Cloud {...cloudConfig} bounds={[cloudConfig.x, cloudConfig.y, cloudConfig.z]} />
                    <Cloud {...cloudConfig} bounds={[cloudConfig.x, cloudConfig.y, cloudConfig.z]} seed={2} position={[15, 0, 0]} />
                    <Cloud {...cloudConfig} bounds={[cloudConfig.x, cloudConfig.y, cloudConfig.z]} seed={3} position={[-15, 0, 0]} />
                    <Cloud {...cloudConfig} bounds={[cloudConfig.x, cloudConfig.y, cloudConfig.z]} seed={4} position={[0, 0, -12]} />
                    <Cloud {...cloudConfig} bounds={[cloudConfig.x, cloudConfig.y, cloudConfig.z]} seed={5} position={[0, 0, 12]} />
                    <Cloud growth={100} opacity={1.25} seed={0.3} bounds={[200, 200, 200]} volume={200} />
                </Clouds>
            </group>
        </>
    );
};

const MainPageLayout = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* 배경용 Canvas */}
            <BackgroundCanvas>
                <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                    <WeatherScene />
                    <OrbitControls enableZoom={true} />
                </Canvas>
            </BackgroundCanvas>

            {/* 메인 컨테이너 */}
            <Container>
                <Header>
                    <img src={Logo} width={30} height={24} onClick={() => navigate('/')} />
                    <label>ClothCast</label>
                </Header>
                <Outlet />
            </Container>
        </>
    );
};

export default MainPageLayout;

// Canvas를 배경으로 설정하는 스타일
const BackgroundCanvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
    display: flex;
    padding: 12px 70px;
    background-color: #E7EDFC;
    height: 40px;
    font-weight: 700;
    align-items: center;
    position: relative;
`;

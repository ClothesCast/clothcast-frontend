import { useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from '../../assets/logo.png';
import { Sky, Cloud, Clouds, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from "@react-three/fiber";
import { Group } from "three";
import { useControls } from "leva"; 

const WeatherScene = () => {
    const ref = useRef<Group>(null!);

    const { color, x, y, z, ...config } = useControls("Cloud Settings", {
        seed: { value: 1, min: 1, max: 100, step: 1 },
        segments: { value: 20, min: 1, max: 80, step: 1 },
        volume: { value: 6, min: 0, max: 100, step: 0.1 },
        opacity: { value: 0.8, min: 0, max: 1, step: 0.01 },
        fade: { value: 10, min: 0, max: 400, step: 1 },
        growth: { value: 4, min: 0, max: 20, step: 1 },
        speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
        x: { value: 6, min: 0, max: 100, step: 1 },
        y: { value: 1, min: 0, max: 100, step: 1 },
        z: { value: 1, min: 0, max: 100, step: 1 },
        color: { value: "white" }, // ✅ 컬러 값을 명확히 지정
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
          <Clouds limit={400} >
            <Cloud {...config} 
              bounds={[x as number, y as number, z as number]} 
              color={color as string} />
            <Cloud {...config} bounds={[x as number, y as number, z as number]} color="white" seed={2} position={[15, 0, 0]} />
            <Cloud {...config} bounds={[x as number, y as number, z as number]} color="white" seed={3} position={[-15, 0, 0]} />
            <Cloud {...config} bounds={[x as number, y as number, z as number]} color="white" seed={4} position={[0, 0, -12]} />
            <Cloud {...config} bounds={[x as number, y as number, z as number]} color="white" seed={5} position={[0, 0, 12]} />
            <Cloud growth={100} color="white" opacity={1.25} seed={0.3} bounds={[200, 200, 200]} volume={200} />
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

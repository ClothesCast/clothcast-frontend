import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ClothCastLogo from '../../assets/logo.png';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Logo src={ClothCastLogo} alt="ClothCast Logo" />
        <Title>ClothCast</Title>
        <Subtitle>날씨에 맞는 옷차림을 추천해드릴게요!</Subtitle>
        <StartButton onClick={() => navigate("/survey")}>시작하기</StartButton>
      </Content>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 40px);
  max-width: 600px;
  margin: 0 auto;
  padding: 0.2rem;
`;

const Content = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  width: 120px;
  height: 100px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #2c69ff;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 24px;
`;

const StartButton = styled.button`
  background-color: #4a90e2;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ac9;
  }
`;
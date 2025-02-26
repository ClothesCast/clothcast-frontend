import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ClothCastLogo from '../../assets/logo.png';
import PageContainer from "../../components/common/PageContainer";
import Button from "../../components/common/Button";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Content>
        <Logo src={ClothCastLogo} alt="ClothCast Logo" />
        <Title>ClothCast</Title>
        <Subtitle>날씨에 맞는 옷차림을 추천해드릴게요!</Subtitle>
        <Button onClick={() => navigate("/survey")}>시작하기</Button>
      </Content>
    </PageContainer>
  );
};

export default HomePage;



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

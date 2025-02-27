import React from "react";
import styled from "styled-components";
import PageContainer from "../../components/common/PageContainer";
import resultData from '../../temp/responseData.json';
import Button from "../../components/common/Button";

const ResultPage: React.FC = () => {
  //const [resultData, setResultData] = useState(MockResultData)

  return (
    <PageContainer>
      <Container>
      <Card>
        {resultData &&
        <>
          <WeatherImage src="/images/weather-sunny.jpg" alt="Weather" />
          <WeatherInfo>
            <span>선택한 지역 {resultData.weather?.city.name}의 날씨 :  {resultData.weather?.condition}</span>
          </WeatherInfo>
          <Recommendation>
            <Highlight>ClothCast</Highlight>가 분석한 추천 옷차림은요!
          </Recommendation>
          <RecommendationBox>
            {resultData.recommendation}
          </RecommendationBox>
          <Actions>
            <Icon>👍</Icon>
            <Icon>👎</Icon>
          </Actions>
          </>
        }
          <Button onClick={() => window.location.href = '/'}>돌아가기</Button>
      </Card>
    </Container>
    </PageContainer>
  );
};

export default ResultPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 600px;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  text-align: center;
`;

const WeatherImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const WeatherInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  font-size: 16px;
`;

const Recommendation = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const Highlight = styled.span`
  color: #2c69ff;
  font-weight: bold;
`;

const RecommendationBox = styled.div`
  background: #e0e7ff;
  padding: 16px;
  border-radius: 8px;
  min-height: 300px;
  margin: 10px 0;
  font-size: 1rem;
  color: black;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
`;

const Icon = styled.span`
  font-size: 20px;
  cursor: pointer;
`;

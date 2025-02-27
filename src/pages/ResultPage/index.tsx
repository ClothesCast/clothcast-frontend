import React from "react";
import styled from "styled-components";
import PageContainer from "../../components/common/PageContainer";
import resultData from '../../temp/responseData.json';
import Button from "../../components/common/Button";
import SkyWeather from "../../assets/sky_weather.png";

const ResultPage: React.FC = () => {
  //const [resultData, setResultData] = useState(MockResultData)

  return (
    <PageContainer>
      <Container>
      <Card>
        {resultData &&
        <>
          <WeatherImage src={SkyWeather} alt="Weather" height={180} />
          <Recommendation>
            <Highlight>ClothCast</Highlight>가 분석한 추천 옷차림은요!
          </Recommendation>
          <RecommendationBox>
          대한민국 서울특별시는 20도, 날씨는 맑음입니다 ☀️ 캐주얼 스타일링으로는 카디건, 셔츠, 청바지, 스니커즈를 매치하면 좋을 것 같아요!
            {resultData.recommendation}
          </RecommendationBox>
          {/* <Actions>
            <Icon>👍</Icon>
            <Icon>👎</Icon>
          </Actions> */}
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

// const Actions = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 10px;
//   margin: 10px 0;
// `;

// const Icon = styled.span`
//   font-size: 20px;
//   cursor: pointer;
// `;

import React from "react";
import styled from "styled-components";
import PageContainer from "../../components/common/PageContainer";
//import resultData from '../../temp/responseData.json';
import Button from "../../components/common/Button";
import { useLocation } from "react-router-dom";


interface ResultData {
  recommendation: string;
}

const ResultPage: React.FC = () => {
  const location = useLocation(); 
  const resultData = location.state as ResultData | null;

  let formattedRecommendation = resultData?.recommendation.replace(/([.!?])\s(?!☁️)/g, "$1\n");

  // 앞뒤 큰따옴표 제거
  if (formattedRecommendation) {
    formattedRecommendation = formattedRecommendation.replace(/^"|"$/g, "");
  }

  // 개행 문자를 <br /> 태그로 변환하여 React에서 정상적으로 렌더링 가능하게 처리
  const formattedRecommendationWithBreaks = formattedRecommendation
    ? formattedRecommendation.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))
    : null;

  return (
    <PageContainer>
      <Container>
        <Card>
          {resultData && (
            <>
              <Recommendation>
                <Highlight>ClothCast</Highlight>가 분석한 추천 옷차림은요!
              </Recommendation>
              <RecommendationBox>{formattedRecommendationWithBreaks}</RecommendationBox>
            </>
          )}
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

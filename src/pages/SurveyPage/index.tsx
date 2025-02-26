import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo.png";

const SurveyPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>("상의");
  const [selectedClothes, setSelectedClothes] = useState<string[]>([]);

  const styles = ["스트릿", "캐주얼", "댄디", "페미닌"];
  const categories = ["아우터", "상의", "하의", "신발"];
  const clothes = {
    상의: ["셔츠", "니트", "맨투맨", "후드티"],
    아우터: ["자켓", "코트", "패딩"],
    하의: ["청바지", "슬랙스", "반바지"],
    신발: ["운동화", "로퍼", "부츠"]
  };

  const toggleClothesSelection = (item: string) => {
    setSelectedClothes((prev) =>
      prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
    );
  };

  return (
    <Container>
      <Content>
        <img src={Logo} width={80} height={60} />
        <Title>WearCast</Title>
        <Question>어떤 <strong>스타일</strong>을 원하시나요?</Question>
        <ButtonGroup>
          {styles.map((style) => (
            <Button
              key={style}
              onClick={() => setSelectedStyle(style)}
              selected={selectedStyle === style}
            >
              {style}
            </Button>
          ))}
        </ButtonGroup>

        <Question>당신의 <strong>옷장</strong>에는 어떤 옷이 있나요?</Question>
        <TabContainer>
          {categories.map((category) => (
            <TabButton
              key={category}
              onClick={() => setSelectedCategory(category)}
              selected={selectedCategory === category}
            >
              {category}
            </TabButton>
          ))}
        </TabContainer>

        <ButtonGroup>
          {clothes[selectedCategory as keyof typeof clothes].map((item) => (
            <Button
              key={item}
              onClick={() => toggleClothesSelection(item)}
              selected={selectedClothes.includes(item)}
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
        <SubmitButton onClick={() => navigate("/map")}>완료</SubmitButton>
      </Content>
    </Container>
  );
};

export default SurveyPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
`;

const Content = styled.div`
  text-align: center;
  max-width: 500px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #2c69ff;
  margin-bottom: 16px;
`;

const Question = styled.p`
  font-size: 18px;
  margin: 16px 0;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? "#4a90e2" : "#e0e7ff")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #357ac9;
    transform: scale(1.05);
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
`;

const TabButton = styled.button<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? "#4a90e2" : "transparent")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  transition: background-color 0.3s;
  border-bottom: ${({ selected }) => (selected ? "2px solid #4a90e2" : "none")};

  &:hover {
    background-color: #357ac9;
    color: white;
  }
`;

const SubmitButton = styled.button`
  background-color: #4a90e2;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #357ac9;
    transform: scale(1.05);
  }
`;
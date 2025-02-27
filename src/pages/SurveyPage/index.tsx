import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from '../../assets/logo.png';

const SurveyPage: React.FC = () => {
    const navigate = useNavigate();
    const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("상의");
  
    const styles = [
      { label: "스트릿", value: "street" },
      { label: "캐주얼", value: "casual" },
      { label: "댄디", value: "dandy" },
      { label: "페미닌", value: "feminine" },
    ];
  
    const categories = [
      { label: "아우터", value: "outerwear" },
      { label: "상의", value: "topwear" },
      { label: "하의", value: "bottomwear" },
      { label: "신발", value: "shoes" },
    ];
  
    const clothes = {
      상의: ["셔츠", "니트", "맨투맨", "후드티","반팔티","나시"],
      아우터: ["가죽자켓", "코트", "숏패딩","롱패딩", "가디건", "후드집업"],
      하의: ["청바지", "슬랙스", "반바지", "코튼바지","숏치마","롱치마"],
      신발: ["스니커즈","운동화", "샌달", "로퍼", "부츠"]
    };
  
    const clothesMapping: Record<string,string> = {
      셔츠: "shirt",
      니트: "knit",
      맨투맨: "mantoman",
      후드티: "hoodt",
      가죽자켓: "leatherJacket",
      코트: "coat",
      숏패딩: "shortPadding",
      나시: "sleevelessT",
      반팔티: "shortSleeveT",
      롱패딩: "longPadding",
      가디건: "cardigan",
      후드집업: "hoodZipUp",
      청바지: "denimPants",
      슬랙스: "slacks",
      코튼바지:"cottonPants",
      반바지: "shortPants",
      숏치마: "miniSkirt",
      롱치마: "longSkirt",
      스니커즈: "sneakers",
      운동화: "sportsShoes",
      샌달: "sandals",
      로퍼: "loafers",
      부츠: "boots",
    };

    const initialOwnedClothes = Object.fromEntries(
      categories.map(({ label, value }) => [
        value,
        Object.fromEntries(clothes[label as keyof typeof clothes].map((item) => [clothesMapping[item], false]))
      ])
    );
  
    const [ownedClothes, setOwnedClothes] = useState<{ [key: string]: { [key: string]: boolean } }>(
      initialOwnedClothes
    );
  
    const toggleClothesSelection = (category: string, item: string) => {
      setOwnedClothes((prev) => ({
        ...prev,
        [category]: {
          ...prev[category],
          [clothesMapping[item]]: !prev[category]?.[clothesMapping[item]],
        },
      }));
    };
  
    const handleSubmit = () => {
      const requestData = {
        style: selectedStyle ? styles.find((s) => s.label === selectedStyle)?.value : null,
        owned_clothes: ownedClothes,
      };
      console.log("Final Data to Send:", requestData);
      navigate("/map", { state: requestData });
    };
  
    return (
      <Container>
        <Content>
          <img src={Logo} width={80} height={60} />
          <Title>WearCast</Title>
          <Question>어떤 스타일을 원하시나요?</Question>
          <ButtonGroup>
            {styles.map(({ label }) => (
              <Button
                key={label}
                onClick={() => setSelectedStyle(label)}
                selected={selectedStyle === label}
              >
                {label}
              </Button>
            ))}
          </ButtonGroup>
  
          <Question>당신의 옷장에는 어떤 옷이 있나요?</Question>
          <TabContainer>
            {categories.map(({ label}) => (
              <TabButton
                key={label}
                onClick={() => setSelectedCategory(label)}
                selected={selectedCategory === label}
              >
                {label}
              </TabButton>
            ))}
          </TabContainer>
          <ButtonDiv>
            <ButtonGroup>
              {clothes[selectedCategory as keyof typeof clothes].map((item) => (
                <Button
                  key={item}
                  onClick={() => toggleClothesSelection(categories.find((c) => c.label === selectedCategory)?.value || "", item)}
                  selected={ownedClothes[categories.find((c) => c.label === selectedCategory)?.value || ""]?.[clothesMapping[item]] || false}
                >
                  {item}
                </Button>
              ))}
            </ButtonGroup>
          </ButtonDiv>
         
          <SubmitButton onClick={handleSubmit}>완료</SubmitButton>
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
  margin-bottom: 40px;

`;

const ButtonDiv = styled.div`

  height: 100px;
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
  border-bottom: 1px solid #4a90e2;

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

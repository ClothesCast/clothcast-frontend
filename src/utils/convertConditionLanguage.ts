const convertConditionLanguage = (value: string): string => {
    const conditionMap: Record<string, string> = {
      Clear: "맑음",
      Clouds: "구름",
      Rain: "비",
    };
  
    return conditionMap[value] || "알 수 없음"; // 기본값 추가
  };
  
  export default convertConditionLanguage;
  
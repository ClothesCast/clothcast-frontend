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

export {styles, categories, clothes, clothesMapping}
import Lottie from "lottie-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import loadingAnimation from '../../assets/loading2.json'
import PageContainer from "../../components/common/PageContainer";
import axios from "axios";
import styled from "styled-components";

const LoadingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const requestData = location.state;

    useEffect(() => {
        // AI 요청 함수 실행
        const fetchData = async () => {
            try {
                // 결과 페이지로 이동 (AI 결과 함께 전달)
                console.log(requestData)
                await axios.post('http://15.164.56.42:8080/user/preferences/recommendation', requestData).then((res)=>
                navigate("/result", { state: res.data})
                )
                //setTimeout(()=> {navigate("/result", { state: requestData});},10000)
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, [navigate, requestData]);

    return (
        <PageContainer>
                <Lottie animationData={loadingAnimation}  style={{ width: 300, height: 300}}></Lottie>
                <LoadingText>당신의 기분 좋은 하루를 위해 열심히 달리고 있어요 🏃🏻</LoadingText>
        </PageContainer>
    )
}

export default LoadingPage

const LoadingText = styled.p`

font-size : 24px;
`;
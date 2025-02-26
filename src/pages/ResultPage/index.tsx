import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageContainer from "../../components/common/PageContainer";

const ResultPage = () => {
    const location = useLocation();
    const requestData = location.state;

    useEffect(() => {
      console.log(requestData)
    }, [requestData])
    
    return (
        <PageContainer> 결과페이지 </PageContainer>
    )
}

export default ResultPage
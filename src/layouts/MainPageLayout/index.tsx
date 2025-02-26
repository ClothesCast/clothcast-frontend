import { Outlet } from "react-router-dom";
import styled from "styled-components"
import Logo from '../../assets/logo.png';

const MainPageLayout = () => {
    return (
        <Container>
            <Header>
                <img src={Logo} width={30} height={24}/>
                ClothCast
            </Header>
            <Outlet />
        </Container>
    )
}

export default MainPageLayout;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
    display: flex;
    padding : 12px 70px;
    background-color : #E7EDFC;
    height: 40px;
    font-weight: 700;
    align-items: center;
`


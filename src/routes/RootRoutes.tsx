import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import MainPageLayout from "../layouts/MainPageLayout";
import SurveyPage from "../pages/SurveyPage";
import MapPage from "../pages/MapPage";
import LoadingPage from "../pages/LoadingPage";
import ResultPage from "../pages/ResultPage";

const RootRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPageLayout />}>
                    <Route path={"/survey"} element={<SurveyPage />} />
                    <Route path={"/loading"} element={<LoadingPage />} />
                    <Route path={"/map"} element={<MapPage />} />
                    <Route path={"/result"} element={<ResultPage />} />
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RootRoutes;
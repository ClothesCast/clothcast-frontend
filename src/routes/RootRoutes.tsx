import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import MainPageLayout from "../layouts/MainPageLayout";
import SurveyPage from "../pages/SurveyPage";
import MapPage from "../pages/MapPage";

const RootRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPageLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path={"/survey"} element={<SurveyPage />} />
                    <Route path={"/map"} element={<MapPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RootRoutes;
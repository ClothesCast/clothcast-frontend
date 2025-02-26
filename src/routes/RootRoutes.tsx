import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import MainPageLayout from "../layouts/MainPageLayout";

const RootRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPageLayout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RootRoutes;
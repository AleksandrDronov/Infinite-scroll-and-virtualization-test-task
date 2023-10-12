import { Route, Routes } from "react-router-dom";
import MainPage from "./main";
import PostPage from "./post";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<PostPage />} />
    </Routes>
  );
}

export default AppRoutes;

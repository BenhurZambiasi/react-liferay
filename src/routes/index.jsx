import { HashRouter, Routes, Route } from "react-router-dom";
import { App } from "../pages/app";
import { Page2 } from "../pages/page2";
import { Page3 } from "../pages/Page3";

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Page2 />} />
        <Route path="/fetch" element={<Page3 />} />
      </Routes>
    </HashRouter>
  );
};

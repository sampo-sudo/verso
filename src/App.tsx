import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MapView from "./pages/MapView/MapView";
import ListView from "./pages/ListView/ListView";
import FilterPanel from "./pages/FilterPanel/FilterPanel";
import ShopDetail from "./pages/ShopDetail/ShopDetail";
import BrandList from "./pages/BrandList/BrandList";
import InfoPage from "./pages/InfoPage/InfoPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/list" element={<ListView />} />
        <Route path="/filter" element={<FilterPanel />} />
        <Route path="/shop/:id" element={<ShopDetail />} />
        <Route path="/shop/:id/brands" element={<BrandList />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;

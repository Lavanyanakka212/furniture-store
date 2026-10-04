import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddFurniture from "../pages/AddFurniture";
import EditFurniture from "../pages/EditFurniture";

function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddFurniture />} />
      <Route path="/edit/:id" element={<EditFurniture />} />
    </Routes>
  )
}
export default AppRoutes;
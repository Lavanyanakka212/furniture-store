import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddFurniture from "./pages/AddFurniture";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import EditFurniture from "./pages/EditFurniture";

function App(){
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/add" element={
          <ProtectedRoute>
            <AddFurniture/>
          </ProtectedRoute>
        } />
        <Route path="/edit/:id" element={<ProtectedRoute><EditFurniture/></ProtectedRoute>} />
      </Routes>
    </>
  )
}
export default App;
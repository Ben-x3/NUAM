import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";  // tu componente Login
import Mantenedor from "./pages/Mantenedor";  // componente del mantenedor de calificaciones tributarias

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/mantenedor" element={<Mantenedor />} />
        <Route path="*" element={<Navigate to="/login" replace />} />  {/* Redirige a login si no encuentra la ruta */}
      </Routes>
    </BrowserRouter>
  );
}

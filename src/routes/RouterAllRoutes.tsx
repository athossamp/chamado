import { useContext } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Monitoramento from "../pages/Monitoramento";
import Login from "../pages/Login";

import { AuthContext, AuthProvider } from "../context/AuthContext";
import { Chamado } from "../pages/Chamado";
import { GetOcorrenciaByOcocodigo } from "../pages/UpdateOcorrencia";
import { GetChamadoByChacodigo } from "../pages/UpdateChamado";
const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext);
  if (!authenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
};

function RouterAllRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/monitoramento" element={<Monitoramento />} />
        <Route path="/chamado" element={<Chamado />} />
        <Route
          path="/updateOcorrencia/:ococodigo"
          element={<GetOcorrenciaByOcocodigo />}
        />
        <Route
          path="/updateChamado/:chacodigo"
          element={<GetChamadoByChacodigo />}
        />
      </Routes>
    </AuthProvider>
  );
}

export { RouterAllRoutes };

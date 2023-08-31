// ** Imports do React
import React from "react";

// ** Imports de pacotes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ** Imports de páginas
import Signin from "./pages/signin";
import Signup from "./pages/signup/Signup";

// ** Imports de rotas
import AuthRoutes from "./routes/AuthRoutes";

// ** Imports de contextos
import { AuthProvider } from "./contexts/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<AuthRoutes />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
};

export default App;

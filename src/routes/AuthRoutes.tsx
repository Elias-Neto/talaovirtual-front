// ** Imports do React
import React from "react";

// ** Imports de pacotes
import { Navigate, Route, Routes } from "react-router-dom";

// ** Imports de páginas
import Dashboard from "../pages/dashboard";
// import HandleUser from "../pages/users/HandleUser";
import HandleExample1 from "../pages/crud-example1/HandleExample1";
import HandleCustomers from "../pages/customers/HandleCustomers";
import HandleAddresses from "../pages/customers/HandleAddresses";
import HandleExample2 from "../pages/crud-example2/HandleExample2";
// import ListUsers from "../pages/users/ListUsers/ListUsers";
import ListExample1 from "../pages/crud-example1/ListExample1";
import ListExample2 from "../pages/crud-example2/ListExample2";
import ListAddresses from "../pages/customers/ListAddresses";
import ListCustomers from "../pages/customers/ListCustomers";

// ** Imports de componentes
import Layout from "../components/layout";

// ** Imports de contextos
import { useAuth } from "../contexts/AuthContext";

const AppRoutes: React.FC = () => {
    const { authenticated, isLoading } = useAuth();

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    if (!authenticated) {
        return <Navigate to="/signin" />;
    }

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/users/insert" element={<HandleUser />} /> */}
                {/* <Route path="/users/update" element={<HandleUser />} /> */}
                {/* <Route path="/users/list" element={<ListUsers />} /> */}
                <Route path="/clientes/adicionar" element={<HandleCustomers />} />
                <Route path="/clientes/listar" element={<ListCustomers />} />
                <Route path="/clientes/editar" element={<HandleCustomers />} />
                <Route path="/localidades/adicionar" element={<HandleAddresses />} />
                <Route path="/localidades/editar" element={<HandleAddresses />} />
                <Route path="/localidades/listar" element={<ListAddresses />} />
                <Route path="/crud-example1/update" element={<HandleExample1 />} />
                <Route path="/crud-example1/list" element={<ListExample1 />} />
                <Route path="/crud-example2/insert" element={<HandleExample2 />} />
                <Route path="/crud-example2/update" element={<HandleExample2 />} />
                <Route path="/crud-example2/list" element={<ListExample2 />} />
            </Routes>
        </Layout>
    );
};

export default AppRoutes;

// ** Imports do React
import React from "react";

// ** Imports de pacotes
import { NavLink } from "react-router-dom";

// ** Imports de estilos
import styles from "./Sidebar.module.css";

// ** Imports de contextos
import { useAuth } from "../../../contexts/AuthContext";

const Sidebar = () => {
    const { signout } = useAuth();

    return (
        <div className={styles.sidebar}>
            <nav className={styles.navigation}>

                <ul>
                    <li>
                        <NavLink to="/">
                            <h3>Visão Geral</h3>
                        </NavLink>
                    </li>
                </ul>

                {/* <h3>Users</h3>
                <ul>
                    <li>
                        <NavLink to="/users/insert">
                            Insert User
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users/list">
                            List Users
                        </NavLink>
                    </li>
                </ul> */}

                <h3>Clientes</h3>
                <ul>
                    <li>
                        <NavLink to="/clientes/adicionar">
                            Adicionar Cliente
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/clientes/listar">
                            Listar Clientes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/localidades/adicionar">
                            Adicionar Localidade
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/localidades/listar">
                            Listar Localidades
                        </NavLink>
                    </li>
                </ul>

                <h3>Crud Example 2</h3>
                <ul>
                    <li>
                        <NavLink to="/crud-example2/insert">
                            Insert Example 2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/crud-example2/list">
                            List Example 2
                        </NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink onClick={signout} to="/signin">
                            <h3>Signout</h3>
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default Sidebar;

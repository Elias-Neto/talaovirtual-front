// ** Imports do React
import React from "react";

// ** Imports de estilos
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Talão Virtual</h1>
      </div>
    </header>
  );
};

export default Header;

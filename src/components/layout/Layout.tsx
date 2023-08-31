// ** Imports do React
import React from "react";

// ** Imports de componentes
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

// ** Imports de estilos
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <Sidebar />
          <div className={styles.content}>
            {children}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;

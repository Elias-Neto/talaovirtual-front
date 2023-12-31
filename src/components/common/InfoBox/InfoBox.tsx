// ** Imports do React
import React from "react";

// ** Imports de estilos
import styles from "./InfoBox.module.css";

interface InfoBoxProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, value, icon }) => {
  return (
    <div className={styles.infoBox}>
      <h3>{title}</h3>
      <div className={styles.infoContainer}>
        {icon}
        <h1>{value}</h1>
      </div>
    </div>
  );
};

export default InfoBox;

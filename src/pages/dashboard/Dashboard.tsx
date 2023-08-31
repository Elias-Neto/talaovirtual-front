// ** Imports do React
import React, { useEffect, useState } from "react";

// ** Imports de estilos
import styles from "./Dashboard.module.css";

// ** Imports de ícones
import { FaFolder } from "react-icons/fa";

// ** Imports de componentes
import Title from "../../components/common/Title";
import InfoBox from "../../components/common/InfoBox";

// ** Imports de tipos e serviços
import { CrudExample1 } from "../../types/interfaces/CrudExample1";
import { CrudExample2 } from "../../types/interfaces/CrudExample2";
import { getItems as getItems1 } from "../../services/crudExample1Service";
import { getItems as getItems2 } from "../../services/crudExample2Service";

const Dashboard = () => {
  const [items1, setItems1] = useState<CrudExample1[]>([]);
  const [items2, setItems2] = useState<CrudExample2[]>([]);

  const fetchItems1 = async () => {
    try {
      const response = await getItems1();
      setItems1(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchItems2 = async () => {
    try {
      const response = await getItems2();
      setItems2(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems1();
    fetchItems2();
  }, []);

  return (
    <main className={styles.container}>
      <Title className={styles.title}>Welcome to Admin System Example!</Title>
      <p>This is the example Dashboard where you can find some registration statistics.</p>
      <div className={styles.infoBoxContainer}>
        <InfoBox
          title="CRUD 1 items"
          value={items1.length}
          icon={<FaFolder />}
        />
        <InfoBox
          title="CRUD 2 items"
          value={items2.length}
          icon={<FaFolder />}
        />
      </div>
    </main>
  );
};

export default Dashboard;

// ** Imports do React 
import React, { useEffect } from "react";

// ** Imports de pacotes
import { useNavigate } from "react-router-dom";

// ** Imports de componentes
import { Table, Column } from "../../../components/common/Table";

// ** Imports de tipos e serviços
import { Address } from "../../../types/interfaces/Customers";
import { deleteItem, getItems } from "../../../services/addressesService";

const ListAddresses: React.FC = () => {
  const navigate = useNavigate();
  const [items, setItems] = React.useState<Address[]>([]);

  const fetchItems = async () => {
    try {
      const items = await getItems();
      setItems(items);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleEdit = (item: Address) => {
    navigate("/localidades/editar", { state: item });
  };

  const handleDelete = async (item: Address) => {
    try {
      await deleteItem(item.id);
      fetchItems();
      alert("Item Deletado com Sucesso!");
    } catch (error) {
      console.log("Error deleting item", error);
      alert("Ocorreu um erro ao deletar o item");
    }
  };

  const columns: Column<Address>[] = [
    { header: "Cidade", accessor: "city" },
    { header: "Estado", accessor: "state" },
  ];

  return (
    <Table
      columns={columns}
      data={items}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ListAddresses;

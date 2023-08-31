// ** Imports do React 
import React, { useEffect } from "react";

// ** Imports de pacotes
import { useNavigate } from "react-router-dom";

// ** Imports de componentes
import { Table, Column } from "../../../components/common/Table";

// ** Imports de tipos e serviços
import { CrudExample2 } from "../../../types/interfaces/CrudExample2";
import { deleteItem, getItems } from "../../../services/crudExample2Service";

const ListExample2: React.FC = () => {
    const navigate = useNavigate();
    const [items, setItems] = React.useState<CrudExample2[]>([]);

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

    const handleEdit = (item: CrudExample2) => {
        navigate("/crud-example2/update", { state: item });
    };

    const handleDelete = async (item: CrudExample2) => {
        try {
            await deleteItem(item.id);
            fetchItems();
            alert("Item deleted successfully!");
        } catch (error) {
            console.log("Error deleting item", error);
            alert("An error occurred while deleting the item");
        }
    };

    const columns: Column<CrudExample2>[] = [
        { header: "Field 1", accessor: "field1" },
        { header: "Field 2", accessor: "field2" },
        { header: "Field 3", accessor: "field3" },
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

export default ListExample2;

// ** Imports do React 
import React, { useEffect } from "react";

// ** Imports de pacotes
import { useNavigate } from "react-router-dom";

// ** Imports de componentes
import { Table, Column } from "../../../components/common/Table";

// ** Imports de tipos e serviços
import { User } from "../../../types/interfaces/User";
import { deleteUser, getUsers } from "../../../services/userService";


const ListUsers: React.FC = () => {
    const navigate = useNavigate();
    const [users, setUsers] = React.useState<User[]>([]);

    const fetchUsers = async () => {
        try {
            const users = await getUsers();
            setUsers(users);
        } catch (error) {
            console.log("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleEdit = (user: User) => {
        navigate("/users/update", { state: user });
    };

    const handleDelete = async (user: User) => {
        try {
            await deleteUser(user.id);
            fetchUsers();
            alert("Item deleted successfully!");
        } catch (error) {
            console.log("Error deleting user", error);
            alert("An error occurred while deleting the user");
        }
    };

    const columns: Column<User>[] = [
        { header: "Id", accessor: "id" },
        { header: "E-mail", accessor: "email" },
    ];

    return (
        <Table
            columns={columns}
            data={users}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    );
};

export default ListUsers;

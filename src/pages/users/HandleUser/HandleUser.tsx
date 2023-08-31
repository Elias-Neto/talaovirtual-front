// ** Imports do React
import React from "react";

// ** Imports de pacotes
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

// ** Imports de componentes
import Form from "../../../components/forms/Form";
import Input from "../../../components/forms/Input";
import Button from "../../../components/common/Button";
import Title from "../../../components/common/Title";

// ** Imports de tipos e serviços
import { User } from "../../../types/interfaces/User";
import { createOrUpdateUser } from "../../../services/userService";


const HandleUser: React.FC = () => {
    const navigate = useNavigate();
    const user = useLocation().state as User;

    const initialValues: User = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Required field"),
        password: Yup.string().required("Required field"),
    });

    const onSubmit = async (values: User, { resetForm }: { resetForm: () => void }) => {
        try {
            await createOrUpdateUser(values);
            resetForm();
            navigate("/users/list");
            alert("Form sent successfully!");
        } catch (error) {
            console.log(error);
            alert("An error occured when submitting the form");
        }
    };

    return (
        <Form
            initialValues={user || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            {({ errors, touched }) => (

                <>
                    {
                        !user ?
                            <Title>Insert User</Title>
                            :
                            <Title>Update User</Title>
                    }

                    <Input
                        label="E-mail"
                        name="email"
                        errors={errors.email}
                        touched={touched.email}
                    />
                    {
                        !user ?
                        <Input
                            label="Password"
                            name="password"
                            errors={errors.password}
                            touched={touched.password}
                        />: null
                    }

                    <Button type="submit">Save</Button>

                </>
            )}
        </Form>
    );
}

export default HandleUser;

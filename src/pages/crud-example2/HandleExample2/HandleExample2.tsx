// ** Imports do React
import React from "react";

// ** Imports de pacotes
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

// ** Imports de componentes
import Form from "../../../components/forms/Form";
import Input from "../../../components/forms/Input";
import Select from "../../../components/forms/Select";
import Button from "../../../components/common/Button";
import Textarea from "../../../components/forms/Textarea";
import Title from "../../../components/common/Title";

// ** Imports de tipos e serviços
import { CrudExample2 } from "../../../types/interfaces/CrudExample2";
import { createOrUpdateItem } from "../../../services/crudExample2Service";

const HandleExample2: React.FC = () => {
    const navigate = useNavigate();
    const item = useLocation().state as CrudExample2;

    const initialValues: CrudExample2 = {
        field1: "",
        field2: "",
        field3: "",
    };

    const validationSchema = Yup.object().shape({
        field1: Yup.string().required("Required field"),
        field2: Yup.string().required("Required field"),
        field3: Yup.string().required("Required field"),
    });

    const onSubmit = async (values: CrudExample2, { resetForm }: { resetForm: () => void }) => {
        try {
            await createOrUpdateItem(values);
            resetForm();
            navigate("/crud-example2/list");
            alert("Form sent successfully!");
        } catch (error) {
            console.log(error);
            alert("An error occured when submitting the form");
        }
    };

    return (
        <Form
            initialValues={item || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            {({ errors, touched }) => (

                <>
                    {
                        !item ?
                            <Title>Insert Example 2</Title>
                            :
                            <Title>Update Example 2</Title>
                    }

                    <Input
                        label="Field 1"
                        name="field1"
                        errors={errors.field1}
                        touched={touched.field1}
                    />

                    <Select
                        label="Field 2"
                        name="field2"
                        options={[
                            { value: "option1", label: "Option 1" },
                            { value: "option2", label: "Option 2" },
                        ]}
                        errors={errors.field2}
                        touched={touched.field2}
                    />

                    <Textarea
                        label="Field 3"
                        name="field3"
                        errors={errors.field3}
                        touched={touched.field3}
                    />

                    <Button type="submit">Save</Button>

                </>
            )}
        </Form>
    );
}

export default HandleExample2;

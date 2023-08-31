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
import { Address } from "../../../types/interfaces/Customers";
import { createOrUpdateItem } from "../../../services/addressesService";

const HandleAddresses: React.FC = () => {
  const navigate = useNavigate();
  const item = useLocation().state as Address;

  const initialValues: Address = {
    city: "",
    state: "",
  };

  const validationSchema = Yup.object().shape({
    city: Yup.string().required("Campo obrigatório"),
    state: Yup.string().required("Campo obrigatório"),
  });

  const onSubmit = async (values: Address, { resetForm }: { resetForm: () => void }) => {
    try {
      await createOrUpdateItem(values);
      resetForm();
      navigate("/localidades/listar");
      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao enviar o formulário");
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
              <Title>Adicionar Localidade</Title>
              :
              <Title>Atualizar Localidade</Title>
          }

          <Input
            label="Cidade"
            name="city"
            errors={errors.city}
            touched={touched.city}
          />

          <Input
            label="Estado"
            name="state"
            errors={errors.state}
            touched={touched.state}
          />

          <Button type="submit">Salvar</Button>

        </>
      )}
    </Form>
  );
}

export default HandleAddresses;

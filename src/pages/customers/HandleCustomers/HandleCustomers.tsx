// ** Imports do React
import React, { useState, useEffect } from "react";

// ** Imports de pacotes
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

// ** Imports de componentes
import Form from "../../../components/forms/Form";
import Input from "../../../components/forms/Input";
import Select, { Option } from "../../../components/forms/Select";
import Button from "../../../components/common/Button";
import Title from "../../../components/common/Title";

// ** Imports de tipos e serviços
import { Customer, Address } from "../../../types/interfaces/Customers";
import { createOrUpdateItem } from "../../../services/customersService";
import { getItems as getAddresses } from '../../../services/addressesService'

const HandleCustomers = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [cityOptions, setCityOptions] = useState<Option[]>([]);
  const item = useLocation().state as Customer;

  const initialValues: Customer = {
    name: "",
    phone: "",
    address_id: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required field"),
    phone: Yup.string().required("Required field"),
    address_id: Yup.string().required("Required field"),
  });

  const onSubmit = async (values: Customer, { resetForm }: { resetForm: () => void }) => {
    try {
      await createOrUpdateItem(values);
      resetForm();
      navigate("/crud-example1/list");
      alert("Form sent successfully!");
    } catch (error) {
      console.log(error);
      alert("An error occured when submitting the form");
    }
  };

  const fetchAddresses = async () => {
    try {
      const addresses = await getAddresses();
      setAddresses(addresses);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  const stateOptions = addresses.map(
    (address) => {
      return { value: address.state, label: address.state };
    }
  );


  const handleStateChange = (selectedState: string) => {
    console.log('Estado selecionado:', selectedState);
    const filteredCities = addresses
      .filter((address) => address.state === selectedState)
      .map((address) => ({
        value: address.city,
        label: address.city,
      }));
    setCityOptions(filteredCities);
    console.log(filteredCities);
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

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
              <Title>Adicionar um Cliente</Title>
              :
              <Title>Atualizar um Cliente</Title>
          }

          <Input
            label="Nome"
            name="name"
            errors={errors.name}
            touched={touched.name}
          />

          <Select
            label="Estado"
            name="state"
            options={stateOptions}
            errors={errors.address_id}
            touched={touched.address_id}
            onChange={(selectedState) => handleStateChange(selectedState)}
          />

          <Select
            label="Cidade"
            name="city"
            options={cityOptions}
            errors={errors.address_id}
            touched={touched.address_id}
          />

          <Input
            label="Telefone"
            name="phone"
            errors={errors.name}
            touched={touched.name}
          />

          <Button type="submit">Save</Button>

        </>
      )}
    </Form>
  );
}

export default HandleCustomers;

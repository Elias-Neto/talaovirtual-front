// Imports do React
import React from "react";

// Imports de pacotes
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

// Imports de estilos
import styles from "./Signup.module.css";

// Imports de componentes
import Form from "../../components/forms/Form";
import Input from "../../components/forms/Input";
import Button from "../../components/common/Button";
import Title from "../../components/common/Title";

// Imports de tipos e serviços
import { User } from "../../types/interfaces/User";
import { signup as signupService } from "../../services/authService";

// Imports de contextos
import { useAuth } from "../../contexts/AuthContext";

const Signup = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();

    const initialValues: User = {
        email: "",
        password: "",
    };
    
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters long")
            .required("Password is required"),
    });

    const onSubmit = async (values: User) => {
        try {
            await signup(values);
            navigate("/");
        } catch (error) {
            alert("Error when signup");
        }
    };

    return (
        <div className={styles.signupWrapper}>
            <Form
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <>
                        <Title>SIGN UP</Title>

                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            errors={errors.email}
                            touched={touched.email}
                        />

                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            errors={errors.password}
                            touched={touched.password}
                        />

                        <Button type="submit">Sign up</Button>

                        <br />

                        <span>Already have an account?</span>
                        <Link to="/signin">Sign in</Link>
                    </>
                )}
            </Form>
        </div>
    );
};

export default Signup;

import React, {useEffect} from 'react';
import {Form, Segment, Button, Grid, Message} from "semantic-ui-react";
import styles from "./auth.module.css";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const SignUp = () => {
    const {register, errors, handleSubmit, setValue} = useForm();

    useEffect(() => {
        register({name: "username"}, {required: true});
        register({name: "email"}, {required: true});
        register({name: "password"}, {required: true, minLength: 6});
    }, []);


    const onSubmit = (data, e) => {
        console.log(data)
    };
    return (
        <Grid textAlign={"center"} verticalAlign={"middle"} className={styles.container}>
            <Grid.Column style={{maxWidth: 450}}>
                <h1 className={styles.formHeader}>ÇET</h1>
                <Form size={"large"} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <Segment>
                        <Form.Input fluid icon={"user"} iconPosition={"left"} name={"username"}
                                    onChange={(event, {name, value}) => {
                                        setValue(name, value)
                                    }}
                                    placeholder={"Kullanıcı Adı"} type={"text"}
                                    error={errors.username ? true : false}

                        />
                        <Form.Input fluid icon={"mail"} iconPosition={"left"} name={"email"}
                                    onChange={(event, {name, value}) => {
                                        setValue(name, value)
                                    }}
                                    placeholder={"Email Adresi"} type={"email"}
                                    error={errors.email ? true : false}
                        />
                        <Form.Input fluid icon={"lock"} iconPosition={"left"} name={"password"}
                                    onChange={(event, {name, value}) => {
                                        setValue(name, value)
                                    }}
                                    placeholder={"Şifre"} type={"password"}
                                    error={errors.password ? true : false}
                        />

                        <Button color={"purple"} fluid size={"large"}>Kaydol</Button>
                    </Segment>
                </Form>
                <Message>
                    Zaten bir hesabın var mı? <Link to={"/login"}>Giriş Yap</Link>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default SignUp;

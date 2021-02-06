import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {Form, Segment, Button, Grid, Message} from "semantic-ui-react";
import styles from "./auth.module.css";
import {Link} from "react-router-dom";

const Login = () => {
    const {register, errors, handleSubmit, setValue} = useForm();

    useEffect(() => {
        register({name: "email"}, {required: true});
        register({name: "password"}, {required: true, minLength: 6});
    }, []);


    const onSubmit = (data,e) => {
       console.log(data);
    };
    return (
        <Grid textAlign={"center"} verticalAlign={"middle"} className={styles.container}>
            <Grid.Column style={{maxWidth: 450}}>
                <h1 className={styles.formHeader}>ÇET</h1>
                <Form size={"large"} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <Segment>
                        <Form.Input fluid icon={"mail"} iconPosition={"left"} name={"email"}
                                    onChange={(event, {name,value})=>{
                                        setValue(name,value)
                                    }}
                                    placeholder={"Email Adresi"} type={"email"}
                                    error={errors.email ? true : false}
                        />
                        <Form.Input fluid icon={"lock"} iconPosition={"left"} name={"password"}
                                    onChange={(event, {name, value}) => {
                                        setValue(name, value)
                                    }}
                                    placeholder={"Şifre"} type={"password"}/>

                        <Button  color={"purple"} fluid size={"large"}>Giriş Yap</Button>
                    </Segment>
                </Form>
                <Message>
                    Yeni misin ? <Link to={"/signup"}>Hesap Oluştur</Link>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default Login;

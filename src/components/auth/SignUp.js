import React from 'react';
import {Form, Segment, Button, Grid, Message} from "semantic-ui-react";
import styles from "./signup.module.css";
import {Link} from "react-router-dom";

const SignUp = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <Grid textAlign={"center"} verticalAlign={"middle"} className={styles.container}>
            <Grid.Column style={{maxWidth: 450}}>
                <h1 className={styles.formHeader}>ÇET</h1>
                <Form size={"large"} className={styles.form} onSubmit={handleSubmit}>
                    <Segment>
                        <Form.Input fluid icon={"user"} iconPosition={"left"} name={"username"}
                                    placeholder={"Kullanıcı Adı"} type={"text"}/>
                        <Form.Input fluid icon={"mail"} iconPosition={"left"} name={"email"}
                                    placeholder={"Email Adresi"} type={"email"}/>
                        <Form.Input fluid icon={"lock"} iconPosition={"left"} name={"password"}
                                    placeholder={"Şifre"} type={"password"}/>

                        <Button color={"purple"} fluid size={"large"}>Kaydol</Button>
                    </Segment>
                </Form>
                <Message>
                    Zaten bir hesabın var mı? <Link to={"/login"}>Gi</Link>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default SignUp;

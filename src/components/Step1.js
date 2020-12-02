import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';
import { MdPublic } from 'react-icons/md';
import Form from './Form';
import Input from './Input';
import { useForm } from 'react-hook-form';

const StepStyles = styled.h2`
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export default function Step1(){

    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    })

    return (
        <Layout>
            <StepStyles>
                <MdPublic /> Step 1
            </StepStyles>
            <Form>
                <Input ref={register} id="firstName" type="text" label="Firest Name" name="firstName"/>
            </Form>
        </Layout>
    )
}

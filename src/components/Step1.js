import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';
import { MdPublic } from 'react-icons/md';
import Form from './Form';
// import Input from './Input';
import { useForm } from 'react-hook-form';
import PrimaryButton from './PrimaryButton'

const StepStyles = styled.h2`
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

const InputStyles = styled.input`
    width: 100%;
    display: block;
    margin: 20px 0px;
    border: 1px solid lightblue;
`;

export default function Step1() {

    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur",
    })

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Layout>
            <StepStyles>
                <MdPublic /> Step 1
            </StepStyles>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputStyles ref={register} id="firstName" type="text" label="First Name" name="firstName"/>
                <InputStyles ref={register} type="text" name="lastName"/>
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </Layout>
    )
}


import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';
import { MdPublic } from 'react-icons/md';
import Form from './Form';
import Input from './Input';
import { useForm } from 'react-hook-form';
import PrimaryButton from './PrimaryButton'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const StepStyles = styled.h2`
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

// form validation
// using yup

const schema = yup.object().shape({
    firstName: yup.string().matches(/^([^0-9]*)$/, "First name should not contain numbers").required("First name is a required field"),
    lastName: yup.string().matches(/^([^0-9]*)$/, "Last name should not contain numbers").required("Last name is a required field"),

})


export default function Step1() {

    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
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
                <Input ref={register} id="firstName" type="text" label="First Name" name="firstName" error={!!errors.firstName} helperText={errors?.firstName?.message}/>
                <Input ref={register} id="lastName" type="text" label="Last Name" name="lastName" error={!!errors.lastName} helperText={errors?.lastName?.message}/>
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </Layout>
    )
}


import React from 'react';
import { useHistory } from 'react-router-dom';
import PrimaryButton from './PrimaryButton'
import Layout from './Layout';
import { MdPublic } from 'react-icons/md';
import styled from 'styled-components';
import Form from './Form';
import Input from './Input';
import { useForm } from 'react-hook-form';
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
    email: yup
            .string()
            .email("Email should have correct format")
            .required("Email is a required field"),

})

export default function Step2(){

    const history = useHistory();


    const { register, handleSubmit, errors, watch } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        history.push('/step3')
    }

    return (
        <Layout>
            <StepStyles>
                <MdPublic /> Step 2
            </StepStyles>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    ref={register}
                    id="email"
                    type="email"
                    label="Email"
                    name="email"
                    required
                    error={!!errors.email}
                    helperText={errors?.email?.message} />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </Layout>
    )
}

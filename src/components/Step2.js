import React from 'react';
import { useHistory } from 'react-router-dom';
import { MdPublic } from 'react-icons/md';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import Input from './Input';
import Form from './Form';
import Layout from './Layout';
import PrimaryButton from './PrimaryButton';
import { useData } from './DataContext';

const StepStyles = styled.h2`
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

/*eslint-disable */


// form validation
// using yup

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have correct format')
    .required('Email is a required field'),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }
  return phoneNumber.formatInternational();
};

export default function Step2() {
  const history = useHistory();

  // check form validation
  const { data, setValues } = useData();

  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const hasPhone = watch('hasPhone');

  const onSubmit = (data) => {
    history.push('/step3');
    setValues(data);
  };

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
          helperText={errors?.email?.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              name="hasPhone"
              inputRef={register}
              color="primary"
            />
          }
          label="Do you have a phone"
        />
        {hasPhone && (
          <Input
            ref={register}
            id="phoneNumber"
            type="tel"
            label="Phone number"
            name="phoneNumber"
            onChange={(event) => {
              event.target.value = normalizePhoneNumber(event.target.value);
            }}
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </Layout>
  );
}

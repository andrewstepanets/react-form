import React from 'react';
import { MdPublic } from 'react-icons/md';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import FileInput from './FileInput';
import Form from './Form';
import Layout from './Layout';

const StepStyles = styled.h2`
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export default function Step3() {
  const { control, handleSubmit } = useForm();

  return (
    <Layout>
      <StepStyles>
        <MdPublic /> Step 3
      </StepStyles>
      <Form>
        <FileInput name="files" control={control} />
      </Form>
    </Layout>
  );
}

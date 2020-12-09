import React from 'react';
import { MdPublic } from 'react-icons/md';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import FileInput from './FileInput';
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

export default function Step3() {
  const history = useHistory();

  // check form validation
  const { data, setValues } = useData();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files
    }
  });

  const onSubmit = (data) => {
    history.push('/result');
    setValues(data);
  };

  return (
    <Layout>
      <StepStyles>
        <MdPublic /> Step 3
      </StepStyles>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </Layout>
  );
}

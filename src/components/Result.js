import React from 'react';
import styled from 'styled-components';
import { MdAssignmentTurnedIn, MdAttachFile } from 'react-icons/md';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InsertDriveFile } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Layout from './Layout';
import { useData } from './DataContext';

const StepStyles = styled.h2`
  font-size: 2rem;
  display: flex;
  align-items: center;
`;
const FileStyles = styled.div`
  font-size: 1rem;
  margin: 2rem;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  margin: 16px 0;
  width: 100%;
  padding: 10px 0;
  background: #8d33ff;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  border: 1px solid #8d33ff;
  border-radius: 5px;
  transition: all 0.4s ease;
  &:hover {
    background: white;
    color: #8d33ff;
  }
`;

const useStyles = makeStyles({
  root: {
    marginBottom: '0px',
  },
  table: {
    marginBottom: '0px',
  },
});

/*eslint-disable */

export default function Result() {
  const styles = useStyles();
  const { data } = useData();
  const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
  const { files } = data;

  async function onSubmit(e) {


    const formData = new FormData();


    if(data.files) {
      data.files.forEach(file => {
        formData.append("files", file, file.name)
      })
    }

    entries.forEach(entry => {
      formData.append(entry[0], entry[1])
    })


    const res = await fetch(`http://localhost:8888/.netlify/functions/sendForm`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if(res.status === 200) {
      // Swal.fire("Great job!", "You've passed the challenge", "success")
      Swal.fire("Good job!", "You clicked the button!", "success").then(function () {
        location.href = "/";
      });
    }

  }

  return (
    <Layout>
      <StepStyles>
        <MdAssignmentTurnedIn /> Form Values
      </StepStyles>
      <TableContainer className={styles.root} component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        files && (
          <>
            <FileStyles>
              <MdAttachFile /> Files
            </FileStyles>
            <List>
              {
                files.map((f, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <InsertDriveFile></InsertDriveFile>
                    </ListItemIcon>
                    <ListItemText primary={f.name} secondary={f.size} />
                  </ListItem>
                ))
              }
            </List>
          </>
        )
      }
      <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
      <Link to="/">Start Over</Link>
    </Layout>
  );
}

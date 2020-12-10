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

const useStyles = makeStyles({
  root: {
    marginBottom: '30px',
  },
  table: {
    marginBottom: '30px',
  },
});

/*eslint-disable */

export default function Result() {
  const styles = useStyles();
  const { data } = useData();
  const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
  const { files } = data;

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
      <Link to="/">Start Over</Link>
    </Layout>
  );
}

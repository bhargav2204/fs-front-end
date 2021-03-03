import React, {useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import ApiService from '../../ApiService';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function BasicTable() {
  const classes = useStyles();
  const apiService = new ApiService()
  const [form,setFormData]=useState([])
  useEffect(() => {
  getForms()
}, [])
const getForms = async () => {
  const data = await apiService.getForm();
  setFormData(data)
  console.log("getPro",data);
  
}

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="start">Form Name</TableCell>
            <TableCell align="start">Version</TableCell>
            <TableCell align="start">Service Line</TableCell>
            <TableCell align="start">Updated By</TableCell>
            <TableCell align="start">Updated</TableCell>

           
          </TableRow>
        </TableHead>
        <TableBody>
          {form.map((row) => (
            <TableRow key={row}>
              <TableCell align="start">
                {row.formName}
              </TableCell>
              <TableCell align="start">V1</TableCell>
              <TableCell align="start">{row.serviceLine}</TableCell>
              <TableCell align="start">{row.updatedBy}</TableCell>
              <TableCell align="start">{row.form}</TableCell>
              
           </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
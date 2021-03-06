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
  const [project,setProjectData]=useState([])
  useEffect(() => {
  getProjects()
}, [])
const getProjects = async () => {
  const data = await apiService.getProject();
  setProjectData(data)
  console.log("getPro",data);
  
}

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="start">Project Name</TableCell>
            <TableCell align="start">Service Line</TableCell>
            <TableCell align="start">Update By</TableCell>
            <TableCell align="start">Updated</TableCell>
            <TableCell align="start">Action</TableCell>

           
          </TableRow>
        </TableHead>
        <TableBody>
          {project.map((row) => (
            <TableRow key={row}>
              <TableCell align="start">
                {row.projectName}
              </TableCell>
              <TableCell align="start">Inspections</TableCell>
              <TableCell align="start">{row.updatedBy}</TableCell>
              <TableCell align="start">{row.photoOrientation}</TableCell>
              <TableCell align="start">{row.form}</TableCell>
              
           </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
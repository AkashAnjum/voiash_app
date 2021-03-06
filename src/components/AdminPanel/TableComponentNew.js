import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import '../../App.css';
import Paper from '@material-ui/core/Paper';
import ReactDOM from "react-dom";
import {  Button,Form,Row,Col,Card } from "react-bootstrap";
import { useState } from 'react';
 
const useStyles2 = makeStyles({
    table: {
      minWidth: 500,
      borderRadius: 8,
      boxShadowTop: 2, 
      flexGrow: 1,
      boxShodowColor:'red',
    },
    table1: {
      
      borderRadius: 8,
      boxShadow :"1px 1px 5px 1px gray"
    },
    header:{
        fontSize:50,
        fontWieght:'bold',
        color:'black'
    }
  });
  
export default function MyTableNew(props) {
    const classes = useStyles2();


    const [data, setData] = useState([
       
 ]);
const [ind,setInd]=useState([]);

    function addIndex (a){
      let status=  document.getElementById("myCheck");
      console.log(status)
        if(status.checked ==true){
            let row = {index:a}
            let newStateArray = [...ind];
            newStateArray.push(row);
            setInd(newStateArray);
        }
        console.log(data)
        console.log(ind)
    };

    const add = (e) => {
        e.preventDefault()
        let row = {
            key: "1",
            date: "",
            number: 0,
            number2: 0
        };
        let newStateArray = [...data];
        newStateArray.push(row);
        setData(newStateArray);
    };


    function deleteRow() {
        console.log("asdadvdfe")
        document.querySelectorAll('#table .select:checked').forEach(e => {
          e.parentNode.parentNode.remove()
        });
      }


    const remove = (a) => {
        a.preventDefault()
        console.log("asdadvdfe")
        document.querySelectorAll('#table .select:checked').forEach(e => {
          e.parentNode.parentNode.remove()
        });

        }
      
    
    return (
        <div className="grouptable">
            <Row className="marginbootm">
                <Col className="tablebutton">
                   <Button className="tableaddbutton"  onClick={remove}>
                   Eliminar
                  </Button>
                    <Button className="tableaddbutton" onClick={add}>Nueva Fecha</Button>
                </Col>
            </Row>
            
               
    <TableContainer component={Paper} className={classes.table1}>
      <Table size="small" className={classes.table} id="table" aria-label="custom pagination table"> 
                <TableHead className="header"> 
                    <TableRow>
                        <TableCell className="collspan"></TableCell>
                        <TableCell className="collspan">Fecha</TableCell>
                        <TableCell className="collspan">Pronto Pago MXN</TableCell>
                        <TableCell className="collspan">Pago Normal MXN</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {data.map((row,a) => (
                    
                        <TableRow> 
                            <TableCell className="inputintable3"><input  class='select'  type="checkbox"  />
                                                </TableCell>
                            <TableCell><Form.Control className="inputintable" defaultValue={row.date} type="date" /></TableCell>

                            <TableCell><Form.Control className="inputintable" defaultValue={row.number} type="number" /></TableCell>
                           
                            <TableCell><Form.Control className="inputintable" defaultValue={row.number2} type="number" /></TableCell>
                        </TableRow>
                    ))}
                      <TableRow className={classes.header}>
                        <TableCell className="collspan"></TableCell>
                        <TableCell className="collspan">Total:</TableCell>
                        <TableCell className="collspan">0</TableCell>
                        <TableCell className="collspan">0</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
            
              <div className="tabletext">
              <p className="tabletext1">Costo experiencias incluidas:  <p  className="tabletext11">0.00 MXN</p></p>
             
               <p className="tabletext1">Descuento pronto pago: <p className="tabletext11">-13300.00 MXN (Infinity%)</p></p>
                 <p className="tabletext1">Descuento pago normal:<p className="tabletext11">-13600.00 MXN (Infinity%)</p></p>
               
                   
                  
            
               
                  
                   
        
                   </div>
        </div>
    );
}

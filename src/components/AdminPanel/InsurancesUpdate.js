import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import '../../App.css';
import Popup from 'reactjs-popup';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Button, Modal, Card, Row, } from 'react-bootstrap';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

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
  
function InsurancesUpdate() {
    const [first,setFirst]=useState();
    const [second,setSecond]=useState();
    const classes = useStyles2();



    const [data, setData] = useState([
        {
        key: "1",
        status:true,
        date: "",
        number: "",
        number2: 0.00
    },
    {
        key: "1",
        status:true,
        date: "",
        number: "",
        number2: 0.00
    },
    {
        key: "1",
        status:true,
        date: "",
        number: "",
        number2: 0.00
    },
    {
        key: "1",
        status:true,
        date: "ES",
        number: "Eur",
        number2: 10.00
    },

    
 ]);

    const add = (e) => {
        e.preventDefault()
        let row = {
            key: "1",
            date: first,
            number: second,
            number2: 0.00
        };
        let newStateArray = [...data];
        newStateArray.push(row);
        setData(newStateArray);
    };


    const remove = (a) => {
        a.preventDefault()
        console.log("asdadvdfe")
        document.querySelectorAll('#table .select:checked').forEach(e => {
          e.parentNode.parentNode.remove()
        });

        }
      

    const divMargin = { margin: '25px 0' };
    const [modalShow2, setModalShow2] = useState(false);
    return (
        <Card style={{ width: '23rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }}  >
            <Card.Body>
                <Form >
                    <Row className="rowmarn">
                        <Col className="firstbtn">
                            <div className="firstbtn1"><Link to="/admin/insurances"><Button>Volver</Button></Link></div>
                            <div className="btnfornew" >
                                <Button>Eliminar</Button>
                                <Button className="formarginbtn">Guardar</Button>
                            </div>
                        </Col >
                    </Row>
                    <hr />
                    <Row className="rowmarn">
                        <Col >
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control placeholder="City" defaultValue="Seguro Libre Desistimiento - AON ARAG" />
                            <Form.Label className="rowmarn12345">Precios</Form.Label>
                        </Col >
                    </Row>
               <Row className="marginbootm">
                            
                           
                                <Col className="tablebutton">

                                    <Button className="tableaddbutton" onClick={remove}>
                                        Eliminar
                                       </Button>
                                       <Popup trigger={<Button className="tableaddbutton" >Nueva Fecha</Button>} position="bottom right">
                                
                           
                                       <Card style={{ width: '26rem' },{ borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }} >
                                           <div className="popupdiv">
                                    <Row className="rowmarn">
                                        <Col>
                                            <Form.Label>Pa??s</Form.Label>
                                            <Form.Control as="select"  onChange={e=> setFirst(e.target.value)}>
                                                <option>M??xico</option>
                                                <option>Espa??a</option>
                                                <option>Estados Unidos</option>
                                            </Form.Control>
                                        </Col >
                                        <Col>
                                            <Form.Label>Moneda</Form.Label>
                                            <Form.Control as="select" onChange={e=> setSecond(e.target.value)}>
                                                <option>MXN</option>
                                                <option>EUR</option>
                                                <option>USD</option>
                                            </Form.Control>
                                        </Col >
                                    </Row>
                            <div className="rightbutton">
                                <button className="buttonmodel1" onClick={add}>Agregar</button>
                            </div>
                            </div>

                            </Card>
                        
                                </Popup>
                                </Col>
                            </Row>
                            <Row className="rowmarn123">
                            <TableContainer component={Paper} className={classes.table1}>
                                <Table size="small" className={classes.table} id="table" aria-label="custom pagination table">
                                    <TableHead className="header">
                                        <TableRow>
                                            <TableCell className="collspan"></TableCell>
                                            <TableCell className="collspan">Pa??s</TableCell>
                                            <TableCell className="collspan">Moneda</TableCell>
                                            <TableCell className="collspan">Monto</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {data.map((row, a) => (

                                            <TableRow>
                                                <TableCell className="inputintable3"><input class='select' type="checkbox" />
                                                </TableCell>
                                                <TableCell><Form.Control className="inputintable" defaultValue={row.date} type="text" /></TableCell>

                                                <TableCell><Form.Control className="inputintable" defaultValue={row.number} type="text" /></TableCell>

                                                <TableCell><Form.Control className="inputintable" defaultValue={row.number2} type="number" /></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                      
                    </Row>
                    <Row className="rowmarn">
                        <Col >
                            <Form.Label>Descripci??n</Form.Label>
                            <Form.Control defaultValue="En este caso, se te devolver?? todo el dinero a excepci??n del
10% de lo pagado en concepto de franquicia por parte de la compa????a aseguradora.
Este seguro tambi??n incluye 31 causas por las cuales puedes cancelar tu viaje, si cancelas por uno
de estos motivos se te devolver?? todo el dinero sin aplicarte ninguna franquicia.
Adem??s, la cobertura m??dica en destino sube hasta 25.000??? " placeholder="State" as="textarea" aria-label="With textarea" />
                        </Col>
                    </Row>
                    <Row className="rowmarn">
                        <Col >
                            <Form.Label>L??mite de tiempo para pagar en horas</Form.Label>
                            <Form.Control placeholder="State" type="number" defaultValue="72" />
                        </Col>
                    </Row>
                    <Row className="rowmarn">
                        
                        <Col className="image-upload12">
                        <Form.Label>PDF</Form.Label>
                            <label for="file-input" className="newclass">
                            <p className="paragrapinput">insurances/QztTQC1NWZcoGFjfRNmd/file.pdf</p>
                            </label>
                            <input id="file-input" type="file" />

                        </Col>
                    </Row>

                </Form>
            </Card.Body>
        </Card>
    );
}
export default InsurancesUpdate;


function MyVerticallyCenteredModal2(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="Model">
                <div className="Model0">
                    <div className="Model1">
                        <CloseRoundedIcon className="closeicon" onClick={(props.onHide),(props.setParentCounter("pakistan"))}/>
                    </div>
                    <div className="Model2">
                        <div>
                            <div className="modelform">
                                <Form >
                                    <Row className="rowmarn">
                                        <Col>
                                            <Form.Label>Pa??s</Form.Label>
                                            <Form.Control as="select">
                                                <option>M??xico</option>
                                                <option>Espa??a</option>
                                                <option>Estados Unidos</option>
                                            </Form.Control>
                                        </Col >
                                        <Col>
                                            <Form.Label>Moneda</Form.Label>
                                            <Form.Control as="select">
                                                <option>MXN</option>
                                                <option>EUR</option>
                                                <option>USD</option>
                                            </Form.Control>
                                        </Col >
                                    </Row>
                                </Form>

                            </div>
                            <div className="rightbutton">
                                <button className="buttonmodel1">Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>

        </Modal>
    );
}
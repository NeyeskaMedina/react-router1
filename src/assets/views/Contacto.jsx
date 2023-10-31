import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";


export const Contacto = ( {title} ) => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (email.value.trim() === "" || description.value.trim() === ""){
            Swal.fire({
                title: 'Error!',
                text:  'Error! Ninguno de los campos puede estar vacio',
                icon:  'error',
            });
        }else {
            Swal.fire({
                title: 'Excelente!',
                text:  'Excelente! Los datos han sido enviado con exito',
                icon:  'success',
            });
            email.value = "";
            description.value = "";
        }
    }
  return (
    <>
        <Container className='d-flex flex-column align-center text-center mt-5'>
            <h4>{title}</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" id="email"/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicDescription">
                  <Form.Control type="text" placeholder="Descripción" id="description"/>
                </Form.Group>
                <Button variant="danger" type="submit">
                  Enviar
                </Button>
            </Form>
        </Container>
    </>
  )
}
export default Contacto;
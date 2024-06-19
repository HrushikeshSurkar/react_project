import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Crud.css'
import Table from 'react-bootstrap/Table';

const Crud = () => {
  // create a CRUD operation without any help
  const handleFormSubmit =(event)=>{
    event.preventDefault(); 
    console.log("hello")
  }
  return (
    <div>
      <h1>CRUD</h1>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <Form className="main-form-wrap" onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-flex justify-content-end">

            <Button variant="primary" type="submit" className="submit-button">
              Submit
            </Button>
            </div>
          </Form>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </div>
      </div>
    </div>
  );
};

export default Crud;

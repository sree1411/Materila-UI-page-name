import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

export default function UpdateUser( { userDetails }) {


    const validationSchema =  yup.object().shape({

        name: yup.string().min(2, 'too short').max(25, 'too long').required('Required'),
        age: yup.string().min(1, 'too short').max(105, 'too long').required('Required'),
        email: yup.string().email('invalid email').required('Required'),
        phone: yup.string().min(10, 'too short').max(15, 'too long').required('Required'),
    
    });
    
    const formik = useFormik( {  
         enableReinitialize:true,
         initialValues: userDetails,
         validationSchema: validationSchema,
         onSubmit: (values, { resetForm }) => {
          console.log(values)
         }
    });



  return (
    <div>

           
     <Card style={{ width: '100%' }}>
      <Card.Body>
       <h3>   Update User </h3>
        <Form onSubmit={formik.handleSubmit}>

    
        <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control 
        name='name'
        placeholder="Enter name" 
        values={formik.values.name}
        onChange={formik.handleChange}
        isvalid={formik.errors.name}
        />
        <Form.Text className="text-muted">
        {formik.touched.name && Boolean(formik.errors.name) ? <div className='red'> {formik.errors.name } </div> : <div> .</div> }

        </Form.Text>
         
      </Form.Group>
        
       
      <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control 
        name='age'
        placeholder="Enter name" 
        values={formik.values.age}
        onChange={formik.handleChange}
        isvalid={formik.errors.age}
        />
        <Form.Text className="text-muted">
        {formik.touched.age && Boolean(formik.errors.age) ? <div className='red'> {formik.errors.age } </div> : <div> .</div> }

        </Form.Text>
         
      </Form.Group>


      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control 
        name='email'
        placeholder="Enter name" 
        values={formik.values.email}
        onChange={formik.handleChange}
        isvalid={formik.errors.email}
        />
        <Form.Text className="text-muted">
        {formik.touched.email && Boolean(formik.errors.email) ? <div className='red'> {formik.errors.email} </div> : <div> .</div> }

        </Form.Text>
         
      </Form.Group>


      <Form.Group className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control 
        name='phone'
        placeholder="Enter name" 
        values={formik.values.phone}
        onChange={formik.handleChange}
        isvalid={formik.errors.phone}
        />
        <Form.Text className="text-muted">
        {formik.touched.phone && Boolean(formik.errors.phone) ? <div className='red'> {formik.errors.phone } </div> : <div> .</div> }

        </Form.Text>
         
      </Form.Group>

     
       


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>



  

      </Card.Body>
    </Card>
    </div>
  )
}

/* Inserted in <Outlet /> on browser route: /contact */

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // Handle form submission here
    },
  });

  return (
    <main className="container">
    <section id="contact">
      {/* <h2>Contact</h2> */}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? <small>{formik.errors.name}</small> : null}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <small>{formik.errors.email}</small> : null}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? <small>{formik.errors.message}</small> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
    </main>
  );
};

export default Contact;
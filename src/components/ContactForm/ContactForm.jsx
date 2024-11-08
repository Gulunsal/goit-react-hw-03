import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'En az 3 karakter')
    .max(50, 'En fazla 50 karakter')
    .required('Bu alan zorunludur'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: 123-45-67')
    .required('Bu alan zorunludur')
});

function ContactForm({ addContact }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact(values.name, values.number);
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <label>
          Name:
          <Field name="name" type="text" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label>
          Number:
          <Field name="number" type="text" className={styles.input} />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>
        <button type="submit" className={styles.button}>Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;

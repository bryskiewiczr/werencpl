import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  selection: Yup.string().required('Pole jest wymagane'),
  name: Yup.string().required('Pole jest wymagane'),
  email: Yup.string().email('Nieprawidłowy e-mail').required('Pole jest wymagane'),
  repeatEmail: Yup.string().oneOf([Yup.ref('email'), null], 'E-maile muszą się zgadzać').required('Pole jest wymagane'),
  message: Yup.string().required('Pole jest wymagane').max(1000, 'Treść wiadomości nie może przekraczać 1000 znaków'),
});

const ContactForm = () => {
  return (
    <div className="w-full bg-white shadow-zinc-800 drop-shadow-2xl rounded-lg p-6">
      <Formik
        initialValues={{
          selection: '',
          name: '',
          email: '',
          repeatEmail: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Handle form submission
          console.log(values);
          setSubmitting(false);
          resetForm();
          alert('Formularz został pomyślnie wysłany!');
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block font-bold uppercase label-text mb-2" htmlFor="selection">temat zapytania</label>
              <Field as="select" id="selection" name="selection" className="input uppercase input-warning border-zinc-200 rounded-none w-full">
                <option value="">Wybierz temat</option>
                <option value="product-inquiry">zapytanie o produkt</option>
                <option value="repair-inquiry">zapytanie serwisowe (uszkodzona część lub części)</option>
                <option value="spare-parts-inquire">zapytanie o części zamienne</option>
                <option value="tech-support-request">prośba o wsparcie techniczne</option>
                <option value="trash">propozycje, sugestie, opinie</option>
              </Field>
              <ErrorMessage name="selection" component="div" className="text-red-500" />
            </div>
            <div>
              <label className="block font-bold uppercase label-text mb-2" htmlFor="name">imię</label>
              <Field type="text" id="name" name="name" className="input input-warning border-zinc-200 rounded-none w-full" />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>
            <div>
              <label className="block font-bold uppercase label-text mb-2" htmlFor="email">e-mail</label>
              <Field type="email" id="email" name="email" className="input input-warning border-zinc-200 rounded-none w-full" />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div>
              <label className="block font-bold uppercase label-text mb-2" htmlFor="repeatEmail">powtórz e-mail</label>
              <Field type="email" id="repeatEmail" name="repeatEmail" className="input input-warning border-zinc-200 rounded-none w-full" />
              <ErrorMessage name="repeatEmail" component="div" className="text-red-500" />
            </div>
            <div>
              <label className="block font-bold uppercase label-text mb-2" htmlFor="message">treść wiadomości</label>
              <Field as="textarea" id="message" name="message" className="input input-warning border-zinc-200 rounded-none w-full h-48" />
              <ErrorMessage name="message" component="div" className="text-red-500" />
            </div>
            <button type="submit" className="btn rounded-none uppercase bg-zinc-800 hover:bg-amber-500 text-amber-500 hover:text-zinc-800 w-full" disabled={isSubmitting}>
              wyślij
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;

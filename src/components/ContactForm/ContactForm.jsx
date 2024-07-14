import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    values.id = nanoid();
    addContact(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <label htmlFor="name" className={s.label}>
          Name:
          <Field type="text" name="name" className={s.input} />
          <ErrorMessage name="name" component="p" />
        </label>

        <label htmlFor="number" className={s.label}>
          Number:
          <Field type="text" name="number" className={s.input} />
          <ErrorMessage name="number" component="p" />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

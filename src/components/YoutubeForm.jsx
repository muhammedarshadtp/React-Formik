import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(3, "Minimum 3 characters")
    .max(20, "Maximum 20 characters")
    .required("Name is required"),

  email: yup
    .string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),

  channel: yup.string().trim().required("Channel is required"),
});

const onSubmit = (values) => {
  console.log("form data", values);
};

const YoutubeForm = () => {
  return (
    <Formik
      className="container"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;

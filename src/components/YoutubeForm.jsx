import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  address: "",
  comments: "",
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
  address: yup
    .string()
    .required("Address is required")
    .min(10, "Address must be at least 10 characters"),

  comments: yup
    .string()
    .required("Comments are required")
    .max(200, "Comments must not exceed 200 characters"),
});

const onSubmit = (values) => {
  console.log("form data", values);
};

const YoutubeForm = () => {
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form">
          <h2 className="form-title">YouTube Form</h2>

          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component={TextError} />
          </div>

          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
          </div>

          <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <Field type="text" id="channel" name="channel" />
            <ErrorMessage name="channel" component="p" className="error" />
          </div>

          <div className="form-control">
            <label htmlFor="comments">Comments</label>
            <Field as="textarea" id="comments" name="comments" />
            <ErrorMessage name="comments" component={TextError} />
          </div>
          <div className="form-control">
            <label htmlFor="address">Address</label>
            <Field name="address">
              {(props) => {
                const { Field, meta } = props;
                return (
                  <div>
                    <input type="text" id="address" {...Field} />
                    {meta.touched && meta.error ? (
                      <div>{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default YoutubeForm;

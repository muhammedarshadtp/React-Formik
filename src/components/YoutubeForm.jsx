import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  address:"",
  comments:"",
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
            <ErrorMessage name="name" component="p" className="error" />
          </div>

          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="p" className="error" />
          </div>

          <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <Field type="text" id="channel" name="channel" />
            <ErrorMessage name="channel" component="p" className="error" />
          </div>

          <div className="form-control">
            <label htmlFor="comments">Comments</label>
            <Field as="textarea" id="comments" name="comments" />
          </div>
          <div className="form-control">
            <label htmlFor="address">Address</label>
            <Field name="address">
                {
                    props=>{
                        const {Field,meta}=props
                        return(
                            <div>
                                <input type="text" id="address" {...Field} />
                                {meta.touched && meta.error ? <div>{meta.error}</div>:null}
                            </div>
                        )

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

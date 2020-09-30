import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Props {
  handleNext: () => void;
}

const FormTwo: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{ lastName: "" }}
      validationSchema={Yup.object({
        lastName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required*"),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext();
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="lastName">Last Name: </label>
        <Field name="lastName" type="text" />
        <br />
        <ErrorMessage name="lastName" />

        <br />

        <button type="submit">Next</button>
      </Form>
    </Formik>
  );
};

export default FormTwo;

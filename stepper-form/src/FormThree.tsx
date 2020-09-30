import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Props {
  handleNext: () => void;
}

const FormThree: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email().required("Required*"),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext();
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="email">Email Id: </label>
        <Field name="email" type="text" />
        <br />
        <ErrorMessage name="email" />

        <br />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormThree;

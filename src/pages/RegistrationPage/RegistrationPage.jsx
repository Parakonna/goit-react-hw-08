import { ErrorMessage, Field, Formik } from 'formik';
import { RegisterUserSchema } from '../../utils/shemas';
import { Form } from 'react-router-dom';
import css from './RegistrationPage.module.css';

const INITIAL_VALUES = {
  name: '',
  email: '',
  password: '',
};

const RegistrationPage = () => {
  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };
  return (
    <div>
      RegistrationPage
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={RegisterUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name:</span>
            <Field
              type="text"
              name="name"
              className={css.input}
              placeholder="Ivan Ivanov"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Email:</span>
            <Field
              type="text"
              name="email"
              className={css.input}
              placeholder="example.email@example.com"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Password:</span>
            <Field
              type="password"
              name="password"
              className={css.input}
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="span"
            />
          </label>

          <button type="submit">🤷‍♂️ Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;

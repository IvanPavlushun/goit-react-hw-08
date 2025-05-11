import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerThunk } from '../../redux/auth/operations';
import s from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(7, 'Password must be at least 7 characters')
      .required('Password is required'),
  });

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(registerThunk(values)).unwrap();
      toast.success('Registration successful!');
      actions.resetForm();
    } catch (error) {
      toast.error(`Registration failed: ${error}`);
    }
  };

  return (
    <div className={s.hero}>
      <div className={s.heroContent}>
        <div className={s.heroText}>
          <h1 className={s.title}>Register now!</h1>
          <p className={s.subtitle}>
           Try this convenient app for storing your contacts now!
          </p>
        </div>
        <div className={s.card}>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form>
              <fieldset className={s.fieldset}>
                <label className={s.label}>Name</label>
                <Field name="name" type="text" className={s.input} placeholder="Name" />

                <label className={s.label}>Email</label>
                <Field name="email" type="email" className={s.input} placeholder="Email" />

                <label className={s.label}>Password</label>
                <Field name="password" type="password" className={s.input} placeholder="Password" />

                <Link to="/login" className={s.link}>
                  You already have an account? Sign in!
                </Link>

                <button type="submit" className={s.button}>
                  Register
                </button>
              </fieldset>
            </Form>
          </Formik>

          <div className={s.divider}></div>

          <Link to="/" className={s.backLink}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

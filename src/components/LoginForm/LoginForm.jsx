import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(7, 'Password must be at least 7 characters')
      .required('Password is required'),
  });

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(loginThunk(values)).unwrap();
      toast.success('Login successful!');
      actions.resetForm();
    } catch (error) {
      toast.error(`Login failed: ${error}`);
    }
  };

  return (
    <div className={s.hero}>
      <div className={s.heroContent}>
        <div className={s.heroText}>
          <h1 className={s.title}>Login now!</h1>
          <p className={s.subtitle}>
            Nice to see you again! Log in quickly!
          </p>
        </div>
        <div className={s.card}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <fieldset className={s.fieldset}>
                  <label className={s.label}>Email</label>
                  <Field
                    name="email"
                    type="email"
                    className={s.input}
                    placeholder="Email"
                  />
                  {errors.email && touched.email && (
                    <div className={s.error}>{errors.email}</div>
                  )}

                  <label className={s.label}>Password</label>
                  <Field
                    name="password"
                    type="password"
                    className={s.input}
                    placeholder="Password"
                  />
                  {errors.password && touched.password && (
                    <div className={s.error}>{errors.password}</div>
                  )}

                  <Link to="/register" className={s.link}>
                    You don't have an account? Sign up!
                  </Link>

                  <button type="submit" className={s.button}>
                    Login
                  </button>
                </fieldset>
              </Form>
            )}
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

export default LoginForm;
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import FormInput from '../../molecules/FormInput';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import { AuthContext } from '../../../context';
import { StyledLoginForm } from './StyledLoginForm';
import * as yup from 'yup';
import { getUserData } from '../../../redux/userReducer/selectors';
import { useSelector } from 'react-redux';
import { formatError } from '../../../helpers';

const schema = yup.object().shape({
  login: yup.string().required("Login can't be empty"),
  password: yup.string().required("Password can't be empty"),
});

const LoginForm = () => {
  const { signIn } = useContext(AuthContext);
  const { error } = useSelector(getUserData);

  const formik = useFormik({
    initialValues: {
      login: 'luke',
      password: 'iamyourfather',
    },
    onSubmit: ({ login, password }, { resetForm }) => {
      const email = login.concat('@gmail.com');
      signIn(email, password);
      resetForm();
    },
    validationSchema: schema,
  });

  return (
    <StyledLoginForm onSubmit={formik.handleSubmit}>
      {error && <Heading color="red">{formatError(error.code)}</Heading>}
      <FormInput
        label="Login"
        name="login"
        value={formik.values.login}
        onChange={formik.handleChange}
        errorMsg={formik.errors.login}
      />
      <FormInput
        label="Password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        errorMsg={formik.errors.password}
        type="password"
      />
      <Button type="subimt">Login</Button>
    </StyledLoginForm>
  );
};

export default LoginForm;

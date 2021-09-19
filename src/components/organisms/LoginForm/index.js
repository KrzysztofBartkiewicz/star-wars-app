import React, { useContext } from 'react';
import { useFormik } from 'formik';
import FormInput from '../../molecules/FormInput';
import Button from '../../atoms/Button';
import { AuthContext } from '../../../context';
import { StyledLoginForm } from './StyledLoginForm';

const LoginForm = () => {
  const { signIn } = useContext(AuthContext);

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
  });

  return (
    <StyledLoginForm onSubmit={formik.handleSubmit}>
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

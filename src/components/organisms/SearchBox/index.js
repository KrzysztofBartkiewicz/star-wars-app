import React from 'react';
import FormInput from '../../molecules/FormInput';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import { useFormik } from 'formik';
import { StyledSearchBox } from './StyledSearchBox';
import { fetchSearchedCharacters } from '../../../api/swapi';
import { useDispatch } from 'react-redux';
import { setSearchedCharacters } from '../../../redux/appReducer/actions';
import * as yup from 'yup';

const schema = yup.object().shape({
  search: yup.string().required('Search field is empty'),
});

const SearchBox = ({ className }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: async ({ search }, { resetForm }) => {
      const characters = await fetchSearchedCharacters(search);
      dispatch(setSearchedCharacters(characters));
      resetForm();
    },
    validationSchema: schema,
  });

  return (
    <StyledSearchBox className={className} onSubmit={formik.handleSubmit}>
      <Heading>Search Characters</Heading>
      <FormInput
        name="search"
        value={formik.values.search}
        onChange={formik.handleChange}
        errorMsg={formik.errors.search}
      />
      <Button type="submit">Search</Button>
    </StyledSearchBox>
  );
};

export default SearchBox;

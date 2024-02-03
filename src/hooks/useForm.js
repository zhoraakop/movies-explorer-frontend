import { useState, useCallback } from "react";

function useForm() {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: evt.target.validationMessage });
    setFormIsValid(evt.target.closest("form").checkValidity());
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setFormValues(newValues);
      setFormErrors(newErrors);
      setFormIsValid(newIsValid);
    },
    [setFormValues, setFormErrors, setFormIsValid]
  );

  return {
    formValues,
    formErrors,
    handleChange,
    setFormValues,
    formIsValid,
    setFormIsValid,
    resetForm,
  };
}

export default useForm;

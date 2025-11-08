import { useState } from 'react';
import { validateForm, validateField } from '../utils/validation';

export const useForm = ({ initialValues, onSubmit }) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [touched, setTouched] = useState({});

  console.log('🟡 [FORM] Current state:', { formData, errors, isSubmitting, submitStatus });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation for touched fields
    if (touched[name]) {
      const fieldErrors = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        ...fieldErrors
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    
    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate the field
    const fieldErrors = validateField(name, formData[name]);
    setErrors(prev => ({
      ...prev,
      ...fieldErrors
    }));
  };

  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
    setTouched({});
    setSubmitStatus('');
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Mark all fields as touched
  const allTouched = Object.keys(initialValues).reduce((acc, key) => {
    acc[key] = true;
    return acc;
  }, {});
  setTouched(allTouched);

  // Validate entire form
  const validationErrors = validateForm(formData);
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus('');

  const result = await onSubmit(formData);
  
  if (result.success) {
    setSubmitStatus(result.message || 'Form Submitted Successfully!');
    // Clear form but keep success message
    setFormData(initialValues);
    setErrors({});
    setTouched({});
  } else {
    setSubmitStatus(`Error: ${result.error}`);
  }

  setIsSubmitting(false);
};

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  };
};
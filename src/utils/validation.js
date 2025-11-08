// Email validation regex
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation (basic - at least 10 digits)
export const validatePhone = (phone) => {
  const phoneRegex = /^\d{10,}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

// Comprehensive form validation
export const validateForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  } else if (formData.name.trim().length > 50) {
    errors.name = 'Name must be less than 50 characters';
  }

  // Email validation
  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  if (!formData.phone?.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number (at least 10 digits)';
  }

  // Message validation
  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (formData.message.trim().length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return errors;
};

// Real-time field validation
export const validateField = (name, value) => {
  const errors = {};

  switch (name) {
    case 'name':
      if (!value.trim()) {
        errors.name = 'Name is required';
      } else if (value.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
      }
      break;

    case 'email':
      if (!value.trim()) {
        errors.email = 'Email is required';
      } else if (!validateEmail(value)) {
        errors.email = 'Please enter a valid email address';
      }
      break;

    case 'phone':
      if (!value.trim()) {
        errors.phone = 'Phone number is required';
      } else if (!validatePhone(value)) {
        errors.phone = 'Please enter a valid phone number';
      }
      break;

    case 'message':
      if (!value.trim()) {
        errors.message = 'Message is required';
      } else if (value.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
      }
      break;

    default:
      break;
  }

  return errors;
};
// src/components/Contact/ContactForm/ContactForm.js
import React from "react";
import { useForm } from "../../../hooks/useForm";
import { submitContactForm } from "../../../services/api";
import "./ContactForm.css";

const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: submitContactForm,
  });

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${errors.name ? "error" : ""} ${
              touched.name && !errors.name ? "valid" : ""
            }`}
            placeholder="Your name?"
            disabled={isSubmitting}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${errors.email ? "error" : ""} ${
              touched.email && !errors.email ? "valid" : ""
            }`}
            placeholder="Your email?"
            disabled={isSubmitting}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${errors.phone ? "error" : ""} ${
              touched.phone && !errors.phone ? "valid" : ""
            }`}
            placeholder="Phone"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
        </div>

        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-textarea ${errors.message ? "error" : ""} ${
              touched.message && !errors.message ? "valid" : ""
            }`}
            placeholder="Your message?"
            rows="4"
            disabled={isSubmitting}
          />
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </button>

        {submitStatus && (
          <div
            className={`submit-status ${
              submitStatus.includes("Error") ? "error" : "success"
            }`}
          >
            {submitStatus}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

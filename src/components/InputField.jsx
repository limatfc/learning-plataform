import { useState } from "react";

export default function InputField({ setup, actions }) {
  const [error, setError] = useState(null);

  const { type, label, placeholder, errorMessage, required } = setup;
  const [setter, check] = actions;

  function onBlurHandler(event) {
    const hasError = check(event.target.value);
    hasError ? setError(false) : setError(true);
  }

  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          placeholder={placeholder}
          onChange={(event) => setter(event.target.value)}
          onBlur={onBlurHandler}
          required={required}
        />
      </label>
      <small>{error && errorMessage}</small>
    </div>
  );
}

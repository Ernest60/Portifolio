import * as React from "react";

export const EmailTemplate = ({ name, email, message }) => {
  return (
    <div>
      <h2>You just received a new message!</h2>
      <p>
        <span>name:</span>
        <strong>{name}</strong>
      </p>

      <p>
        <span>Email:</span>
        <strong>{email}</strong>
      </p>
      <p>
        <span>Message:</span>
        <strong>{message}</strong>
      </p>
    </div>
  );
};

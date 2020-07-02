import React from "react";

export default function ErrorNotice(props) {
  return (
    <div className="error-notice">
      <span className="error-message">{props.message}</span>
      <button onClick={props.clearError}>X</button>
    </div>
  );
}

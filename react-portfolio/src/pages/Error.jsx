import React from 'react';

const ErrorPage = ({ error }) => {
  return (
    <section className="error-page">
      <h1>Oops! Something went wrong!</h1>
      <div>
        <h2>Error Details:</h2>
        <p>{error.message || "An unexpected error occurred."}</p>
        {error.stack && (
          <pre>{error.stack}</pre>
        )}
      </div>
      <p>We apologize for the inconvenience. Please try again later or contact support if the issue persists.</p>
      <button onClick={() => window.location.reload()}>Reload Page</button>
    </section>
  );
};

export default ErrorPage;
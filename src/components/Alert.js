import React from 'react';

function Alert(props) {
  const { alert } = props;
  if (!alert) return null;

  return (
    <div style={{ height: '50px' }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
          style={{ height: '100%' }} // Ensure alert div takes the full height
        >
          {alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;

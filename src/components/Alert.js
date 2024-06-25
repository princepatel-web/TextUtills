import React from 'react';

function Alert(props) {
  const { alert } = props;
  if (!alert) return null;

  return (
    <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
      {alert.msg}
    </div>
  );
}

export default Alert;

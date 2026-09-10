import React from 'react';

const NotFound = () => {
  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#0b1220" }}
    >
      <div
        className="p-3 text-secondary text-center rounded-3"
        style={{
          backgroundColor: "#181a1c",
          border: "1px solid #333638"
        }}
      >
        USER NOT FOUND ... <i className="bi bi-person-circle ms-2"></i>
      </div>
    </div>
  );
};

export default NotFound;
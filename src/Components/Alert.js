import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const navbarHeight = "60px"; 

  const alertStyle = {
    position: "fixed",
    top: `calc(${navbarHeight} + -4px)`, 
    right: "-13px", 
    zIndex: 1000,
    width: "auto",
    maxWidth: "320px",
    whiteSpace: "nowrap",
    overflow: "hidden", 
    textOverflow: "ellipsis", 
  };

  return (
    <div>
      {props.alert && (
        <div
          style={alertStyle}
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div>
      )}
    </div>
  );
}

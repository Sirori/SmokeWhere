import React from "react";
import PropTypes from "prop-types";
import styles from "./CommonButton.module.scss";

const CommonButton = ({ children, className, onClick }) => {
  return (
    <button className={`${styles.commonButton} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

CommonButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default CommonButton;

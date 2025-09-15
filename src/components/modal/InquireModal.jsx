import React from "react";
import PropTypes from "prop-types";
import CommonModal from "../common/CommonModal";
import styles from "./InquireModal.module.scss";

const InquireModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 입력 데이터 처리
    console.log("제출됨");
    onClose(); // 제출 후 모달 닫기
  };

  const contentTitle = "문의사항을 남겨주세요 :D";
  const content = (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputWrap}>
        <label className={styles.inputLabel} htmlFor="title">
          제목
        </label>
        <input
          className={styles.input}
          type="text"
          id="title"
          placeholder="제목을 입력하세요"
          required
        />
      </div>

      <div className={styles.inputWrap}>
        <label className={styles.inputLabel} htmlFor="inquire">
          문의사항
        </label>
        <textarea
          className={styles.textArea}
          placeholder="문의사항을 적어주세요"
          id="inquire"
          required
        />
      </div>
      <button className={styles.submitButton} type="submit">
        제출하기
      </button>
    </form>
  );

  return (
    <CommonModal
      onClose={onClose}
      contentTitle={contentTitle}
      content={content}
    />
  );
};

InquireModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default InquireModal;

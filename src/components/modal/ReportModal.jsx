import React from "react";
import PropTypes from "prop-types";
import CommonModal from "../common/CommonModal";
import styles from "./ReportModal.module.scss";

const ReportModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 입력 데이터 처리
    console.log("제출됨");
    onClose(); // 제출 후 모달 닫기
  };

  const contentTitle = "흡연구역을 제보해주세요 :D";
  const content = (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputWrap}>
        <label className={styles.inputLabel} htmlFor="location">
          위치
        </label>
        <input
          className={styles.input}
          type="text"
          id="location"
          placeholder="알기 쉽게 위치를 설명해주세요. (ex. 건물 뒤 편 주차장)"
          required
        />
      </div>

      <div className={styles.inputWrap}>
        <label className={styles.inputLabel} htmlFor="address">
          주소
        </label>
        <input
          className={styles.input}
          type="text"
          id="address"
          placeholder="주소를 입력하세요"
          required
        />
      </div>

      <div className={styles.inputWrap}>
        <label className={styles.inputLabel} htmlFor="type">
          형태
        </label>

        <div className={styles.radioWrap}>
          <label className={styles.radioLabel}>
            <input
              className={styles.radioInput}
              type="radio"
              id="type"
              name="reportOption"
              value="opened"
              required
            />
            개방형
          </label>
          <label className={styles.radioLabel}>
            <input
              className={styles.radioInput}
              type="radio"
              id="type"
              name="reportOption"
              value="closed"
            />
            폐쇄(밀폐)형
          </label>
          <label className={styles.radioLabel}>
            <input
              className={styles.radioInput}
              type="radio"
              id="type"
              name="reportOption"
              value="partiallyOpened"
            />
            부분개방형
          </label>
        </div>
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

ReportModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ReportModal;

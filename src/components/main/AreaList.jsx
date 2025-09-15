import React from "react";
import styles from "./AreaList.module.scss";
import { AREA_HEADER, AREA_LIST } from "../../const/area";

const AreaList = () => {
  return (
    <ul className={styles.listWrap}>
      <li className={styles.mainList}>
        {/* 헤더 */}
        {AREA_HEADER.map((item) => (
          <span key={item.id} className={styles.listSpan}>
            {item.name}
          </span>
        ))}
      </li>
      {AREA_LIST.map((item) => (
        <li key={item.id} className={styles.itemList}>
          <span className={styles.listSpan}>{item.name}</span>
          <span className={styles.listSpan}>{item.type}</span>
          <span className={styles.listSpan}>{item.address}</span>
        </li>
      ))}
    </ul>
  );
};

export default AreaList;

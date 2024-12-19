import React from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <button className={s.LoadMoreButton} onClick={onLoadMore}>
      Load more ...
    </button>
  );
};

export default LoadMoreBtn;

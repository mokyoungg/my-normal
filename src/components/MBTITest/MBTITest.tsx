"use client";

import { useCallback, useState } from "react";
import styles from "./MBTITest.module.scss";
import classNames from "classnames/bind";
import QuestionList from "../QuestionList/QuestionList";
import { TAnswer } from "@/types/mbtiTest";
import { MBTI_QUESTION_LIST } from "@/constants/question";

const cx = classNames.bind(styles);

const MBTITest = () => {
  const [answerList, setAnswerList] = useState<TAnswer[] | null>(null);

  const calculateMBTI = useCallback(() => {
    if (!answerList) return;

    let scores: { [key: string]: number } = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };

    MBTI_QUESTION_LIST.forEach((question, index) => {
      const answer = answerList[index];

      switch (answer) {
        case "매우 아니다":
          scores[question.disagree] += 2;
          break;
        case "아니다":
          scores[question.disagree] += 1;
          break;
        case "보통이다":
          break;
        case "그렇다":
          scores[question.agree] += 1;
          break;
        case "매우 그렇다":
          scores[question.agree] += 2;
          break;
        default:
          break;
      }
    });

    const mbti = [
      scores["E"] >= scores["I"] ? "E" : "I",
      scores["S"] >= scores["N"] ? "N" : "S",
      scores["F"] >= scores["T"] ? "F" : "T",
      scores["P"] >= scores["J"] ? "P" : "J",
    ];

    return mbti.join("");
  }, [answerList]);

  const resetTest = () => {
    setAnswerList(null);
  };

  return (
    <div className={cx("container")}>
      {answerList === null ? (
        <QuestionList setAnswerList={setAnswerList} />
      ) : (
        <div className={cx("result-container")}>
          <div className={cx("result")}>
            <div className={cx("sub-test")}>결과는?</div>
            <div>{calculateMBTI()}</div>
          </div>

          <button className={cx("reset-btn")} onClick={resetTest}>
            다시 하기
          </button>
        </div>
      )}
    </div>
  );
};

export default MBTITest;

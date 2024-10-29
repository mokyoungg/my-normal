"use client";

import { Dispatch, SetStateAction } from "react";
import styles from "./QuestionList.module.scss";
import classNames from "classnames/bind";
import QuestionListItem from "./QuestionListItem/QuestionListItem";
import { MBTI_QUESTION_LIST } from "@/constants/question";
import { useForm, FormProvider } from "react-hook-form";
import { TAnswer } from "@/types/mbtiTest";

const cx = classNames.bind(styles);

interface QuestionListProps {
  setAnswerList: Dispatch<SetStateAction<TAnswer[] | null>>;
}

const QuestionList = (props: QuestionListProps) => {
  const { setAnswerList } = props;

  const method = useForm();

  const { handleSubmit, control } = method;

  const onSubmit = (data: { [key: string]: TAnswer }) => {
    const valuesArray = Object.values(data);

    setAnswerList(valuesArray);
  };

  return (
    <FormProvider {...method}>
      <form className={cx("container")} onSubmit={handleSubmit(onSubmit)}>
        <ul className={cx("list")}>
          {MBTI_QUESTION_LIST.map((question) => (
            <li key={question.id}>
              <QuestionListItem
                id={question.id}
                text={question.text}
                control={control}
              />
            </li>
          ))}
        </ul>

        <button className={cx("submit-btn")}>결과보기</button>
      </form>
    </FormProvider>
  );
};

export default QuestionList;

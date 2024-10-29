import styles from "./QuestionListItem.module.scss";
import classNames from "classnames/bind";
import { TAnswer } from "@/types/mbtiTest";
import { useController } from "react-hook-form";
import { Control } from "react-hook-form";

const cx = classNames.bind(styles);

const answerArray: TAnswer[] = [
  "매우 아니다",
  "아니다",
  "보통이다",
  "그렇다",
  "매우 그렇다",
];

interface QuestionListItemProps {
  id: string;
  text: string;
  control: Control<any, any>;
}

const QuestionListItem = (props: QuestionListItemProps) => {
  const { id, text, control } = props;

  const { field } = useController({
    control,
    name: id,
    rules: { required: true },
  });

  const handleChange = (newValue: TAnswer) => {
    field.onChange(newValue);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("question-number")}>{id}</div>
      <div className={cx("question")}>{text}</div>

      <div className={cx("answer-list")}>
        {answerArray.map((answer) => (
          <div key={id + answer} className={cx("answer")}>
            <input
              id={answer}
              type="radio"
              name={`${id}_answer`}
              value={answer}
              onChange={() => handleChange(answer)}
            />
            <label htmlFor={`${id}_${answer}`}>{answer}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionListItem;

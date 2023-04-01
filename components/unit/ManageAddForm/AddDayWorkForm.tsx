import React, { Dispatch, SetStateAction, useState } from "react";
import { RiTodoFill } from "react-icons/ri";
import * as S from "./AddForm_style";

type Props = {
  setAddDayWorkIsOpen: Dispatch<SetStateAction<boolean>>;
};

const AddDayWorkForm = (props: Props) => {
  const submitForm = () => {
    console.log("서브밋");
    props.setAddDayWorkIsOpen((prev) => !prev);
  };

  const [radio, setRadio] = useState("green");

  const onClickRadio = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRadio(e.currentTarget.id);
  };

  return (
    <S.Form>
      <S.FormTitle>
        <RiTodoFill /> 할 일 입력
      </S.FormTitle>
      <S.RadioButtonBox>
        <S.RadioItem onClick={onClickRadio} id="green" radio={radio}>
          여유
        </S.RadioItem>
        <S.RadioItem onClick={onClickRadio} id="yellow" radio={radio}>
          중요
        </S.RadioItem>
        <S.RadioItem onClick={onClickRadio} id="red" radio={radio}>
          긴급
        </S.RadioItem>
      </S.RadioButtonBox>
      <S.Input placeholder="할 일"></S.Input>
      <S.ButtonBox>
        <S.BackButton
          onClick={() => {
            props.setAddDayWorkIsOpen((prev) => !prev);
          }}
        >
          뒤로
        </S.BackButton>
        <S.Button
          onClick={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          등록
        </S.Button>
      </S.ButtonBox>
    </S.Form>
  );
};

export default AddDayWorkForm;

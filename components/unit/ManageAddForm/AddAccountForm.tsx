import React, { Dispatch, SetStateAction, useState } from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import * as S from "./AddForm_style";

type Props = {
  setAddAccountIsOpen: Dispatch<SetStateAction<boolean>>;
};

const AddAccountForm = (props: Props) => {
  const submitForm = () => {
    console.log("서브밋");
    props.setAddAccountIsOpen((prev) => !prev);
  };

  const [radio, setRadio] = useState("red");

  const onClickRadio = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRadio(e.currentTarget.id);
  };

  return (
    <S.Form onSubmit={submitForm}>
      <S.FormTitle>
        {" "}
        <MdAccountBalanceWallet /> 가계부 입력
      </S.FormTitle>
      <S.RadioButtonBox>
        <S.RadioItem onClick={onClickRadio} id="green" radio={radio}>
          수입
        </S.RadioItem>
        <S.RadioItem onClick={onClickRadio} id="red" radio={radio}>
          지출
        </S.RadioItem>
      </S.RadioButtonBox>
      <S.Input placeholder="사용처" />
      <S.AmountInput>
        <S.Input type="number" placeholder="비용" />원
      </S.AmountInput>
      <S.Input placeholder="카테고리" />
      <S.ButtonBox>
        <S.BackButton
          onClick={() => {
            props.setAddAccountIsOpen((prev) => !prev);
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
          제출
        </S.Button>
      </S.ButtonBox>
    </S.Form>
  );
};

export default AddAccountForm;

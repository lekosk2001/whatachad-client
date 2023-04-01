import React, { useRef, useState } from "react";
import * as S from "./ScheduleUI_style";
type Props = { data: any };

const DayWorkUI = (props: Props) => {
  // useEffect로 최초 상태 데이터 요청

  const dayWork = props.data;
  const [check, setCheck] = useState(dayWork.status);

  const dayWorkColor = (color: string) => {
    if (color === "red") {
      return (
        <S.ListSide>
          <S.ListSubText>긴급</S.ListSubText>
          <S.Color style={{ background: "#e84749" }}></S.Color>
        </S.ListSide>
      );
    }
    if (color === "yellow") {
      return (
        <S.ListSide>
          <S.ListSubText>중요</S.ListSubText>
          <S.Color style={{ background: "#FFB02E" }}></S.Color>
        </S.ListSide>
      );
    }
    if (color === "green") {
      return (
        <S.ListSide>
          <S.ListSubText>여유</S.ListSubText>
          <S.Color style={{ background: "#8fd460" }}></S.Color>
        </S.ListSide>
      );
    }
  };

  const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.currentTarget.checked);
    // 이 후 체크할때마다 비동기 요청
  };

  const checkBoxInput = useRef<HTMLInputElement>(null);

  return (
    <S.InnerList key={dayWork.dayWorkId} disabled={check}>
      <S.ListSide
        onClick={() => {
          checkBoxInput.current?.click();
        }}
      >
        <S.CheckBoxArea>
          <S.CheckBox
            onClick={() => {
              checkBoxInput.current?.click();
            }}
            ref={checkBoxInput}
            onChange={onChangeCheck}
            type="checkbox"
            defaultChecked={dayWork.status}
          />
        </S.CheckBoxArea>
        <S.ListText>{dayWork.title}</S.ListText>
      </S.ListSide>
      {dayWorkColor(dayWork.color)}
    </S.InnerList>
  );
};

export default DayWorkUI;

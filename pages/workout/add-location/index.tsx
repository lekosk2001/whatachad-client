import PageTitle from "@/components/common/Page/PageTitle";
import React from "react";
import { AddLocationContainer } from "../../../components/unit/Workout/AddLocation/styles";
import Map from "@/components/unit/Workout/WorkoutMap";

type Props = {};

interface TextAreaProps {
  cols?: number;
  rows?: number;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ cols, rows }) => {
  return <textarea cols={cols} rows={rows} />;
};

const index = (props: Props) => {
  return (
    <AddLocationContainer>
      <PageTitle title="Workout" location="청주시 OO구 OO동" />
      <h1>운동시설을 추가합니다.</h1>
      <input
        type="text"
        placeholder="주소 (입력불가 / 아래 지도 마커선택 시, 위도경도 정보를 통해 주소를 불러옴)"
      />

      <div>
        Map component
        <Map latitude={123} longitude={23} />
      </div>

      <select id="facility-select">
        <option value="">종류 선택 (셀렉터)</option>
        <option value="gym">Gym</option>
        <option value="playground">Playground</option>
        <option value="other">Other</option>
      </select>
      <TextArea cols={30} rows={10} placeholder="설명..." />

      <button>시설 등록</button>
    </AddLocationContainer>
  );
};

export default index;

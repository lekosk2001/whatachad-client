import PageTitle from "@/components/common/Page/PageTitle";
import React from "react";
import { MapIcon, SubHeader, WorkoutListContainer } from "./styles";
import { GrMapLocation } from "react-icons/gr";
import FacilityItem from "@/components/unit/WorkoutItem";
import { Facility } from "@/types/workout";

const dummyFacilities: Facility[] = [
  {
    id: 1,
    name: "강남 스포애니",
    type: "헬스장",
    address: "강남구 역삼동",
  },
  {
    id: 2,
    name: "논현 스포애니",
    type: "놀이터",
    address: "강남구 논현동",
  },
  {
    id: 3,
    name: "신사 공원",
    type: "공원",
    address: "강남구 역삼동",
  },
  {
    id: 4,
    name: "압구정 스포애니",
    type: "헬스장",
    address: "강남구 논현동",
  },

  {
    id: 5,
    name: "논현 스포애니",
    type: "놀이터",
    address: "강남구 논현동",
  },
  {
    id: 6,
    name: "신사 공원",
    type: "공원",
    address: "강남구 역삼동",
  },
  {
    id: 7,
    name: "압구정 스포애니",
    type: "헬스장",
    address: "강남구 논현동",
  },
  {
    id: 8,
    name: "강남 스포애니",
    type: "헬스장",
    address: "강남구 역삼동",
  },
];

const index = () => {
  return (
    <div>
      <SubHeader>
        <PageTitle title="Workout" location="청주시 OO구 OO동" />
        <MapIcon>
          <GrMapLocation size={24} />
        </MapIcon>
      </SubHeader>
      <WorkoutListContainer>
        {dummyFacilities.map((facility: Facility) => {
          return <FacilityItem key={facility.id} facility={facility} />;
        })}
      </WorkoutListContainer>
    </div>
  );
};

export default index;

import { RoundedMenuIcon } from "@/components/common/Layout/NavigationTab/styles";
import Image from "next/image";
import React from "react";
import {
  WorkoutDetailContainer,
  WorkoutImageContainer,
  WorkoutInfo,
  WorkoutItemContainr,
  WorkoutType,
} from "./styles";
import { Facility } from "@/types/workout";

interface FacilityItemProps {
  facility: Facility;
}

const WorkoutItem = ({ facility }: FacilityItemProps) => {
  return (
    <WorkoutItemContainr>
      <WorkoutImageContainer>
        <Image
          src="https://picsum.photos/200/300"
          alt="Workout"
          className="WorkoutImg"
          layout="fill"
          objectFit="cover"
        />
      </WorkoutImageContainer>
      <WorkoutDetailContainer>
        <p>{facility.name}</p>
        <WorkoutInfo>
          <RoundedMenuIcon style={{ background: "#666666" }} />
          <h3>{facility.address}</h3>
          <WorkoutType>
            <span>{facility.type}</span>
            <span>4km</span>
          </WorkoutType>
        </WorkoutInfo>
      </WorkoutDetailContainer>
    </WorkoutItemContainr>
  );
};

export default WorkoutItem;

import React from "react";
import { RoundedMenuIcon, SingleTab, SingleTabLink } from "./styles";
import Link from "next/link";

interface TabProps {
  text: string;
  path: string;
  icon: JSX.Element;
}

const Tab = ({ text, path, icon }: TabProps) => {
  return (
    <SingleTab>
      <Link href={path}>
        <SingleTabLink>
          <RoundedMenuIcon>{icon}</RoundedMenuIcon>
          {text}
        </SingleTabLink>
      </Link>
    </SingleTab>
  );
};

export default Tab;

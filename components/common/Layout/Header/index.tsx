import React from "react";
import {
  HeaderContainer,
  Logo,
  SearchIcon,
  SearchTab,
  UserAuth,
} from "./styles";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Link href="/">What a Chad</Link>
      </Logo>
      {/* <!-- Search bar --> */}
      <SearchTab>
        <SearchIcon>
          <FiSearch />
        </SearchIcon>
        <input type="text" placeholder="내 주변 운동시설 검색" />
      </SearchTab>

      {/* <!-- Login and Sign up tabs --> */}
      <UserAuth>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </li>
      </UserAuth>
    </HeaderContainer>
  );
};

export default Header;

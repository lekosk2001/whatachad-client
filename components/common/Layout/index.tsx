import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./NavigationTab";
import * as S from "./styles";

type Props = {
  children: JSX.Element;
};

const Layout = (props: Props) => {
  return (
    <S.LayoutStyle>
      <Header></Header>
      <S.Middle>
        <Navigation></Navigation>
        <S.contents>{props.children}</S.contents>
      </S.Middle>
      <Footer></Footer>
    </S.LayoutStyle>
  );
};

export default Layout;

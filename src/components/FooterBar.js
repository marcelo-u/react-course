import react from "react";
import { FooterBarStyled, PStyled } from "../styles/footerBar.styled";

const FooterBar = ({ data }) => (
  <FooterBarStyled>
    <PStyled>{data}</PStyled>
  </FooterBarStyled>
);

export default FooterBar;

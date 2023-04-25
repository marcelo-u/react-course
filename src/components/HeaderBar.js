import react from "react";
import { HeaderBarStyled } from "../styles/headerBar.styled";

const HeaderBar = ({ data }) => (
  <HeaderBarStyled>
    <p>{data}</p>
  </HeaderBarStyled>
);

export default HeaderBar;

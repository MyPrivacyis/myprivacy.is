import styled from "styled-components";

import Hero from "../components/hero";

//Styled components
const Main = styled.main`
  width: 100%;
  padding: 144px 24px;

  @media (max-width: 992px) {
    padding: 48px 24px;
  }
`;

export default function Home() {
  return (
    <>
      <Hero />
      <Main></Main>
    </>
  );
}

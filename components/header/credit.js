import styled from "styled-components";

//Styled Compoenents
const CreditContainer = styled.a`
  height: 40px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.panel};
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  color: ${(props) => props.theme.bodyText};

  &:hover {
    background-color: ${(props) => props.theme.panelHover};
    transition: background-color 0.2s ease;
  }

  @media (max-width: 992px) {
    display: none;
  }

  span {
    color: ${(props) => props.theme.colors.red};
    margin-right: 4px;
  }
`;

export default function Credit() {
  return (
    <CreditContainer href="https://twitter.com/gsigurdarson" target="_blank">
      <span>❤️</span> Donate
    </CreditContainer>
  );
}

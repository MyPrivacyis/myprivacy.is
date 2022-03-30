import styled from "styled-components";

import Credit from "./credit";

//Styled Compoenents
const Header = styled.header`
  height: 80px;
  padding: 0 48px;
  width: 100%;
  backdrop-filter: saturate(180%) blur(48px);
  -webkit-backdrop-filter: saturate(180%) blur(48px);
  z-index: 99;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  @media (max-width: 992px) {
    padding: 0 24px;
  }
`;

const HeaderContainer = styled.header`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.titleColor};
`;

const ThemeSwitcher = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.panel};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.panelHover};
    transition: background-color 0.2s ease;

    svg {
      transform: rotate(360deg);
      fill: ${(props) => props.theme.toggle};
      stroke: ${(props) => props.theme.toggle};
    }
  }

  svg {
    stroke: ${(props) => props.theme.bodyText};
    transform: rotate(0);
    transition: 0.4s ease;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export default function HeaderMain({ themeToggler, isDarkTheme }) {
  return (
    <Header>
      <HeaderContainer>
        <Logo>Resource.wtf</Logo>
        <Actions>
          <Credit />
          <ThemeSwitcher onClick={() => themeToggler()}>
            {isDarkTheme ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 1V3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 21V23"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.21997 4.21997L5.63997 5.63997"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3601 18.3601L19.7801 19.7801"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 12H3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12H23"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.21997 19.7801L5.63997 18.3601"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3601 5.63997L19.7801 4.21997"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2442 15.1387C17.3782 15.2233 18.5078 15.0646 19.561 14.6836C19.2796 15.4612 18.878 16.1944 18.3672 16.8551C17.4377 18.0572 16.1851 18.9698 14.756 19.486C13.3269 20.0022 11.7803 20.1008 10.2972 19.7701C8.81406 19.4394 7.45582 18.6931 6.38136 17.6187C5.30689 16.5442 4.56066 15.186 4.22996 13.7029C3.89927 12.2198 3.99779 10.6732 4.51401 9.24402C5.03023 7.81488 5.94278 6.5623 7.1449 5.63287C7.80562 5.12202 8.5388 4.72041 9.31641 4.43906C8.9354 5.49218 8.77676 6.62181 8.86132 7.75578C9.00382 9.6666 9.82742 11.4628 11.1823 12.8177C12.5372 14.1726 14.3334 14.9962 16.2442 15.1387Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </ThemeSwitcher>
        </Actions>
      </HeaderContainer>
    </Header>
  );
}

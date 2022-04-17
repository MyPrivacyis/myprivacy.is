import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Link from "next/link";

const NavigatorContainer = styled.ul`
  position: fixed;
  width: 624px;
  bottom: 24px;
  left: 50%;
  margin-left: -312px;
  background: ${(props) => props.theme.navigator};
  border: 1px solid ${(props) => props.theme.navigatorBorder};
  border-radius: 16px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: saturate(180%) blur(16px);
  -webkit-backdrop-filter: saturate(180%) blur(16px);
  z-index: 98;
  box-shadow: 0px 0px 40px 0px ${(props) => props.theme.shadow},
    0px 0px 100px 0px ${(props) => props.theme.shadow};
  box-shadow: ;
  padding: 8px 16px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.bodyText};
  }

  li {
    cursor: pointer;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    margin: 0 4px;
    border-radius: 8px;
    color: ${(props) => props.theme.bodyText};

    &:hover {
      background: ${(props) => props.theme.panelHover};
      transition: background-color 0.2s ease;
    }

    span {
      margin-right: 4px;
      color: ${(props) => props.theme.colors.red};
    }
  }

  @media (max-width: 992px) {
    left: 16px;
    right: 16px;
    oveflow-x: scroll;
    margin-left: 0;
    width: calc(100% - 32px);
    padding: 8px 0 8px 16px;
    display: none;
    overflow: hidden;
    justify-content: flex-start;
  }
`;

const Spacer = styled.li`
  height: 32px !important;
  width: 1px !important;
  padding: 0 !important;
  background: #ffffff12 !important;
`;

export default function navigator() {
  return (
    <>
      <NavigatorContainer>
        <li>
          <AnchorLink offset="100" href="#VPN">
            VPN
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset="100" href="#Browser">
            Browser
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset="100" href="#Email">
            Email
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset="100" href="#Messenger">
            Messenger
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset="100" href="#DNS">
            DNS
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset="100" href="#Search">
            Search
          </AnchorLink>
        </li>

        <Spacer />
        <li>
          <Link href="/donate">
            <a>
              <span>❤️</span> Donate
            </a>
          </Link>
        </li>
      </NavigatorContainer>
    </>
  );
}

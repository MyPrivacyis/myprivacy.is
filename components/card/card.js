import styled from "styled-components";
var dayjs = require("dayjs");

//Styled components
const CardGrid = styled.div`
  max-width: 576px;
  margin: 0 auto 148px auto;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.bodyText};
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const Spacer = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 1px;
  background-color: ${(props) => props.theme.bodyText};
  opacity: 0.12;
  margin-bottom: 24px;
`;

const SectionTitle = styled.p`
  color: ${(props) => props.theme.title};
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
  font-weight: 700;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-bottom: 24px;
`;

const CardLink = styled.a`
  text-decoration: none;
`;

const Card = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 16px 16px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.panel};
  border: 0.5px solid ${(props) => props.theme.border};

  &:hover {
    background-color: ${(props) => props.theme.panelHover};
    transition: background-color 0.2s ease;
  }
`;

const Tool = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 24px;
    width: 24px;
    margin-right: 16px;
    border-radius: 6px;
  }

  h3 {
    font-size: 16px;
    color: ${(props) => props.theme.bodyText};
    font-weight: 400;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OpenSource = styled.div`
  height: 24px;
  font-size: 14px;
  background: ${(props) => props.theme.tag};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px 1px 8px;
  color: ${(props) => props.theme.bodyText};
  border-radius: 4px;
  line-height: 1.5;
  margin-left: 8px;
`;

const Discount = styled.a`
  display: flex;
  font-size: 14px;
  align-items: center;
  padding: 12px;
  margin-top: 16px;
  background-color: #3291ff24;
  border: 0.5px solid #3291ff;
  color: #3291ff;
  border-radius: 8px;
  text-decoration: none;

  svg {
    stroke: #3291ff;
    margin-right: 8px;
  }
`;

const Devices = styled.div`
  display: flex;
  align-items: center;
`;

const DeviceActive = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 8px;
`;
const DeviceDisabled = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  opacity: 0.24;
`;

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`;

const Article = styled.a`
  cursor: pointer;
  display: flex;
  font-size: 14px;
  align-items: center;
  padding: 16px;
  margin-top: 16px;
  background-color: ${(props) => props.theme.panel};
  border: 0.5px solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.bodyText};
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.panelHover};
    transition: background-color 0.2s ease;
  }

  svg {
    stroke: ${(props) => props.theme.titleColor};
    margin-right: 8px;
  }
`;

export default function CardFile({ tools }) {
  return (
    <CardGrid>
      <CardTitle>Use a VPN</CardTitle>
      <Description>
        A VPN, or virtual private network, is a tool to secure your internet
        connection. It makes sure that the data you are sending and receiving is
        encrypted, preventing your ISP or any malicious actor from seeing what
        you do. You should use a VPN provider that you trust to not harvest and
        re-sell your data. <br />
        <br />
        The best VPNs often charge a monthly subscription - this is a good thing
        because it means their business model is not reliant upon reselling your
        data to advertisers.
      </Description>
      <Spacer />
      <SectionTitle>Tools</SectionTitle>
      <CardContainer>
        {tools.map((data) => (
          <CardLink
            key={data.id}
            href={data.properties.Link.url + "?utm_source=myprivacy.is"}
            target="_blank"
          >
            <Card>
              <Info>
                <Tool>
                  <img
                    src={data.icon.file.url}
                    alt={data.properties.Name.title[0].plain_text}
                  />
                  <h3>{data.properties.Name.title[0].plain_text}</h3>
                  {data.properties.Open_source.select.name === "Yes" ? (
                    <OpenSource>Open source</OpenSource>
                  ) : null}
                </Tool>
                <Devices>
                  {data.properties.android.select.name === "Yes" ? (
                    <DeviceActive
                      src="/img/platforms/android.png"
                      alt="Android"
                    />
                  ) : (
                    <DeviceDisabled
                      src="/img/platforms/android.png"
                      alt="Android"
                    />
                  )}
                  {data.properties.ios.select.name === "Yes" ? (
                    <DeviceActive src="/img/platforms/ios.png" alt="iOS" />
                  ) : (
                    <DeviceDisabled src="/img/platforms/ios.png" alt="iOS" />
                  )}
                  {data.properties.macos.select.name === "Yes" ? (
                    <DeviceActive src="/img/platforms/macos.png" alt="macOS" />
                  ) : (
                    <DeviceDisabled
                      src="/img/platforms/macos.png"
                      alt="macOS"
                    />
                  )}
                  {data.properties.linux.select.name === "Yes" ? (
                    <DeviceActive src="/img/platforms/linux.png" alt="Linux" />
                  ) : (
                    <DeviceDisabled
                      src="/img/platforms/linux.png"
                      alt="Linux"
                    />
                  )}
                  {data.properties.windows.select.name === "Yes" ? (
                    <DeviceActive
                      src="/img/platforms/windows.png"
                      alt="Windows"
                    />
                  ) : (
                    <DeviceDisabled
                      src="/img/platforms/windows.png"
                      alt="Windows"
                    />
                  )}
                </Devices>
              </Info>
              {data.properties.Discount.select.name === "Yes" ? (
                <Discount
                  href={data.properties.Discount_link.url}
                  target="_blank"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66663 8.66666C6.95293 9.04942 7.3182 9.36612 7.73766 9.59529C8.15712 9.82446 8.62096 9.96074 9.09773 9.99489C9.57449 10.029 10.053 9.96024 10.5009 9.79318C10.9487 9.62613 11.3554 9.36471 11.6933 9.02666L13.6933 7.02666C14.3005 6.39799 14.6365 5.55598 14.6289 4.68199C14.6213 3.808 14.2707 2.97196 13.6527 2.35394C13.0347 1.73591 12.1986 1.38535 11.3246 1.37775C10.4506 1.37016 9.60863 1.70614 8.97996 2.31333L7.83329 3.45333"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.33334 7.33332C9.04704 6.95057 8.68177 6.63387 8.26231 6.40469C7.84285 6.17552 7.37901 6.03924 6.90224 6.0051C6.42548 5.97095 5.94695 6.03974 5.49911 6.2068C5.05127 6.37386 4.6446 6.63527 4.30668 6.97332L2.30668 8.97332C1.69948 9.60199 1.3635 10.444 1.3711 11.318C1.37869 12.192 1.72926 13.028 2.34728 13.646C2.96531 14.2641 3.80135 14.6146 4.67534 14.6222C5.54933 14.6298 6.39134 14.2938 7.02001 13.6867L8.16001 12.5467"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {data.properties.Discount_text.rich_text[0].plain_text}
                </Discount>
              ) : null}
            </Card>
          </CardLink>
        ))}
      </CardContainer>
      <Spacer />
      <SectionTitle>Resources</SectionTitle>

      <ArticleContainer>
        <Article>
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66663 8.66666C6.95293 9.04942 7.3182 9.36612 7.73766 9.59529C8.15712 9.82446 8.62096 9.96074 9.09773 9.99489C9.57449 10.029 10.053 9.96024 10.5009 9.79318C10.9487 9.62613 11.3554 9.36471 11.6933 9.02666L13.6933 7.02666C14.3005 6.39799 14.6365 5.55598 14.6289 4.68199C14.6213 3.808 14.2707 2.97196 13.6527 2.35394C13.0347 1.73591 12.1986 1.38535 11.3246 1.37775C10.4506 1.37016 9.60863 1.70614 8.97996 2.31333L7.83329 3.45333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.33334 7.33332C9.04704 6.95057 8.68177 6.63387 8.26231 6.40469C7.84285 6.17552 7.37901 6.03924 6.90224 6.0051C6.42548 5.97095 5.94695 6.03974 5.49911 6.2068C5.05127 6.37386 4.6446 6.63527 4.30668 6.97332L2.30668 8.97332C1.69948 9.60199 1.3635 10.444 1.3711 11.318C1.37869 12.192 1.72926 13.028 2.34728 13.646C2.96531 14.2641 3.80135 14.6146 4.67534 14.6222C5.54933 14.6298 6.39134 14.2938 7.02001 13.6867L8.16001 12.5467"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Title of an article
        </Article>
      </ArticleContainer>
    </CardGrid>
  );
}

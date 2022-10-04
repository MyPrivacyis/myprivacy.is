import styled from 'styled-components';
import Image from 'next/image';

//Components
import AndroidIcon from './icons/android';
import IosIcon from './icons/ios';
import MacosIcon from './icons/macos';
import LinuxIcon from './icons/linux';
import WindowsIcon from './icons/windows';
import LinkIcon from './icons/link';

//Styled components
const Section = styled.section`
  max-width: 576px;
  margin: 0 auto 148px auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.bodyText};
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
  white-space: pre-line;
`;

const Spacer = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 1px;
  background-color: ${({ theme }) => theme.colors.bodyText};
  opacity: 0.12;
  margin-bottom: 24px;
`;

const SectionTitle = styled.p`
  color: ${({ theme }) => theme.colors.titleColor};
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
  background-color: ${({ theme }) => theme.colors.panel};
  border: 0.5px solid ${({ theme }) => theme.colors.border};

  &:hover {
    background-color: ${({ theme }) => theme.colors.panelHover};
    transition: background-color 0.2s ease;
  }
`;

const Tool = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 24px;
    width: 24px;
    border-radius: 4px;
  }

  h3 {
    margin-left: 16px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.titleColor};
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
  background: ${({ theme }) => theme.colors.tag};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px 1px 8px;
  color: ${({ theme }) => theme.colors.bodyText};
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
  background-color: #55acee24;
  border: 0.5px solid #55acee;
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

  @media (max-width: 992px) {
    display: none;
  }
`;

const DeviceActive = styled.span`
  width: 24px;
  height: 24px;
  margin-left: 8px;

  svg {
    fill: ${({ theme }) => theme.colors.bodyText};
    width: 100%;
    height: 100%;
  }
`;

const DeviceDisabled = styled.span`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  opacity: 0.24;

  svg {
    fill: ${({ theme }) => theme.colors.bodyText};
    width: 100%;
    height: 100%;
  }
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
  background-color: ${({ theme }) => theme.colors.panel};
  border: 0.5px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.bodyText};
  border-radius: 16px;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.panelHover};
    transition: background-color 0.2s ease;
  }

  svg {
    stroke: ${({ theme }) => theme.colors.titleColor};
    margin-right: 8px;
  }
`;

export default function CardFile({ id, title, description, tools, articles }) {
  return (
    <Section id={id}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Spacer />
      <SectionTitle>Tools</SectionTitle>
      <CardContainer>
        {tools.map((data) => (
          <CardLink key={data.name} href={data.href} target='_blank'>
            <Card>
              <Info>
                <Tool>
                  <Image
                    src={data.icon}
                    alt={data.name}
                    width={24}
                    height={24}
                  />
                  <h3>{data.name}</h3>
                  {data.openSource === true ? (
                    <OpenSource>Open source</OpenSource>
                  ) : null}
                </Tool>
                <Devices>
                  {data.android === true ? (
                    <DeviceActive>
                      <AndroidIcon />
                    </DeviceActive>
                  ) : (
                    <DeviceDisabled>
                      <AndroidIcon />
                    </DeviceDisabled>
                  )}
                  {data.ios === true ? (
                    <DeviceActive>
                      <IosIcon />
                    </DeviceActive>
                  ) : (
                    <DeviceDisabled>
                      <IosIcon />
                    </DeviceDisabled>
                  )}
                  {data.macos === true ? (
                    <DeviceActive>
                      <MacosIcon />
                    </DeviceActive>
                  ) : (
                    <DeviceDisabled>
                      <MacosIcon />
                    </DeviceDisabled>
                  )}
                  {data.linux === true ? (
                    <DeviceActive>
                      <LinuxIcon />
                    </DeviceActive>
                  ) : (
                    <DeviceDisabled>
                      <LinuxIcon />
                    </DeviceDisabled>
                  )}
                  {data.windows === true ? (
                    <DeviceActive>
                      <WindowsIcon />
                    </DeviceActive>
                  ) : (
                    <DeviceDisabled>
                      <WindowsIcon />
                    </DeviceDisabled>
                  )}
                </Devices>
              </Info>
            </Card>
          </CardLink>
        ))}
      </CardContainer>
      <Spacer />
      <SectionTitle>Resources</SectionTitle>

      <ArticleContainer>
        {articles.map((data) => (
          <Article key={data.key} href={data.href} target='_blank'>
            <LinkIcon />
            {data.title}
          </Article>
        ))}
      </ArticleContainer>
    </Section>
  );
}

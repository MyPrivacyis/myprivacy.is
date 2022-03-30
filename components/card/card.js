import styled from "styled-components";
var dayjs = require("dayjs");

//Styled components
const CardGrid = styled.div`
  max-width: 576px;
  display: grid;
  grid-template-column: 1fr;
  gap: 8px;
  margin: 0 auto;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
`;

const Card = styled.a`
  display: block;
  position: relative;
  padding: 16px 16px 16px 16px;
  border-radius: 16px;
  text-decoration: none;
  background-color: ${(props) => props.theme.panel};
  border: 0.5px solid ${(props) => props.theme.border};

  h3 {
    color: ${(props) => props.theme.titleColor};
    line-height: 1.4;
    margin-bottom: 8px;
    margin-right: 40px;
  }

  p {
    color: ${(props) => props.theme.bodyText};
    font-size: 14px;
    line-height: 1.5;
  }

  svg {
    fill: ${(props) => props.theme.bodyText};
    position: absolute;
    top: 16px;
    right: 16px;
    transition: 0.1s ease-out;
  }

  &:hover {
    background-color: ${(props) => props.theme.panelHover};
    transition: background-color 0.2s ease;

    svg {
      fill: ${(props) => props.theme.bodyText};
      position: absolute;
      top: 12px;
      right: 12px;
    }
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Tag = styled.div`
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
`;

const Spacer = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 4px;
  margin: 0 16px;
  background-color: ${(props) => props.theme.bodyText};
`;

export default function CardFile({ resources }) {
  return (
    <CardGrid>
      <CardTitle>New</CardTitle>
      {resources.map((resource) => (
        <Card
          key={resource.id}
          href={resource.properties.Link.url}
          target="_blank"
        >
          <h3>{resource.properties.Name.title[0].plain_text}</h3>
          <Info>
            <p>
              {dayjs(resource.properties.Assign.last_edited_time).format(
                "MMMM D, YYYY"
              )}
            </p>
            <Spacer />
            <Tag>{resource.properties.Tag.select.name}</Tag>
          </Info>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.9241 6.61722C17.8757 6.50014 17.804 6.3904 17.7092 6.29502C17.7078 6.2936 17.7064 6.29219 17.705 6.29078C17.5242 6.11106 17.2751 6 17 6H16.9998H7C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8H14.5858L6.29289 16.2929C5.90237 16.6834 5.90237 17.3166 6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.70711 17.7071L16 9.41421V17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17V7.00069V7C18 6.999 18 6.998 18 6.997C17.9996 6.8625 17.9727 6.73425 17.9241 6.61722Z"
              fillOpacity="0.64"
            />
          </svg>
        </Card>
      ))}
    </CardGrid>
  );
}

import styled from 'styled-components';

import Hero from '../components/hero';

//Styled components
const Main = styled.main`
  padding: 148px 24px;
  max-width: 576px;
  margin: 0 auto 148px auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;

  span {
    margin-left: 8px;
    color: ${(props) => props.theme.colors.red};
  }
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

const CryptoTitle = styled.p`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.navigatorBorder};
  padding: 8px 16px;
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.bodyText};
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.navigatorBorder};
  }
`;

export default function Home() {
  return (
    <>
      <Main>
        <Title>
          Donation<span>❤️</span>
        </Title>
        <Description>
          All donations are welcomed and voluntary. Donations go towards keeping
          the website updated. Long nights need some coffee...
        </Description>
        <Spacer />
        <CryptoTitle>Bitcoin (btc)</CryptoTitle>
        <Input
          type='text'
          value='bc1qpj0hjygujakvhgl9xhrczyy02ak2ld8uupkxuq'
          readOnly
        />
        <CryptoTitle>Ethereum (eth)</CryptoTitle>
        <Input
          type='text'
          value='0xCC5dfAd0b7000C253daFCc31Df133F9517b25C44'
          readOnly
        />
        <CryptoTitle>Cardano (ada)</CryptoTitle>
        <Input
          type='text'
          value='addr1qy02tequjapxuhjgz54vzu4l07raan4cv6kdzukuv5y5khpfnsjrg4zukdgq9j5rtnkscv29mj7pd903p9rgudwdm45sz3x893'
          readOnly
        />
        <CryptoTitle>Dogecoin</CryptoTitle>
        <Input
          type='text'
          value='D8vLbjEvfPqBVVw1hj1w1pWM2HGhZUyb5q'
          readOnly
        />
      </Main>
    </>
  );
}

import styled from 'styled-components';

//Styled Compoenents
const Hero = styled.header`
  padding: 96px 24px;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 96px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 2.4em;
    color: ${({ theme }) => theme.colors.titleColor};
    margin-bottom: 16px;
    line-height: 1.4em;
  }

  p {
    color: ${({ theme }) => theme.colors.bodyText};
    line-height: 1.5em;
    margin-bottom: 8px;
  }

  span {
    color: #55acee;
  }

  img {
    width: 100%;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export default function HeroComponent() {
  return (
    <Hero>
      <div>
        <h1>Take back control of your data and your privacy!</h1>
        <p>
          “Arguing that you don't care about the right to privacy because you
          have nothing to hide is no different than saying you don't care about
          free speech because you have nothing to say.”
        </p>
        <span>- Edward Snowden</span>
      </div>
      <img src='/img/hero.png' alt='Privacy image' />
    </Hero>
  );
}

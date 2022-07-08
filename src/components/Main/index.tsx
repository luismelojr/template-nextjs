import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um atomo e Template NextJs escrito ao lado"
    />
    <S.Title>NextJS Avançado</S.Title>
    <S.Description>
      Typescript, ReactJs, NextJS, Storybook, Jest, Styled Components
    </S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor sentado de frente para uma tela com codigo"
    />
  </S.Wrapper>
)

export default Main

import * as S from './styles'

const Main = ({
  title = 'NextJS Avançado',
  description = 'Typescript, ReactJs, NextJS, Storybook, Jest, Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um atomo e Template NextJs escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor sentado de frente para uma tela com codigo"
    />
  </S.Wrapper>
)

export default Main

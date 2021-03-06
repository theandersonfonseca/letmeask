import styled, { css } from 'styled-components'

import * as QuestionStyles from '../../components/Question/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${QuestionStyles.Wrapper}:not(:first-child) {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    background: ${theme.colors.textWhite};
  `}
`

export const Content = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};

    button {
      height: 4rem;
      width: auto;
    }

    @media (max-width: 600px) {
      flex-direction: column;
    }
  `}
`

export const LogoImg = styled.img`
  ${({ theme }) => css`
    max-height: 4.5rem;

    @media (max-width: 600px) {
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 ${theme.spacings.xsmall};
  `}
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0 ${theme.spacings.small};
    display: flex;
    align-items: center;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: 'Poppins', sans-serif;
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.text};
  `}
`

export const QuestionCount = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
    background: ${theme.colors.darkPink};
    border-radius: 999rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    font-weight: 500;
    font-size: ${theme.font.sizes.small};
  `}
`

export const Questions = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`

export const CheckQuestion = styled.button``

export const CheckQuestionImg = styled.img``

export const AnswerQuestion = styled.button`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
  `}
`

export const AnswerQuestionImg = styled.img``

export const DeleteQuestion = styled.button`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
  `}
`

export const DeleteQuestionImg = styled.img``

export const EmptyQuestionsWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.huge};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
`

export const EmptyQuestionsImg = styled.img``

export const EmptyQuestionsTitle = styled.h2`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`
export const EmptyQuestionsText = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    color: ${theme.colors.text};
  `}
`

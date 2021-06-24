import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.04);
    padding: ${theme.spacings.small};
  `}
`;

export const Content = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${theme.spacings.small};
  `}
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
`;

export const AuthorName = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const ButtonsWrapper = styled.div`
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;

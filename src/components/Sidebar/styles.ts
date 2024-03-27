import styled, { css } from 'styled-components'

interface ContainerProps {
  isMenuOpen: boolean
}

export const Container = styled.aside<ContainerProps>`
  background-color: ${(props) => props.theme.colors.red};
  //
  //
  ${({ isMenuOpen }) => {
    return isMenuOpen
      ? css`
          width: 16.3rem;
        `
      : css`
          width: 7.75rem;
          color: transparent;
        `
  }}

  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: all 0.4s ease-out;

  @media screen and (max-width: 720px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    width: 100%;
    height: 5rem;
    overflow-y: auto;
    padding: 0 0;
  }
`

export const Button = styled.button`
  background: transparent;
  width: 100%;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 720px) {
    display: none;
  }
`

export const Nav = styled.nav`
  flex: 1;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 720px) {
    height: 100%;
  }

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    list-style-type: none;
    @media screen and (max-width: 720px) {
      flex-direction: row;
      align-items: center;
    }
  }

  li {
    a {
      width: fit-content;
      position: relative;
      padding-left: 1.875rem;
      padding-right: 1.875rem;

      display: flex;
      align-items: center;
      gap: 2rem;
      svg {
        fill: ${({ theme }) => theme.colors.white};
        width: 4rem;
        height: 4rem;
        transition: fill 0.3s;
      }

      span {
        font-size: 1rem;
        font-weight: 500;
        transition: color 0.3s;
      }
      &.active {
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          bottom: 0;
          transform: translateY(-50%);
          background-color: ${({ theme }) => theme.colors.yellow};
          width: 5px;
          height: calc(100% + 10px);
          border-radius: 0 5px 5px 0;
        }

        svg {
          fill: ${({ theme }) => theme.colors.yellow};
        }

        span {
          color: ${({ theme }) => theme.colors.yellow};
        }
      }
    }
    @media screen and (max-width: 720px) {
      a {
        flex-direction: column;
        padding: 0rem;
        svg {
          width: 3.25rem;
          height: 3.25rem;
        }
        span {
          display: none;
        }
        &.active {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            transform: translateY(630%);
            width: calc(100%);
            height: 5px;
            border-radius: 10px 10px 0 0;
            transition: all 0.4s linear;
          }
        }
      }
    }
  }
`

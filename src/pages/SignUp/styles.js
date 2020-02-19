import styled from 'styled-components';

export const BtnUser = styled.button`
  font-size: 0.8rem;
  border-radius: 10rem;
  padding: 0.75rem 1rem;
  &:focus,
  &:active {
    outline: 0;
  }
`;

export const BtnGoogle = styled(BtnUser)`
  color: #fff;
  background-color: #ea4335;
  border-color: #fff;

  &:hover {
    color: #fff;
    background: #e12717;
    border-color: #e6e6e6;
  }

  &:active {
    color: #fff;
    background-color: #d62516;
    border-color: #dfdfdf;
  }
`;

export const BtnFacebook = styled(BtnUser)`
  color: #fff;
  background-color: #3b5998;
  border-color: #fff;

  &:hover {
    color: #fff;
    background: #30497c;
    border-color: #e6e6e6;
  }

  &:active {
    color: #fff;
    background-color: #2d4373;
    border-color: #dfdfdf;
  }
`;

import styled from '@emotion/styled';

const CardButton = styled.button`
  height: fit-content;
  width: fit-content;
  background-color: ${props => props.theme.colors.special};
  border-radius: 5px;
  padding: 2px 10px;
  margin-top: 1px;
  align-self: flex-end;
  margin-right: 2%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-weight: bold;
  font-size: 0.7rem;
  outline: none;
`;

export default CardButton;

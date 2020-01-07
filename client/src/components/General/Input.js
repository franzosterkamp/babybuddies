import styled from '@emotion/styled';

const Input = styled.input`
  width: 150px;
  height: 30px;
  border-radius: 8px;
  font-size: 0.9rem;
  outline: none;
`;

export const Form = styled.form`
  margin-bottom: 10px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const RateInput = styled.input`
  width: 30px;
  height: 30px;
  margin: 0px 5px;
  border: none;
  border-radius: 8px;
  color: black;
  outline: none;
  background: ${props => (props.active ? props.theme.colors.rate : props.theme.colors.special)};
`;

export const CameraInput = styled(Input)`
  width: 300px;
  font-size: 0.8rem;
`;

export default Input;

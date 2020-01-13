import styled from '@emotion/styled';

export const FilterSelect = styled.select`
  display: block;
  margin: 0 auto;
  margin-top: 5%;
  width: 80%;
  font-size: 1rem;
  border: solid 1px ${props => props.theme.colors.background};
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  font-size: 0.9rem;
  &:focus {
    border: 1px solid ${props => props.theme.colors.extra};
  }
  outline: none;
`;

export const FilterOption = styled.option`
  font-size: 0.8rem;
  margin: 0 auto;
`;

export const Select = styled.select`
  font-size: 0.8rem;
  display: block;
  margin-top: 3px;
  width: 100%;
  border: 1px solid black;
  border: solid 1px ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  &:focus {
    border: 1px solid ${props => props.theme.colors.extra};
  }
  outline: none;
`;

export const Option = styled.option`
  margin-top: 30px;
  font-size: 0.8rem;
  display: block;
`;

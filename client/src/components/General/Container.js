import styled from '@emotion/styled';

export const Rate = styled.div`
  margin-bottom: 15px;
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 10%;
`;

export const AddPlaceContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const RateContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 25px;
  margin-bottom: 5px;
  align-content: top;
`;

export const RateDetailContainer = styled(RateContainer)`
  display: ${props => (props.rateClicked ? 'block' : 'none')};
  margin: 30px;
  height: fit-content;
`;

export const PlacesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 200px;
  max-width: 300px;
  margin: 5px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.colors.primary};
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: 90%;
  margin: 20px 0 20px 0;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`;

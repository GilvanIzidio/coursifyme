import styled from 'styled-components/native';

type ButtonCicleWithIconProps = {
  color: string;
};

export const Container = styled.TouchableOpacity<ButtonCicleWithIconProps>`
  width: 50px;
  height: 50px;
  border-radius: 29px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
`;

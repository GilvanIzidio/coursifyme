import styled from 'styled-components/native';
import { TouchableOpacity as RNButton } from 'react-native';
import theme from '../../../styles/theme';

export const Container = styled(RNButton)`
  width: 216px;
  height: 44px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.orange};
`;

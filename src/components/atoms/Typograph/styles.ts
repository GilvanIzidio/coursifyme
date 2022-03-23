import styled from 'styled-components/native';
import { Text as RNText } from 'react-native';
import theme from '../../../styles/theme';

type TextProps = {
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  weight?: number;
};

export const Text = styled(RNText)<TextProps>`
  font-size: ${props => props.fontSize || theme.font.size}px;
  font-family: ${props => props.fontFamily || theme.font.family};
  color: ${props => props.color || theme.font.color};
  font-weight: ${props => props.weight || 500};
`;

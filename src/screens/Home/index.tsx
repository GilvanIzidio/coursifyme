import React, { useState } from 'react';
import TopBar from '../../components/molecules/TopBar';
import Typograph from '../../components/atoms/Typograph';
import theme from '../../styles/theme';
import SelectPicker from '../../components/atoms/SelectPicker';
import { Container, Content, ViewSelectOder } from './styles';

const Home = (): JSX.Element => {
  const [pickerValue, setPickerValue] = useState('');
  return (
    <Container>
      <TopBar />
      <Content>
        <ViewSelectOder>
          <Typograph color={theme.colors.gray100} size={18}>
            ORDENAR POR:
          </Typograph>
          <SelectPicker
            items={[
              { label: 'A-Z', key: 1, value: 'asc' },
              { label: 'Z-A', key: 2, value: 'desc' },
              { label: 'Mais visualizados', key: 3, value: 'asc1' },
              { label: 'Menos visualizados', key: 4, value: 'desc1' },
            ]}
            optionsProperties={{ key: 'key', name: 'label', value: 'value' }}
            value={pickerValue || ''}
            onChange={setPickerValue}
          />
        </ViewSelectOder>
      </Content>
    </Container>
  );
};

export default Home;

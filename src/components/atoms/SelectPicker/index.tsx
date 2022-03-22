import React, { useCallback, useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import theme from '../../../styles/theme';
import { Container } from './styles';

type Items = {
  key: string;
  name: string;
  value: string;
};

type Data = {
  [key: string]: any;
};

type SelectPickerProps = {
  onChange: (value: string) => void;
  items: Data[];
  optionsProperties: Items;
  value?: string;
};

const SelectPicker = ({
  items,
  optionsProperties,
  value,
  onChange,
}: SelectPickerProps): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);

  const clearValues = useCallback(() => {
    if (value === '') {
      setSelectedValue('');
    }
  }, [value]);

  const select = (itemValue: string, selected?: string): string => {
    if (itemValue === '') {
      return theme.colors.gray500;
    }
    return itemValue === selected ? theme.colors.black : theme.colors.gray500;
  };

  useEffect(() => {
    setSelectedValue(value);
    return () => {
      clearValues();
    };
  }, [value]);

  return (
    <Container>
      <Picker
        style={{ marginLeft: 5 }}
        mode="dropdown"
        dropdownIconColor={theme.colors.primary}
        dropdownIconRippleColor={theme.colors.white}
        selectedValue={selectedValue}
        onValueChange={itemValue => {
          setSelectedValue(itemValue);
          onChange(itemValue);
        }}
      >
        <Picker.Item
          style={{ color: 'black', backgroundColor: 'white', fontSize: 16 }}
          fontFamily={theme.font.family}
          label="Selecione"
          key="default"
          value=""
          color={theme.colors.gray500}
        />
        {items.map(item => (
          <Picker.Item
            style={{ color: 'black', backgroundColor: 'white', fontSize: 16 }}
            fontFamily={theme.font.family}
            label={item[optionsProperties.name]}
            value={item[optionsProperties.value]}
            key={item[optionsProperties.key]}
            color={select(item[optionsProperties.value], selectedValue)}
          />
        ))}
      </Picker>
    </Container>
  );
};

export default SelectPicker;

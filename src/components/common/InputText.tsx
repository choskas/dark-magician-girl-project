import React, { useEffect, useState } from "react";
import {
  Input,
  Span,
  Label,
  InputIcon,
  Autocomplete,
  List,
  ListName,
} from "../../styles/common/InputText";

interface InputTextProps {
  placeholder: string;
  value?: string;
  setValue?: Function;
  onChange: Function;
  width?: string;
  icon?: string;
  autoCompleteValues?: Array<any>;
}
const InputText = ({
  placeholder,
  value,
  onChange,
  width,
  icon,
  autoCompleteValues,
  setValue,
}: InputTextProps) => {
  const [namesArr, setNamesArr] = useState([]);
  const searchCard = (value: string) => {
    if (value.length > 3) {
      const card = autoCompleteValues.filter((item: any) => {
        return item.toLowerCase().includes(value.toLowerCase());
      });
      setNamesArr(card.slice(0, 3));
    }
    if (value.length < 3) {
      setNamesArr([]);
    }
  };

  return (
    <Label style={{ width }}>
      <Input
        onChange={(e) => {
          e.preventDefault();
          onChange(e, e.target.value);
          if (autoCompleteValues) {
            searchCard(e.target.value);
          }
        }}
        type="text"
        placeholder=" "
        value={value}
      />
      <Span className="input__label">{placeholder}</Span>
      <InputIcon src={icon} />
      <Autocomplete>
        <List>
          {namesArr.map((item) => (
            <ListName
              value={item}
              onClick={(e) => {
                e.preventDefault();
                setValue(e.currentTarget.getAttribute("value"));
                setNamesArr([]);
              }}
            >
              {item}
            </ListName>
          ))}
        </List>
      </Autocomplete>
    </Label>
  );
};

export default InputText;

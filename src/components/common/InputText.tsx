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
  value?: string | number;
  setValue?: Function;
  onChange: Function;
  width?: string;
  icon?: string;
  autoCompleteValues?: Array<any>;
  onKeyPress?: Function;
  onClickIcon?: Function;
  onClickListValue?: Function;
  onClick?: Function;
  onBlur?: Function;
  onKeyDown?: Function;
  disabled?: boolean;
  type?: string;
  onFocus?: Function;
}
const InputText = ({
  placeholder,
  value,
  onChange,
  width,
  icon,
  autoCompleteValues,
  setValue,
  onKeyPress = () => {},
  onClickIcon = () => {},
  disabled = false,
  onClickListValue,
  onClick = () => {},
  onBlur = () => {},
  onKeyDown = () => {},
  type = "text",
  onFocus = () => {},
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
      disabled={disabled}
      onFocus={() => onFocus()}
      onBlur={() => onBlur()}
      onClick={() => onClick()}
      onKeyDown={(e) => onKeyDown(e)}
	  	onKeyPress={(e) => onKeyPress(e)}
        onChange={(e) => {
          e.preventDefault();
          onChange(e, e.target.value);
          if (autoCompleteValues) {
            searchCard(e.target.value);
          }
        }}
        type={type}
        placeholder=" "
        value={value}
      />
      <Span className="input__label">{placeholder}</Span>
      <InputIcon src={icon} onClick={() => onClickIcon()}/>
      {namesArr.length >= 1 && (
              <Autocomplete>
              <List>
                {namesArr.map((item, key) => (
                  <ListName
              key={key}
                    value={item}
                    onClick={(e) => {
                      e.preventDefault();
              const value = e.currentTarget.getAttribute("value")
              onClickListValue(value);
                      setValue(value);
                      setNamesArr([]);
                    }}
                  >
                    {item}
                  </ListName>
                ))}
              </List>
            </Autocomplete>
      )}

    </Label>
  );
};

export default InputText;

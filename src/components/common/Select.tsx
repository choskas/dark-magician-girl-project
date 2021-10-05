// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import { Option, OptionsContainer } from "../../styles/common/Select";
import InputText from "./InputText";

interface SelectProps {
  options: Array<any>;
  placeholder: string;
  value: string | null;
  onChange: Function;
  onKeyDown?: Function;
  onFocus?: Function;
  onBlur?: Function;
  setValue?: Function;
}

const Select = ({
  options,
  placeholder,
  value,
  setValue,
  onChange,
  onKeyDown = () => {},
  onFocus = () => {},
  onBlur = () => {}
}) => {
  const [isVisibileOptions, setIsVisibleOptions] = useState(false);
  const [optionsArr, setOptionsArr] = useState(options);
  const ref = useRef<HTMLDivElement>(null);
  const searchOnList = (value: string) => {

    const newOptions = optionsArr.filter((item: any) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setOptionsArr(newOptions);
    if (value.length === 0) {
      setOptionsArr(options);
    }
  };

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsVisibleOptions(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return (
    <div ref={ref}>
      <InputText
        onBlur={() => onBlur()}
        onFocus={() => onFocus()}
        onKeyDown={(e) => {
          onKeyDown(e)
          if (e.key == "Backspace"){
             setOptionsArr(options);
          }
        }}
        value={value}
        onClick={() => {
          setIsVisibleOptions(!isVisibileOptions);
          setOptionsArr(options);
        }}
        placeholder={placeholder}
        onChange={(e, value) => {
          searchOnList(value);
          setValue(value);
        }}
      />
      <OptionsContainer isVisibleOptions={isVisibileOptions}>
        {optionsArr &&
          optionsArr.map((item, key) => (
            <Option
              key={`option-${item.name}-${key}`}
              value={item.name}
              onClick={(e) => {
                e.preventDefault();
                const value = e.currentTarget.getAttribute("value");
                onChange(item, value);
                setIsVisibleOptions(false);
              }}
            >
              {item.name}
            </Option>
          ))}
      </OptionsContainer>
    </div>
  );
};

export default Select;

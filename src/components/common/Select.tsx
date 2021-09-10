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
}

const Select = ({
  options,
  placeholder,
  value,
  onChange,
  onKeyDown = () => {},
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
  useEffect(() => {
    setOptionsArr(options);
  }, [options]);
  return (
    <div ref={ref}>
      <InputText
        onKeyDown={(e) => onKeyDown(e)}
        value={value}
        onClick={() => setIsVisibleOptions(!isVisibileOptions)}
        placeholder={placeholder}
        onChange={(e, value) => {
          searchOnList(value);
        }}
      />
      <OptionsContainer isVisibleOptions={isVisibileOptions}>
        {optionsArr &&
          optionsArr.map((item) => (
            <Option
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

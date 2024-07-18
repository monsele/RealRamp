import { FunctionComponent, ChangeEvent } from "react";

export type PropertyInputType = {
  className?: string;
  propertyTitle?: string;
  inputTextFieldPlaceholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const PropertyInput: FunctionComponent<PropertyInputType> = ({
  className = "",
  propertyTitle,
  inputTextFieldPlaceholder,
  value,
  onChange,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-sm text-gray-300 font-outfit ${className}`}
    >
      <div className="self-stretch relative font-medium ">{propertyTitle}</div>
      <div className="self-stretch rounded-3xs bg-dimgray box-border flex flex-row items-start justify-start py-[23px] px-[15px] max-w-full border-[1px] border-solid border-whitesmoke-200">
        <input
          className="w-full [border:none] [outline:none] font-outfit text-xs bg-[transparent] h-[15px] flex-1 relative tracking-[0.01em] text-blue-200 text-left flex items-center min-w-[224px] max-w-full p-0"
          placeholder={inputTextFieldPlaceholder}
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default PropertyInput;

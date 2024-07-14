import { FunctionComponent } from "react";

export type  PropertyFieldType = {
  className?: string;
  propertyTitle?: string;
  inputTextFieldPlaceholder?: string;
};

const  PropertyField: FunctionComponent< PropertyFieldType> = ({
  className = "",
  propertyTitle,
  inputTextFieldPlaceholder,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-sm text-gray-300 font-body-labels ${className}`}
    >
      <div className="self-stretch relative font-medium">{propertyTitle}</div>
      <div className="self-stretch rounded-3xs bg-dimgray-100 box-border flex flex-row items-start justify-start py-[23px] px-[15px] max-w-full border-[1px] border-solid border-whitesmoke-200">
        <input
          className="w-full [border:none] [outline:none] font-body-labels text-xs bg-[transparent] h-[15px] flex-1 relative tracking-[0.01em] text-gray-200 text-left flex items-center min-w-[224px] max-w-full p-0"
          placeholder={inputTextFieldPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default  PropertyField;

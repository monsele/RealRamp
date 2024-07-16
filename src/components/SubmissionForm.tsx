import { FunctionComponent } from "react";

export type SubmissionFormType = {
  className?: string;
};

const SubmissionForm: FunctionComponent<SubmissionFormType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full rounded-[15px] bg-white-base box-border flex flex-col items-end justify-start py-6 pr-[25px] pl-[31px] leading-[normal] tracking-[normal] border-[7.3px] border-solid border-gray-400 ${className}`}
    >
      <img
        className="w-6 h-6 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/24user-interfaceclose.svg"
      />
      <section className="w-[566.5px] flex flex-col items-end justify-start gap-[20px] max-w-full text-left text-[23px] text-gray-200 font-outfit">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
          <h2 className="m-0 w-[502px] relative text-inherit font-medium font-inherit flex items-center max-w-full mq450:text-[18px]">
            Welcome, just before you start listing, let’s know some more about
            you
          </h2>
          <div className="self-stretch relative text-base leading-[20px] font-medium text-slategray">
            To enhance trust on our decentralized platform, we're introducing a
            one-time registration for property listers. This verifies listing
            authenticity, fostering a secure environment where users confidently
            engage with legitimate properties. Thank you for helping create a
            transparent marketplace.
          </div>
        </div>
        <form className="m-0 self-stretch flex flex-col items-center justify-start gap-[32px] max-w-full mq600:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[179px]">
                  <div className="relative text-xs leading-[16px] font-medium font-outfit text-slategray text-left inline-block min-w-[87px]">
                    Company Name
                  </div>
                  <input
                    className="w-full [outline:none] bg-white-base self-stretch h-11 rounded-md box-border flex flex-row items-start justify-start p-3 font-outfit font-extralight text-xs text-lightslategray min-w-[165px] border-[1px] border-solid border-lightgray"
                    placeholder="Your first name"
                    type="text"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[179px]">
                  <div className="relative text-xs leading-[16px] font-medium font-outfit text-slategray text-left inline-block min-w-[85px]">
                    Company Email
                  </div>
                  <input
                    className="w-full [outline:none] bg-white-base self-stretch h-11 rounded-md box-border flex flex-row items-start justify-start p-3 font-outfit font-extralight text-xs text-lightslategray min-w-[165px] border-[1px] border-solid border-base-blue"
                    placeholder="Your last name"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="relative text-xs leading-[16px] font-medium font-outfit text-slategray text-left inline-block min-w-[98px]">
                  Company Website
                </div>
                <input
                  className="w-full [outline:none] bg-white-base self-stretch h-11 rounded-md box-border flex flex-row items-start justify-start p-3 font-outfit font-extralight text-xs text-lightslategray min-w-[250px] border-[1px] border-solid border-lightgray"
                  placeholder="Your work email"
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-center py-0 px-5 box-border gap-[8px] max-w-full">
                <div className="relative text-xs leading-[16px] font-medium font-outfit text-slategray text-left">
                  Company Government Issued License
                </div>
                <button className="cursor-pointer py-4 px-5 bg-aliceblue w-[367px] rounded-[10px] box-border flex flex-row items-center justify-center max-w-full border-[1px] border-solid border-neutral-300">
                  <div className="flex flex-row items-center justify-center gap-[4px]">
                    <img
                      className="h-[26px] w-[26px] relative"
                      alt=""
                      src="/vuesaxbulkdocumentupload.svg"
                    />
                    <div className="relative text-xs tracking-[0.01em] leading-[15.2px] font-medium font-outfit text-gray-100 text-left inline-block min-w-[122px]">{`Max upload size 20MB `}</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center max-w-full">
              <div className="flex-1 relative text-xs leading-[16px] font-medium font-outfit text-center inline-block max-w-full">
                <span className="text-lightslategray">{`By continuing you agree to the DestLab `}</span>
                <span className="[text-decoration:underline] text-gray-200">
                  terms of service
                </span>
                <span className="text-lightslategray">{` and `}</span>
                <span className="[text-decoration:underline] text-gray-200">
                  privacy policy
                </span>
                <span className="text-lightslategray">.</span>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center py-0 px-5">
            <button className="cursor-pointer py-[15px] px-5 bg-gray-300 w-[271px] rounded-[30px] box-border flex flex-row items-center justify-center whitespace-nowrap border-[2px] border-solid border-base-blue hover:bg-darkslategray hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue">
              <div className="relative text-base font-outfit text-white-base text-left inline-block min-w-[91px]">
                Submit Form
              </div>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SubmissionForm;

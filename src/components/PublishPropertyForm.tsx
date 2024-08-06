import {
  FormEvent,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import PropertyInput from "./PropertyInput";
import {
  useWriteContract,
  useAccount,
  useWaitForTransactionReceipt,
} from "wagmi";
import { ethers, toBigInt } from "ethers";
import axios from "axios";
import { contractABI, contractAddress } from "../abi/EstatePool";
import toast, { Toaster } from "react-hot-toast";
export type PublishPropertyFormType = {
  className?: string;
};

const PublishPropertyForm: FunctionComponent<PublishPropertyFormType> = ({
  className = "",
}) => {
  const [propertyTitle, setPropertyTitle] = useState("");
  const [propertyLocation, setPropertyLocation] = useState("");
  const [desc, setDesc] = useState("");
  const [totalUnits, settotalUnits] = useState("1000");
  const [category, setCategory] = useState("0");
  const [price, setPrice] = useState("0");
  const [exYield, setYield] = useState(0);

  const { writeContract, data: hash } = useWriteContract();
  const { isLoading: isTransactionLoading, isSuccess: isTransactionSuccess } =
    useWaitForTransactionReceipt({
      hash,
    });
  const navigate = useNavigate();
  const webprovider = new ethers.WebSocketProvider(
    "wss://base-sepolia.g.alchemy.com/v2/Kg-QkKBYxywIbXW70OhuxDpOde_Z-YlI"
  );
  const contract = new ethers.Contract(
    contractAddress,
    contractABI,
    webprovider
  );
  const { isConnected, address } = useAccount();
  const createProperty = async (smartContractId: Number) => {
    var property = {
      propertyTitle: propertyTitle,
      propertyLocation: propertyLocation,
      propertyCategory: category,
      annualYield: 0,
      units: Number(totalUnits),
      price: Number(price),
      propertyDescription: desc,
      propertyOwner: address,
      images: "string",
      smartContractId: smartContractId,
    };
    let axResult = await axios.post(
      "https://localhost:7280/properties",
      property
    );
    console.log(axResult);
  };
  const getEvent = async () => {
    console.log("Inside the event function");
    contract.on("TokenListed", (owner, name, id) => {
      console.log(owner);
      console.log(name);
      console.log(id);
      createProperty(Number(id));
    });
  };
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Prevent default form submission

      if (!isConnected || !address) {
        toast("Wallet not connected");
        console.error("Wallet not connected");
        return;
      }

      try {
        console.log("Connected address:", address);

        // Call the smart contract function
        writeContract({
          address: contractAddress,
          abi: contractABI,
          functionName: "CreateAsset",
          args: [
            propertyTitle,
            toBigInt(totalUnits),
            toBigInt(Number(totalUnits)),
            Number(category),
          ],
        });
        console.log("Property submission initiated");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
    [
      isConnected,
      address,
      propertyTitle,
      propertyLocation,
      desc,
      totalUnits,
      category,
      writeContract,
      navigate,
    ]
  );

  useEffect(() => {
    getEvent();
  }, [isTransactionLoading, isTransactionSuccess]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`self-stretch flex flex-row items-start justify-start gap-[36px] max-w-full text-center text-5xl text-black font-outfit mq750:gap-[18px] mq1225:flex-wrap ${className}`}
    >
      <Toaster />
      <div className="flex-1 flex flex-col items-start justify-start gap-[19px] min-w-[391px] max-w-full mq1050:min-w-full">
        <h2 className="m-0 relative text-inherit font-medium font-inherit mq450:text-lgi">
          Images of Properties
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px] text-sm text-white-base">
          <div className="self-stretch h-80 flex flex-col items-center justify-center">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start relative gap-[10px]">
              <img
                className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/rectangle-2688@2x.png"
              />
              <div className="w-[186px] !m-[0] absolute top-[84px] left-[216px] [backdrop-filter:blur(16px)] rounded-6xs bg-darkslategray-400 overflow-hidden flex flex-col items-center justify-start py-[19px] px-[17px] box-border gap-[6px] z-[1]">
                <div className="self-stretch relative font-semibold">
                  Upload property image up to 5 images
                </div>
                <div className="flex flex-row items-center justify-center gap-[5px] text-left text-xs">
                  <img
                    className="h-[26px] w-[26px] relative"
                    loading="lazy"
                    alt=""
                    src="/vuesaxbulkdocumentupload.svg"
                  />
                  <div className="relative tracking-[0.01em] leading-[15.2px] inline-block min-w-[121px]">{`Max upload size 20MB `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[4px] mq1050:flex-wrap">
            <img
              className="h-[113px] w-[117px] relative min-h-[113px]"
              loading="lazy"
              alt=""
              src="/group-1000002276.svg"
            />
            <img
              className="h-[113px] w-[117px] relative min-h-[113px]"
              loading="lazy"
              alt=""
              src="/group-1000002279.svg"
            />
            <img
              className="h-[113px] w-[117px] relative min-h-[113px]"
              loading="lazy"
              alt=""
              src="/group-1000002280.svg"
            />
            <img
              className="h-[113px] w-[117px] relative min-h-[113px]"
              loading="lazy"
              alt=""
              src="/group-1000002281.svg"
            />
            <img
              className="h-[113px] w-[117px] relative min-h-[113px]"
              loading="lazy"
              alt=""
              src="/group-1000002275.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[438px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[438px] max-w-full text-left text-sm text-gray-300 mq1050:min-w-full mq1225:flex-1">
        <div className="self-stretch shadow-[2px_4px_30px_#e9eefd] rounded-3xs bg-white-base flex flex-col items-end justify-start p-4 box-border gap-[12px] max-w-full">
          <div className="mr-[-31px] w-[437px] flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[6px] max-w-[108%] shrink-0 text-center text-5xl text-black">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <a className="[text-decoration:none] relative font-medium text-[inherit] mq450:text-lgi">
                Property Brief
              </a>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearinfocircle.svg"
                />
              </div>
            </div>
            <div className="self-stretch relative text-sm text-gray-600 text-left">
              Ensure to give a convincing description of your properties to help
              potential buyers notice you quick
            </div>
          </div>
          <PropertyInput
            propertyTitle="Property Title"
            inputTextFieldPlaceholder="Enter your property Title here "
            value={propertyTitle}
            onChange={(e) => setPropertyTitle(e.target.value)}
          />
          <PropertyInput
            propertyTitle="Property Location"
            inputTextFieldPlaceholder="Enter your property location here "
            value={propertyLocation}
            onChange={(e) => setPropertyLocation(e.target.value)}
          />
          <div className="self-stretch flex flex-row items-start justify-start gap-[10px] mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[129px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative font-medium">
                  Property category
                </div>
                <div className="self-stretch h-[65px] flex flex-col items-start justify-start relative text-xs text-gray-200">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full h-[65px] rounded-3xs bg-dimgray text-yellow-300 font-medium box-border flex items-center py-[25px] px-[15px] border-[1px] border-solid border-whitesmoke-200 appearance-none cursor-pointer"
                    style={{ fontFamily: "inherit" }}
                  >
                    <option value="0">Land</option>
                    <option value="1">Houses</option>
                    <option value="2">Commercial</option>
                    <option value="3">Apartment</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
                    <img
                      className="w-6 h-6"
                      alt="Dropdown arrow"
                      src="/vuesaxlineararrowdown.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="relative font-medium inline-block min-w-[67px]">
                No of Units
              </div>
              <div className="self-stretch rounded-3xs bg-dimgray flex flex-row items-center justify-start py-[23px] px-4 text-xs border-[1px] border-solid border-whitesmoke-200">
                <input
                  type="text"
                  defaultValue="100"
                  value={totalUnits}
                  className="w-full bg-transparent border-none outline-none text-xs text-yellow-300 font-medium tracking-[0.01em] min-w-[21px]"
                  style={{ fontFamily: "inherit" }}
                  onChange={(e) => settotalUnits(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[129px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative font-medium">{`Annual Yield `}</div>
                <div className="self-stretch flex flex-row items-start justify-start relative text-xs text-gray-200">
                  <div className="flex-1 rounded-3xs bg-dimgray flex flex-row items-start justify-start py-[23px] px-4 border-[1px] border-solid border-whitesmoke-200">
                    <input
                      type="text"
                      defaultValue="20"
                      value={exYield}
                      onChange={(e) => setYield(Number(e.target.value))}
                      className="w-full bg-transparent border-none outline-none text-xs text-yellow-300 font-medium tracking-[0.01em] min-w-[15px]"
                      style={{ fontFamily: "inherit" }}
                    />
                  </div>
                  <div className="h-[41px] w-px absolute !m-[0] top-[11px] right-[55px] box-border z-[1] border-r-[1px] border-solid border-darkslategray-300" />
                  <div className="absolute !m-[0] top-[21px] right-[13px] text-base tracking-[0.01em] text-darkslategray-300 inline-block min-w-[11px] z-[1]">
                    %
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium inline-block min-w-[83px]">
                  Price per unit
                </div>
                <div className="self-stretch flex flex-row items-start justify-start relative text-xs text-gray-200">
                  <div className="flex-1 rounded-3xs bg-dimgray flex flex-row items-start justify-start py-[23px] px-4 border-[1px] border-solid border-whitesmoke-200">
                    <input
                      type="text"
                      defaultValue="2000"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full bg-transparent border-none outline-none text-xs text-blue-300 font-medium tracking-[0.01em] min-w-[15px]"
                      style={{ fontFamily: "inherit" }}
                    />
                  </div>
                  <div className="h-[41px] w-px absolute !m-[0] top-[11px] right-[83px] box-border z-[1] border-r-[1px] border-solid border-darkslategray-300" />
                  <div className="absolute !m-[0] top-[21px] right-[9px] text-base tracking-[0.01em] text-darkslategray-300 inline-block min-w-[43px] z-[1]">
                    ETH
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-medium">Property Description</div>
                <textarea
                  className="bg-dimgray h-[122px] w-auto [outline:none] self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-4 px-[15px] font-outfit text-xs text-yellow-300 border-[1px] border-solid border-whitesmoke-200"
                  placeholder="Give a brief description of the property"
                  rows={6}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  cols={20}
                />
              </div>
            </div>
          </div>
          <div className="w-[304px] flex flex-row items-start justify-start gap-[19px]">
            <button className="cursor-pointer py-[7px] px-[18px] bg-[transparent] flex-1 rounded-11xl [background:linear-gradient(180deg,_rgba(58,_150,_173,_0.12),_rgba(90,_130,_252,_0.12))] flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-black hover:bg-darkslategray-500 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-200">
              <div className="relative text-sm font-medium font-outfit text-gray-700 text-left inline-block min-w-[98px]">{`Save & sell later`}</div>
            </button>
            <div className="cursor-pointer py-[7px] px-[18px] bg-ntblack flex-1 rounded-11xl flex flex-row items-start justify-start whitespace-nowrap border-[2px] border-solid border-base-blue hover:bg-darkslategray-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue">
              <button className="relative text-base font-outfit text-white-base text-left inline-block min-w-[107px]">
                Publish for sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PublishPropertyForm;

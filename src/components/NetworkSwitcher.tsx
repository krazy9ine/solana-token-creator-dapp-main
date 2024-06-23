import { FC } from "react";
import dynamic from "next/dynamic";
import { BsNintendoSwitch } from "react-icons/bs";
//INTERNAL IMPORT
import { useNetworkConfiguration } from "../contexts/NetworkConfigurationProvider";
import NetworkSwitcherSVG from "./SVG/NetworkSwitcherSVG";

const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setNetworkConfiguration } =
    useNetworkConfiguration();
  return (
    <>
      <input
        type="checkbox"
        id="checkbox"
        aria-label="Toggle Network Configuration"
      />
      <label className="switch">
        {/* <span className="sr-only">Select Network Configuration</span> */}
        {/* Explicitly associate the select with a label */}
        <select
          id="network-select"
          value={networkConfiguration}
          onChange={(e) => setNetworkConfiguration(e.target.value || "devnet")}
          className="select max-w-xs border-none bg-transparent outline-0"
          aria-labelledby="network-select-label"
        >
          <option value="mainnet-beta">Main</option>
          <option value="devnet">Dev</option>
          <option value="testnet">Test</option>
        </select>
        <BsNintendoSwitch />
      </label>
    </>
  );
};

export default dynamic(() => Promise.resolve(NetworkSwitcher), {
  ssr: false,
});

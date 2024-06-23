import React, { FC, Dispatch, SetStateAction } from "react";
import { GiToolbox } from "react-icons/gi";
import { MdOutlineMoreTime } from "react-icons/md";
import { MdOutlineDoubleArrow } from "react-icons/md";

interface ToolViewProps {
  setOpenAirdrop: Dispatch<SetStateAction<boolean>>;
  setOpenContract: Dispatch<SetStateAction<boolean>>;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
  setOpenSendTransaction: Dispatch<SetStateAction<boolean>>;
  setOpenTokenMetaData: Dispatch<SetStateAction<boolean>>;
}
export const ToolView: FC<ToolViewProps> = ({
  setOpenAirdrop,
  setOpenContract,
  setOpenCreateModal,
  setOpenSendTransaction,
  setOpenTokenMetaData,
}) => {
  const tools = [
    {
      name: "Create Token",
      icon: <GiToolbox />,
      function: setOpenCreateModal,
    },
    {
      name: "Token Metadata",
      icon: <GiToolbox />,
      function: setOpenTokenMetaData,
    },
    {
      name: "Contact Us",
      icon: <GiToolbox />,
      function: setOpenContract,
    },
    {
      name: "Airdrop",
      icon: <GiToolbox />,
      function: setOpenAirdrop,
    },
    {
      name: "Send Transaction",
      icon: <GiToolbox />,
      function: setOpenSendTransaction,
    },
    {
      name: "Buddy Token",
      icon: <GiToolbox />,
      function: setOpenCreateModal,
    },
    {
      name: "Top Tokens",
      icon: <GiToolbox />,
      function: setOpenCreateModal,
    },
    {
      name: "Solana Explore",
      icon: <GiToolbox />,
      function: setOpenCreateModal,
    },
  ];
  return (
    <section id="tools" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-center justify-center text-center">
          <div className="max-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Solana's Versatile Toolbox
            </h2>
            <p className="text-default-200 text-sm font-medium">
              Solana's potent tools empower efficient decentralized app
              development. With rapid transactions and cost-effective
              infrastructure,
              <br /> it's the platform for turning ideas into reality,
              regardless of experience level.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <div
              className="bg-default-950/40 rounded-xl backdrop-blur-3xl"
              onClick={() => tool.function(true)}
            >
              <div className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 ${
                      index == 0
                        ? "text-red-500"
                        : index == 1
                        ? "text-sky-500"
                        : index == 2
                        ? "text-indigo-500"
                        : index == 3
                        ? "text-yellow-500"
                        : "text-teal-500"
                    }`}
                  >
                    <i data-lucide="dribble" className="">
                      {tool.icon}
                    </i>
                  </div>

                  <h3 className="text-default-200 text-xl font-medium">
                    {tool.name}
                  </h3>
                </div>

                <a className="text-primary group relative inline-flex items-center gap-2">
                  <span className="bg-primary-80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full"></span>
                  Select & Try
                  <i data-lucide={"move-right"}>
                    <MdOutlineDoubleArrow />
                  </i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a className="hover:bg-primary-hover bg-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-2 text-white transition-all duration-500">
            More Tools
            <i>
              <MdOutlineMoreTime />
            </i>
          </a>
        </div>
      </div>
    </section>
  );
};

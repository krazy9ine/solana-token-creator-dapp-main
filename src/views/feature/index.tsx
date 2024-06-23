import React, { FC, Dispatch, SetStateAction } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { GiRegeneration } from "react-icons/gi";
import { FaJoget } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

interface FeatureViewProps {
  setOpenAirdrop: Dispatch<SetStateAction<boolean>>;
  setOpenContract: Dispatch<SetStateAction<boolean>>;
  setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
  setOpenSendTransaction: Dispatch<SetStateAction<boolean>>;
  setOpenTokenMetaData: Dispatch<SetStateAction<boolean>>;
}
export const FeatureView: FC<FeatureViewProps> = ({
  setOpenAirdrop,
  setOpenContract,
  setOpenCreateModal,
  setOpenSendTransaction,
  setOpenTokenMetaData,
}) => {
  const features = [
    {
      name: "Token Generator",
      icon: <GiRegeneration />,
      description:
        "The Token Generator simplifies blockchain token creation with its intuitive interface, enabling swift customization for various purposes.",
      function: setOpenCreateModal,
    },
    {
      name: "Get Airdrop",
      icon: <FaJoget />,
      description:
        "Unlock tokens effortlessly with our airdrop system. Participate in campaigns or meet requirements to expand your portfolio for free.",
      function: setOpenAirdrop,
    },
    {
      name: "Transfer Sol",
      icon: <FaMoneyBillTransfer />,
      description:
        "Whether you're engaging in decentralized finance activities, ensures hassle-free movement of your digital assets within the Solana.",
      function: setOpenSendTransaction,
    },
    {
      name: "Token Metadata",
      icon: <FaDatabase />,
      description:
        "Start working with solana token creator, It allow you to create solana token by creating, deploying, airdrop, transfering and updating token",
      function: setOpenTokenMetaData,
    },
  ];
  return (
    <section id="feature" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Solana Blockchain Constructor: Feature Spotlight
            </h2>
            <p className="text-default-200 text-sm font-medium">
              Solana's Blockchain Constructor shines with versatile features,
              empowering developers to create efficient <br /> decentralized
              solutions with lightning-fast transactions and low costs.
            </p>
          </div>
        </div>

        <div className="bg-default-950/40 flex flex-wrap items-center rounded-3xl backdrop-blur-3xl">
          {features.map((list, index) => (
            <div
              key={index}
              className={`w-auto grow border-b border-white/10 md:w-1/2 ${
                index == 0
                  ? "md:border-e"
                  : index == 1
                  ? ""
                  : index == 2
                  ? "md:border-e md:border-b-0"
                  : ""
              }`}
            >
              <div className="p-8 sm:p-10">
                <div className="bg-primary/10 text-primary mb-10 inline-flex h-16 w-16 items-center justify-center rounded-xl">
                  <i data-lucide="framer">{list.icon}</i>
                </div>
                <h2 className="mb-4 text-2xl font-medium text-white">
                  {list.name}
                </h2>
                <p className="text-default-200 mb-6 text-base">
                  {list.description}
                </p>
                <a
                  onClick={() => list.function(true)}
                  className="hover:bg-primary inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300"
                >
                  Use Tools
                  <i>
                    <MdOutlineDoubleArrow />
                  </i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

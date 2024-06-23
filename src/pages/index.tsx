import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

//INTERNAL IMPORT
import {
  HomeView,
  ToolView,
  FeatureView,
  OfferView,
  FaqView,
  CreateView,
  TokenMetaData,
  ContactView,
  AirdropView,
  DonateView,
} from "../views";
const Home: NextPage = (props) => {
  //STATE VARIABLE
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openTokenMetaData, setOpenTokenMetaData] = useState(false);
  const [openContract, setOpenContract] = useState(false);
  const [openAirdrop, setOpenAirdrop] = useState(false);
  const [openSendTransaction, setOpenSendTransaction] = useState(false);

  return (
    <>
      <Head>
        <title>Solana Token Creator</title>
        <meta
          name="Solana token creator"
          content="Build and create solana token"
        />
      </Head>
      <HomeView setOpenCreateModal={setOpenCreateModal} />
      <ToolView
        setOpenAirdrop={setOpenAirdrop}
        setOpenContract={setOpenContract}
        setOpenCreateModal={setOpenCreateModal}
        setOpenSendTransaction={setOpenSendTransaction}
        setOpenTokenMetaData={setOpenTokenMetaData}
      />
      <FeatureView
        setOpenAirdrop={setOpenAirdrop}
        setOpenContract={setOpenContract}
        setOpenCreateModal={setOpenCreateModal}
        setOpenSendTransaction={setOpenSendTransaction}
        setOpenTokenMetaData={setOpenTokenMetaData}
      />

      <OfferView />
      <FaqView />
      {/* DYNAMIC COMPONENT  */}
      {openCreateModal && (
        <div className="new_loader relative h-full bg-slate-900">
          <CreateView setOpenCreateModal={setOpenCreateModal} />
        </div>
      )}

      {openTokenMetaData && (
        <div className="new_loader relative h-full bg-slate-900">
          <TokenMetaData setOpenTokenMetaData={setOpenTokenMetaData} />
        </div>
      )}

      {openContract && (
        <div className="new_loader relative h-full bg-slate-900">
          <ContactView setOpenContract={setOpenContract} />
        </div>
      )}

      {openAirdrop && (
        <div className="new_loader relative h-full bg-slate-900">
          <AirdropView setOpenAirdrop={setOpenAirdrop} />
        </div>
      )}

      {openSendTransaction && (
        <div className="new_loader relative h-full bg-slate-900">
          <DonateView setOpenSendTransaction={setOpenSendTransaction} />
        </div>
      )}
    </>
  );
};

export default Home;

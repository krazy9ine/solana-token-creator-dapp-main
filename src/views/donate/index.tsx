import React, { FC, useEffect, useCallback, useState } from "react";
import useUserSOLBalanceStore from "stores/useUserSOLBalanceStore";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  TransactionSignature,
  PublicKey,
  Transaction,
  SystemInstruction,
  SystemProgram,
} from "@solana/web3.js";
import { notify } from "../../utils/notifications";
import { AiOutlineClose } from "react-icons/ai";

//INTERNAL IMPORT
import { InputView } from "../input";
import Branding from "../../components/Branding";

export const DonateView = ({ setOpenSendTransaction }) => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [amount, setAmount] = useState("0.0");

  const balance = useUserSOLBalanceStore((s) => s.balance);
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  useEffect(() => {
    if (wallet.publicKey) {
      getUserSOLBalance(wallet.publicKey, connection);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

  const onClick = useCallback(async () => {
    if (!publicKey) {
      notify({
        type: "error",
        message: "Sorry Error",
        description: "Wallet not connected",
      });
      return;
    }

    const creatorAddress = new PublicKey(
      "BCeGAXCBKVUrKpeXY9EozT8qvk4jwBwsN1a57ckKgmGG"
    );
    let signature: TransactionSignature = "";

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: creatorAddress,
          lamports: LAMPORTS_PER_SOL * Number(amount),
        })
      );

      signature = await sendTransaction(transaction, connection);
      notify({
        type: "success",
        message: `You have successfully transfer Fund ${amount}`,
        txid: signature,
      });
    } catch (error: any) {
      notify({
        type: "error",
        message: "Transaction failed",
        description: error?.message,
        txid: signature,
      });
      return;
    }
  }, [publicKey, amount, sendTransaction, connection]);

  const CloseModal = () => (
    <a
      onClick={() => setOpenSendTransaction(false)}
      className="group mt-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-2xl transition-all duration-500 hover:bg-primary"
    >
      <i className="text-2xl text-white group-hover:text-white">
        <AiOutlineClose />
      </i>
    </a>
  );
  return (
    <>
      <section className="flex w-full items-center py-6 px-0 lg:h-screen lg:p-10">
        <div className="container">
          <div className="bg-default-950/40 mx-auto max-w-5xl overflow-hidden rounded-2xl backdrop-blur-2xl">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* FIRST  */}
              <Branding
                image="auth-img"
                title="To build your solana token creator"
                message="Try and create your ever solana project, and you want to know how blockchain works check Bitcoin Whitepapper"
              />
              {/* SECOND  */}

              <div className="lg:ps-0 flex h-full flex-col p-10">
                <div className="pb-10">
                  <a className="flex">
                    <img
                      src="assets/images/logo1.png"
                      alt=""
                      className="h-10"
                    />
                  </a>
                </div>

                <div className="my-auto pb-6 text-center">
                  <h4 className="mb-4 text-2xl font-bold text-white">
                    {balance !== null && (
                      <p>SOL Balance: {balance.toLocaleString()}</p>
                    )}
                  </h4>
                  <p className="text-default-300 mx-auto mb-5 max-w-sm">
                    Now you can Donate, to the creator of the tool developers
                  </p>
                  <div className="flex items-start justify-center">
                    <img
                      src="assets/images/logout.svg"
                      alt=""
                      className="h-40"
                    />
                  </div>

                  <div className="text-start">
                    <InputView
                      name="Amount"
                      placeholder="amount"
                      clickhandle={(e) => setAmount(e.target.value)}
                    />
                  </div>

                  <div className="mb-6 text-center">
                    <button
                      onClick={onClick}
                      disabled={!publicKey}
                      className="bg-primary-600/90 hover:bg-primary group mt-5 inline-flex w-full items-center justify-center rounded-lg px-6 py-2 text-white backdrop-blur-2xl transition-all duration-500"
                    >
                      <span className="fw-bold">Donate</span>
                    </button>
                    <CloseModal />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

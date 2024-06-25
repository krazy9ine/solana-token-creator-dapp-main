import { FC } from "react";

export const FaqView: FC = ({}) => {
  const questions = [
    {
      question: "How can I create a wallet for Solana?",
      answer:
        "To create a wallet for Solana, you can use the Phantom wallet extension. Install the extension from the Chrome Web Store, create a new wallet, and follow the prompts to set up your account securely.",
      id: "faq-1",
    },
    {
      question: "How do I connect my wallet to the Solana Token Generator dApp?",
      answer:
        "To connect your wallet to the Solana Token Generator dApp, click on the 'Connect Wallet' button on the homepage. Select the Phantom wallet option and approve the connection request in the Phantom wallet extension.",
      id: "faq-2",
    },
    {
      question: "How can I create a token on the Solana network?",
      answer:
        "To create a token on the Solana network, fill in the token details such as Token Name, Ticker, Decimals, and Amount in the Solana Token Generator dApp. Confirm the transaction in your Phantom wallet to create your token.",
      id: "faq-3",
    },
    {
      question: "What are the transaction fees on the Solana network?",
      answer:
        "The Solana network offers low transaction fees compared to many other blockchains. Typically, transaction fees are just a fraction of a cent, making it cost-effective to create and transfer tokens.",
      id: "faq-4",
    },
    {
      question: "Is it safe to use the Solana Token Generator dApp?",
      answer:
        "Yes, the Solana Token Generator dApp is designed with security in mind. Ensure that you only connect your wallet from a trusted device and approve transactions carefully within your Phantom wallet.",
      id: "faq-5",
    },
    {
      question: "Can I view my created tokens in the Phantom wallet?",
      answer:
        "Yes, after creating your tokens using the Solana Token Generator dApp, you can view them in the Phantom wallet. Go to the 'Wallet' section and you should see your newly created tokens listed there.",
      id: "faq-6",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Any Questions
            </h2>
           
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="hs-accordion-group space-y-4">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`hs-accordion bg-default-950/40 overflow-hidden rounded-lg border border-white/10 backdrop-blur-3xl`}
                id={question.id}
              >
                <button
                  className="hs-accordion-toggle inline-flex items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-white transition-all"
                  aria-controls={`faq-accordion-${index + 1}`}
                >
                  <h5 className="flex text-base font-semibold">
                    <i className="me-3 h-5 w-5 stroke-white align-middle"></i>
                    {question.question}
                  </h5>
                  <i className="hs-accordion-active:-rotate-180 h-4 w-4 transition-all duration-500"></i>
                </button>

                <div
                  id={`faq-accordion-${index + 1}`}
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby={question.id}
                >
                  <div className="px-6 pb-4 pt-0">
                    <p className="text-default-300 mb-2 text-sm font-medium">
                      {question.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

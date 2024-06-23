import React, { FC } from "react";

export const OfferView: FC = ({}) => {
  return (
    <section id="offer" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto mx-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Momentum Behind Solana Tokens
            </h2>
            <p className="text-default-200 text-sm font-medium">
              Solana tokens are rapidly gaining momentum, showcasing a surge of
              interest and activity in the blockchain realm with its speed and
              scalability.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* //FIRST SECTION  */}
          <div className="space-y-6">
            <div className="bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
              <div className="p-10">
                <i className="text-primary h-10 w-10"></i>
                <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
                  Demystifying Solana Token Creation
                </h3>
                <p className="text-default-100 mb-4 text-sm font-medium">
                  Dive into the world of Solana token creation with this
                  introductory blog post.
                </p>
                <a
                  href="#"
                  className="text-primary group relative inline-flex items-center gap-2"
                >
                  <span className="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full">
                    Read More <i className="h-4 w-4"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
              <div className="p-10">
                <i className="text-primary h-10 w-10"></i>
                <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
                  Solana Token Creator's Toolkit
                </h3>
                <p className="text-default-100 mb-4 text-sm font-medium">
                  Explore the powerful tools and features available to Solana
                  token creators.
                </p>
                <a
                  href="#"
                  className="text-primary group relative inline-flex items-center gap-2"
                >
                  <span className="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full">
                    Read More <i className="h-4 w-4"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* SECOND  */}
          <div className="space-y-6">
            <div className="bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
              <div className="p-10">
                <i className="text-primary h-10 w-10"></i>
                <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
                  Navigating Solana Token Creation Process
                </h3>
                <p className="text-default-100 mb-4 text-sm font-medium">
                  Follow along as we outline the step-by-step process of
                  creating a Solana token.
                </p>
                <a
                  href="#"
                  className="text-primary group relative inline-flex items-center gap-2"
                >
                  <span className="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full">
                    Read More <i className="h-4 w-4"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
              <div className="p-10">
                <i className="text-primary h-10 w-10"></i>
                <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
                  Unleashing Innovation Success Story
                </h3>
                <p className="text-default-100 mb-4 text-sm font-medium">
                  Delve into real-world examples of successful projects built on
                  the Solana blockchain.
                </p>
                <a
                  href="#"
                  className="text-primary group relative inline-flex items-center gap-2"
                >
                  <span className="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full">
                    Read More <i className="h-4 w-4"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* THIRD  */}
          <div className="space-y-6">
            <div className="bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
              <div className="p-10">
                <i className="text-primary h-10 w-10"></i>
                <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
                  Unlocking Solana DeFi Potential
                </h3>
                <p className="text-default-100 mb-4 text-sm font-medium">
                  Learn how Solana's blockchain is revolutionizing decentralized
                  finance (DeFi).
                </p>
                <a
                  href="#"
                  className="text-primary group relative inline-flex items-center gap-2"
                >
                  <span className="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full">
                    Read More <i className="h-4 w-4"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
              <div className="p-10">
                <i className="text-primary h-10 w-10"></i>
                <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
                  Explore Solana Dev. Community
                </h3>
                <p className="text-default-100 mb-4 text-sm font-medium">
                  Meet developers and innovators behind exciting projects on the
                  Solana blockchain.
                </p>
                <a
                  href="#"
                  className="text-primary group relative inline-flex items-center gap-2"
                >
                  <span className="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full">
                    Read More <i className="h-4 w-4"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

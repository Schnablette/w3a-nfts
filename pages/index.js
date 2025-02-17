import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SModal, CModal, LModal } from "../components/Modal";

export default function Home() {
  const [openSModal, setOpenSModal] = useState(false);
  const [openCModal, setOpenCModal] = useState(false);
  const [openLModal, setOpenLModal] = useState(false);

  return (
    <>
      <Head>
        <title>Web3Acadmey DAO Donations</title>
        <meta name="description" content="Donation page for Web3 Acadmey DAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <div id="stars" className="z-0"></div>
      <div id="stars2" className="z-0"></div>
      <div id="stars3" className="z-0"></div>
      <div className="px-10 py-10 md:px-20 bg-gradient-to-b from-purple-800 to-black ">
        <Image
          src="/../public/assets/imgs/h-logo.png"
          alt="Web3 Academy DAO logo"
          width="150"
          height="90"
        />
        <div className="justify-between lg:flex sm:flex-column gap-16">
          <div className="justify-center items-center">
            <h1 className="mt-20 text-center md:text-left leading-tight">
              <span className="font-light">Become a W3A DAO </span>
              <br />
              Genesis Donator
            </h1>
            <p className="mt-10 max-w-2xl text-center mb-20 md:text-left">
              Web3 Academy DAO is a tokenized community on a mission to create
              resources, products and services to better support the wave of
              entrepreneurs, businesses and creators moving into Web3 over the
              coming decade.
            </p>
          </div>
          <div className="md:w-1/2 flex-column justify-center items-center">
            <Image
              src="/../public/assets/imgs/logos.png"
              alt="DOER Icons"
              width="1000"
              height="500"
            />
            <p className="text-3xl font-light text-gray-40 text-center mt-20">
              #AreYouReady?
            </p>
          </div>
        </div>
      </div>

      {/* NFT Tier Section */}
      <h2 className="md:text-5xl sm:text-4xl max-w-xl text-center mx-auto mt-20 ">
        <span className="font-light">Web3 Academy DAO </span>
        <br />
        Genesis Donators Collection
      </h2>
      <div className="mt-10 flex-column justify-center items-center mb-20 px-5">
        <div className="w-full h-1/3 flex justify-center items-center mb-20">
          <div className="w-96">
            <h3 className="sm:text-xl md:text-lg text-purple-100 uppercase">
              Tier 1
            </h3>
            <h2 className="text-3xl">DOER Supporter</h2>
            <p className="py-4">
              A DOER Supporter holder shows that you are here for the Mission!
              Those who mint this NFT will forever be remembered as a supporter
              of the genesis of Web3 Academy DAO.
            </p>
            <button
              disabled={openSModal || openCModal || openLModal}
              className="bg-purple-500 text-white rounded-md px-8 py-2 mt-2 text-base font-bold hover:bg-purple-200 active:bg-purple-300 uppercase"
              onClick={() => setOpenSModal(true)}
            >
              Mint
            </button>
            {openSModal && <SModal closeModal={setOpenSModal} />}
          </div>
          <div className="w-56">
            <Image
              src="/../public/assets/imgs/Tier-1.png"
              alt="/"
              width="400"
              height="450"
            />
          </div>
        </div>

        <div className="w-full h-1/3 flex justify-center items-center mb-20">
          <div className="w-56">
            <Image
              src="/../public/assets/imgs/Tier-2.png"
              alt="/"
              width="400"
              height="450"
            />
          </div>
          <div className="w-96">
            <h3 className="sm:text-xl md:text-lg text-purple-100 uppercase">
              Tier 1
            </h3>
            <h2 className="text-3xl">DOER Champion</h2>
            <p className="py-4">
              A DOER Champion holder shows that you are here for the mission and
              committed to the cause! Those who mint this NFT will forever be
              remembered as a champion of the genesis of Web3 Academy DAO.
            </p>
            <button
              disabled={openSModal || openCModal || openLModal}
              className="bg-purple-500 text-white rounded-md px-8 py-2 mt-2 text-base font-bold hover:bg-purple-200 active:bg-purple-300 uppercase"
              onClick={() => setOpenCModal(true)}
            >
              Mint
            </button>
            {openCModal && <CModal closeModal={setOpenCModal} />}
          </div>
        </div>

        <div className="w-full h-1/3 flex justify-center items-center">
          <div className="w-96">
            <h3 className="sm:text-xl md:text-lg text-purple-100 uppercase">
              Tier 1
            </h3>
            <h2 className="text-3xl">DOER Legend</h2>
            <p className="py-4">
              A DOER Legend holder shows that you are here for the mission and
              putting your money where your mouth is! Those who mint this NFT
              will forever be remembered as a legend of the genesis of Web3
              Academy DAO.
            </p>
            <button
              disabled={openSModal || openCModal || openLModal}
              className="bg-purple-500 text-white rounded-md px-8 py-2 mt-2 text-base font-bold hover:bg-purple-200 active:bg-purple-300 uppercase"
              onClick={() => setOpenLModal(true)}
            >
              Mint
            </button>
            {openLModal && <LModal closeModal={setOpenLModal} />}
          </div>
          <div className="w-56">
            <Image
              src="/../public/assets/imgs/Tier-3.png"
              alt="/"
              width="400"
              height="450"
            />
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className="bg-gradient-to-t from-purple-800 to-black pb-24 pt-36 ">
        <div className="text-center ">
          <Image
            src="/../public/assets/imgs/h-logo.png"
            alt="Web3 Academy DAO logo"
            width="150"
            height="90"
          />
        </div>
      </div>
      {/* <div className="w-screen h-[500px] pt-48 bg-gradient-to-b from-black to-purple-800">
        <div className="">
          <div className="text-center">
            <h1 className="uppercase text-4xl">Web3 academy dao</h1>
            <p className="text-sm pt-2 pb-8">
              A DOER Legend holder shows that you are here for the mission and
              putting your money where your mouth is! Those who mint this NFT
              will forever be remembered as a legend of the genesis of Web3
              Academy DAO.
            </p>
            <button disabled={openSModal || openCModal  || openLModal } className="bg-purple-500 hover:bg-purple-200 active:bg-purple-300  text-white rounded-md px-8 py-2 w-64 h-12 uppercase shadow-none text-xl">
              join our discord
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

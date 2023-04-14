import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Testimonials } from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Restaurador de Fotos com IA (GAN)</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
        <a
          href="https://twitter.com/nutlope/status/1626074563481051136"
          target="_blank"
          rel="noreferrer"
          className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          Utilizado por <span className="font-semibold">mais usuários</span> do que você imagina!
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Restauração de fotos antigas{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">usando IA.</span>
            </span>
        </h1>

        <p className="mx-auto mt-12 max-w-xl text-lg font-bold text-slate-700 leading-7">
          Você tem fotos antigas ou borradas? Nossa IA baseada em Redes Adversárias Generativas (GANs) pode restaurá-las! 100% gratuito!
        </p>
        <p className="mx-auto mt-6 max-w-xl text-sm text-slate-700 leading-7">
          * Exemplo de aplicação de Redes Adversárias Generativas (GAN) apresentado em oficina do Laboratório de Aprendizado de Máquinas em Finanças e Organizações, da Universidade de Brasília (Lamfo/UnB). 
          Adaptado de projeto de autoria de Nutlope (vide rodapé) *
        </p>
        <div className="flex justify-center space-x-4">
          <a
            className="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border"
            href="https://youtu.be/FRQtFDDrUXQ"
            target="_blank"
            rel="noreferrer"
          >
            Aprenda como funciona
          </a>

          <Link
            className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
            href="/restore"
          >
            Restaure suas fotos!
          </Link>
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Foto original</h2>
                <Image
                  alt="Original photo of my bro"
                  src="/michael.jpg"
                  className="w-96 h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Foto restaurada</h2>
                <Image
                  alt="Restored photo of my bro"
                  width={400}
                  height={400}
                  src="/michael-new.jpg"
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

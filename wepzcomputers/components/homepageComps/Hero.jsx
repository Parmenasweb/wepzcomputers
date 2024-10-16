import Image from "next/image";
import Link from "next/link";
import StatsComponent from "./Stats";
import WhatsAppButton from "../navComponents/WhatsappClick";

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr  from-blue-500 to-teal-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-32 sm:py-28 lg:pt-32 lg:pb-12 px-4 sm:px-6 lg:px-8">
        {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">

          </div> */}
        <div className="text-center md:text-center order-last md:order-first flex-1">
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-pulse">
              WEPZ Computers
            </h2>
          </div>
          <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Fast & Reliable Laptop Repairs, Custom PC Builds and Upgrades right
            in front of you...
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-lg leading-7 md:leading-8 text-gray-600 dark:text-gray-300">
            we offer on-site repairs, professional upgrades, and custom builds
            made easy right in front of your eyes...
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-start md:justify-center gap-4 sm:gap-x-6">
            <Link
              href="/services"
              className="w-full sm:w-auto rounded-md px-3.5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              About us
            </Link>
            <WhatsAppButton />
          </div>
        </div>
        <div className="image-section md:mt-0 md:ml-8 flex-shrink-0">
          <div className="grid grid-cols-2 ">
            <div className="col-span-2 h-[500px] relative">
              <Image
                src="/images/wepz-3d.webp"
                alt="PC Build and Assemble"
                fill
                className="object-cover object-top w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                priority
              />
            </div>
            {/* <div className="h-[220px] w-full hidden md:flex md:relative">
              <Image
                src="/images/laptop-build.webp"
                alt="Laptop Repair"
                fill
                className="object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="h-[220px] w-full  hidden md:flex md:relative">
              <Image
                src="/images/cpu-upgrade.webp"
                alt="Laptop Upgrade"
                fill
                className="object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div> */}
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-teal-400 text-white opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <StatsComponent />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-lg font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-2">
          <span className="inline-block bg-indigo-100 dark:bg-indigo-900 px-3 py-1 rounded-full">
            Our Services
          </span>
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 dark:text-gray-100 sm:text-5xl">
          Everything you need for your computer
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800 lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)] border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <h3 className="mt-2  font-bold tracking-tight text-gray-950 dark:text-gray-100 max-lg:text-center text-3xl">
                  Laptop Repairs
                </h3>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400 max-lg:text-center">
                  We offer a wide range of laptop repair services, including
                  screen replacement, battery replacement, and more.
                </p>
                <Link
                  href="/services/laptop-desktop-repair"
                  className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-200"
                >
                  Learn More &rarr;
                </Link>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <Image
                    className="size-full object-cover object-top"
                    src="/images/laptop-repair.webp"
                    alt="Laptop Repair"
                    width={700}
                    height={700}
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10 lg:rounded-l-[2rem]"></div>
          </div>

          <div className="relative max-lg:row-start-1 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800 max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <h3 className="mt-2  font-bold tracking-tight text-gray-950 dark:text-gray-100 max-lg:text-center text-3xl">
                  Laptop/PC Upgrades
                </h3>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400 max-lg:text-center">
                  Boost your computer's performance with our expert upgrade
                  services at wepz computers.
                </p>
                <Link
                  href="/services/laptop-desktop-upgrade"
                  className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-200"
                >
                  Learn More &rarr;
                </Link>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                  className="w-full max-lg:max-w-xs rounded-lg"
                  src="/images/pc-upgrade.webp"
                  alt="PC Upgrade"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10 max-lg:rounded-t-[2rem]"></div>
          </div>

          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <h3 className="mt-2  font-bold tracking-tight text-gray-950 dark:text-gray-100 max-lg:text-center text-3xl">
                  Other Tech Repairs
                </h3>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400 max-lg:text-center">
                  Professional data recovery services to retrieve your valuable
                  data and information from your device.
                </p>
                <Link
                  href="/services/other-tech-repairs"
                  className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-200"
                >
                  Learn More &rarr;
                </Link>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <Image
                  className="w-full max-lg:max-w-xs rounded-lg mx-auto"
                  src="/images/motherboard.webp"
                  alt="Data Recovery"
                  width={700}
                  height={700}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10"></div>
          </div>

          <div className="relative lg:row-span-2 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <h3 className="mt-2  font-bold tracking-tight text-gray-950 dark:text-gray-100 max-lg:text-center text-3xl">
                  Custom PC Builds
                </h3>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400 max-lg:text-center">
                  Tailor-made PC builds to meet your specific needs and
                  performance preferences.
                </p>
                <Link
                  href="/services/pc-builds-assembly"
                  className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-200"
                >
                  Learn More &rarr;
                </Link>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <Image
                    className="w-full h-full object-cover"
                    src="/images/pc-build-and-assemble.webp"
                    alt="Custom PC Build"
                    width={700}
                    height={700}
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

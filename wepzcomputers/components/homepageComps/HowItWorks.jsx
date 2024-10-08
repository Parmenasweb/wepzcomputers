import { CheckCircle, Laptop, Wrench, ShieldCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Laptop size={24} className="text-blue-500" />,
      title: "Step 1: Diagnosis",
      description:
        "Bring in your device, and we’ll perform a thorough diagnosis to identify the issue.",
    },
    {
      icon: <Wrench size={24} className="text-blue-500" />,
      title: "Step 2: Repair/Upgrade",
      description:
        "Our experts will perform the necessary repairs or upgrades using quality parts.",
    },
    {
      icon: <ShieldCheck size={24} className="text-blue-500" />,
      title: "Step 3: Quality Check",
      description:
        "We conduct a final quality check to ensure everything is working perfectly.",
    },
    {
      icon: <CheckCircle size={24} className="text-blue-500" />,
      title: "Step 4: Pick Up & Enjoy",
      description:
        "Once done, you can pick up your device and enjoy it like new!",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-center text-lg font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-2">
            <span className="inline-block bg-indigo-100 dark:bg-indigo-900 px-3 py-1 rounded-full">
              Our Process
            </span>
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            How it works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            From diagnosis to delivery, we ensure a smooth and efficient process
            for all your computer needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900 dark:text-gray-100 mb-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-600 dark:to-teal-500">
                    <div className="text-yellow-300">{step.icon}</div>
                  </div>
                  {step.title}
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

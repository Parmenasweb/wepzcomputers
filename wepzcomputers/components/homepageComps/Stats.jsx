import {
  Clock,
  ThumbsUp,
  Award,
  Monitor,
  ShieldCheck,
  Cpu,
} from "lucide-react";

export default function StatsComponent() {
  const stats = [
    { value: "8+", label: "years of experience", icon: Award },
    { value: "3,000+", label: "devices repaired", icon: Monitor },
    { value: "250+", label: "Custom PC Builds", icon: Cpu },
    { value: "24 hours", label: "average repair time", icon: Clock },
    { value: "100%", label: "customer satisfaction", icon: ThumbsUp },
    { value: "6 months", label: "warranty on all repairs", icon: ShieldCheck },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Trusted by customers worldwide
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Experienced technicians dedicated to excellent service.
        </p>
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 transition-transform duration-200 ease-in-out transform hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <stat.icon className="w-8 h-8 mb-2 text-blue-500 dark:text-blue-400" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

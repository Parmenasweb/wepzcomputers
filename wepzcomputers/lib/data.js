import {
  Cpu,
  HardDrive,
  Chip,
  RAM,
  Network,
  Wifi,
  Battery,
  Monitor,
  Shield,
  Keyboard,
  Laptop,
  Video,
  Fan,
  Server,
  Plug,
  Usb,
  Cable,
  Box,
  ShieldCheck,
  Settings,
  Wrench,
  BatteryCharging,
  ShieldAlert,
  Speaker,
  MousePointer,
} from "lucide-react";

export const services = [
  {
    title: "Laptop Repair",
    slug: "laptop-desktop-repair",
    image: "/images/laptop-repair.webp",
    description: "Professional hardware repair services for all laptop brands.",
    features: [
      {
        icon: (
          <Cpu className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Screen Replacement",
        description:
          "Expert LCD and LED screen replacement for all laptop brands.",
      },
      {
        icon: (
          <Battery className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Battery Replacement",
        description:
          "Restore your laptop's mobility with our battery replacement service.",
      },
      {
        icon: (
          <Keyboard className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Keyboard Repair",
        description:
          "we replace the keyboard of your laptop with a new one, if it's not working anymore",
      },
      {
        icon: (
          <HardDrive className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Data Recovery",
        description:
          "we recover your data from your laptop, if you have any important data that you want to save",
      },
      {
        icon: <Shield className="h-8 w-8 mb-2 text-indigo-500" />,
        title: "Virus Removal",
        description:
          "Comprehensive malware removal and system protection services.",
      },
      {
        icon: <Wifi className="h-8 w-8 mb-2 text-purple-500" />,
        title: "Wireless Repairs",
        description:
          "Fix Wi-Fi and Bluetooth connectivity issues for seamless networking.",
      },
    ],
  },
  {
    title: "Laptop upgrade",
    slug: "laptop-desktop-upgrade",
    image: "/images/pc-upgrade.webp",
    description: "Professional hardware repair services for all laptop brands.",
    features: [
      {
        icon: (
          <Cpu className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Processor Upgrade",
        description:
          "Boost your PC’s speed and multitasking abilities with a powerful new processor, perfect for handling demanding applications.",
      },
      {
        icon: (
          <Laptop className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "RAM Upgrade",
        description:
          "Upgrade your PC’s memory to increase performance, enabling smoother operation with larger applications and multitasking.",
      },
      {
        icon: (
          <HardDrive className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "SSD Upgrade",
        description:
          "Upgrade to a high-speed SSD to dramatically reduce boot time, speed up file access, and improve overall system performance.",
      },
      {
        icon: (
          <Video className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Graphics Card Upgrade",
        description:
          "Install a more powerful graphics card to enhance gaming, video editing, and 3D rendering performance.",
      },
      {
        icon: (
          <Fan className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Cooling System Upgrade",
        description:
          "Install an advanced cooling system to keep your PC components running at optimal temperatures, preventing overheating.",
      },
      {
        icon: (
          <Plug className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Power Supply Unit Upgrade",
        description:
          "Upgrade to a more efficient and powerful PSU to support high-performance components and ensure system stability.",
      },
      {
        icon: (
          <Usb className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Port Expansion",
        description:
          "Add more ports such as USB 3.0 or Thunderbolt to expand your PC’s connectivity options.",
      },
      {
        icon: (
          <Network className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Network Card Upgrade",
        description:
          "Install a faster Ethernet or Wi-Fi card for better internet speeds and smoother online gaming or streaming.",
      },
      {
        icon: (
          <Server className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Motherboard Upgrade",
        description:
          "Upgrade your motherboard to support newer, more powerful components like the latest CPUs and GPUs.",
      },
      {
        icon: (
          <HardDrive className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Storage Expansion",
        description:
          "Add more hard drive or SSD storage to accommodate your growing collection of files, games, and applications.",
      },
      {
        icon: (
          <Box className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "PC Case Upgrade",
        description:
          "Upgrade to a stylish and efficient PC case with better airflow, space for additional components, and improved cable management.",
      },
      {
        icon: (
          <Cable className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Cable Management",
        description:
          "Improve airflow and aesthetics by organizing your PC’s internal Cable  with professional cable management solutions.",
      },
    ],
  },
  {
    title: "pc build & assembly",
    slug: "pc-builds-assembly",
    image: "/images/pc-build-and-assemble.webp",
    description: "Professional hardware repair services for all laptop brands.",
    features: [
      {
        icon: (
          <Cpu className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Processor Installation",
        description:
          "Expert installation of the latest processors, ensuring top-tier performance for gaming, productivity, or media creation.",
      },
      {
        icon: (
          <Laptop className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "RAM Installation",
        description:
          "Professionally install RAM modules to maximize multitasking and overall system performance.",
      },
      {
        icon: (
          <Video className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Graphics Card Installation",
        description:
          "Install high-performance GPUs to power gaming, video rendering, and other graphic-intensive applications.",
      },
      {
        icon: (
          <HardDrive className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Storage Installation",
        description:
          "Install HDDs or SSDs, providing the perfect combination of high-speed access and expanded storage capacity.",
      },
      {
        icon: (
          <Fan className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Cooling System Setup",
        description:
          "Install and configure air or liquid cooling systems to prevent overheating and ensure efficient thermal management.",
      },
      {
        icon: (
          <Server className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Motherboard Assembly",
        description:
          "Expert installation of motherboards with proper cable routing, ensuring compatibility and optimal performance of all components.",
      },
      {
        icon: (
          <Plug className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Power Supply Installation",
        description:
          "Install power supply units (PSUs) tailored to your system’s energy demands, ensuring stable and efficient power delivery.",
      },
      {
        icon: (
          <Usb className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Port and Connectivity Setup",
        description:
          "Install and configure USB, Ethernet, HDMI, and other ports to provide full connectivity for all your peripherals.",
      },
      {
        icon: (
          <Cable className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Cable Management",
        description:
          "Organize and secure Cable  for better airflow and a clean, professional look inside your PC build.",
      },
      {
        icon: (
          <Box className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "PC Case Assembly",
        description:
          "Assemble and install all components into the case, ensuring proper fit, airflow, and easy future upgrades.",
      },
      {
        icon: (
          <Monitor className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Monitor and Peripherals Setup",
        description:
          "Connect and configure your monitors, keyboards, mice, and other peripherals for a fully operational setup.",
      },
      {
        icon: (
          <ShieldCheck className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "System Testing & Optimization",
        description:
          "Test and optimize the entire system to ensure all components work seamlessly together and deliver peak performance.",
      },
      {
        icon: (
          <Settings className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "BIOS Configuration",
        description:
          "Configure the BIOS settings for optimal performance and compatibility with your custom hardware setup.",
      },
      {
        icon: (
          <Wrench className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Custom Modifications",
        description:
          "Apply custom modifications such as RGB lighting, case mods, and other aesthetic upgrades for a personalized touch.",
      },
    ],
  },
  {
    title: "other tech repairs",
    slug: "other-tech-repairs",
    image: "/images/motherboard.webp",
    description: "Professional hardware repair services for all laptop brands.",
    features: [
      {
        icon: (
          <BatteryCharging className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Battery Replacement",
        description:
          "Replace your laptop's battery with a high-performance one to ensure longer usage and optimal performance.",
      },
      {
        icon: (
          <Monitor className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Screen Replacement",
        description:
          "Get your damaged or cracked screen replaced with a high-resolution display for a clear and smooth experience.",
      },
      {
        icon: (
          <Cpu className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Processor Upgrade",
        description:
          "Upgrade your laptop’s processor to enhance performance and handle high-demand applications.",
      },
      {
        icon: (
          <Laptop className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "RAM Upgrade",
        description:
          "Increase your laptop's memory to improve multitasking speed and handle heavier tasks efficiently.",
      },
      {
        icon: (
          <HardDrive className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Hard Drive Replacement",
        description:
          "Replace old or malfunctioning hard drives with high-speed SSDs for faster data access and improved performance.",
      },
      {
        icon: (
          <Fan className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Cooling System Repair",
        description:
          "Repair or replace the cooling system to prevent overheating and extend the life of your laptop’s hardware.",
      },
      {
        icon: (
          <Usb className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Port Repair",
        description:
          "Fix broken or malfunctioning USB, HDMI, or other ports to restore full functionality.",
      },
      {
        icon: (
          <Wifi className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Wi-Fi & Network Issues",
        description:
          "Resolve Wi-Fi connection problems, network configuration issues, and faulty wireless cards.",
      },
      {
        icon: (
          <ShieldAlert className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Virus & Malware Removal",
        description:
          "Protect your laptop from malicious software with our comprehensive virus and malware removal services.",
      },
      {
        icon: (
          <Keyboard className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Keyboard Replacement",
        description:
          "Replace damaged or non-functional keyboards with new, high-quality components.",
      },
      {
        icon: (
          <Speaker className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Sound System Repair",
        description:
          "Fix issues related to speakers or audio jacks to restore your laptop’s sound quality.",
      },
      {
        icon: (
          <MousePointer className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
        ),
        title: "Trackpad Repair",
        description:
          "Repair or replace unresponsive or malfunctioning trackpads for smooth navigation.",
      },
    ],
  },
];

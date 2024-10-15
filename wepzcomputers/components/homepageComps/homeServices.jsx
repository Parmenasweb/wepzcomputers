import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Laptop, Droplet, Cpu, Monitor, Wrench, Zap } from "lucide-react";
import Image from "next/image";

export default function HomeServices() {
  const services = [
    {
      icon: <Laptop className="h-8 w-8 mb-2 text-primary" />,
      title: "Laptop Repair",
      description:
        "Fix common laptop issues like screen replacement, keyboard repair, and battery replacement.",
    },
    {
      icon: <Monitor className="h-8 w-8 mb-2 text-primary" />,
      title: "Desktop Repair",
      description:
        "Resolve desktop problems including hardware upgrades, virus removal, and performance optimization.",
    },
    {
      icon: <Droplet className="h-8 w-8 mb-2 text-primary" />,
      title: "Liquid Damage Repair",
      description:
        "Specialized service for repairing water-damaged laptops and desktops.",
    },
    {
      icon: <Cpu className="h-8 w-8 mb-2 text-primary" />,
      title: "Custom PC Build",
      description:
        "Design and build custom PCs tailored to your specific needs and preferences.",
    },
    {
      icon: <Wrench className="h-8 w-8 mb-2 text-primary" />,
      title: "Hardware Upgrades",
      description:
        "Upgrade your computer's RAM, storage, or graphics card for improved performance.",
    },
    {
      icon: <Zap className="h-8 w-8 mb-2 text-primary" />,
      title: "Data Recovery",
      description:
        "Recover lost or deleted data from hard drives, SSDs, and other storage devices.",
    },
  ];

  const commonRepairs = [
    {
      title: "Keyboard Repair",
      description:
        "Fix sticky keys, replace broken keyboards, and resolve connectivity issues.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Motherboard Repair",
      description:
        "Diagnose and fix complex motherboard issues, from component replacement to circuit repair.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Screen Replacement",
      description:
        "Replace cracked or malfunctioning screens for laptops and desktop monitors.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Battery Replacement",
      description:
        "Install new batteries to restore your laptop's portable power and extend its lifespan.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Virus Removal",
      description:
        "Clean infected systems and install robust security measures to prevent future threats.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Data Backup & Recovery",
      description:
        "Safely backup your important files and recover data from failing or corrupted drives.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Our Expert Services
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          From common repairs to custom builds, we've got all your computer
          needs covered.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <div className="flex items-center justify-center">
                {service.icon}
              </div>
              <CardTitle className="text-xl text-center">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">
          Common Repairs & Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commonRepairs.map((repair, index) => (
            <Card key={index} className="flex flex-col h-full">
              <Image
                src={repair.image}
                alt={repair.title}
                width={400}
                height={300}
                className="rounded-t-lg object-cover w-full h-[200px]"
              />
              <CardHeader>
                <CardTitle className="text-xl">{repair.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{repair.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

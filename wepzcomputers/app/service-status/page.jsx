"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  AlertCircle,
  XCircle,
  Clock,
  Laptop,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServiceStatus() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      name: "Hardware Diagnostics",
      status: "operational",
      description: "Comprehensive hardware testing and issue identification",
      estimatedTime: "1-2 hours",
    },
    {
      name: "Software Troubleshooting",
      status: "operational",
      description: "Resolving software conflicts and performance issues",
      estimatedTime: "2-4 hours",
    },
    {
      name: "Data Recovery",
      status: "operational",
      description: "Retrieving lost or corrupted data from storage devices",
      estimatedTime: "4-24 hours",
    },
    {
      name: "Screen Replacement",
      status: "operational",
      description: "Replacing damaged or faulty laptop screens",
      estimatedTime: "2-3 hours",
    },
    {
      name: "Battery Replacement",
      status: "operational",
      description: "Installing new batteries for improved laptop performance",
      estimatedTime: "30 minutes - 1 hour",
    },
    {
      name: "Virus and Malware Removal",
      status: "operational",
      description: "Eliminating harmful software and securing your system",
      estimatedTime: "2-5 hours",
    },
    {
      name: "Laptop Cleaning",
      status: "operational",
      description: "Deep cleaning of laptop internals and externals",
      estimatedTime: "1-2 hours",
    },
    {
      name: "SSD Upgrade",
      status: "operational",
      description:
        "Upgrading to faster solid-state drives for improved performance",
      estimatedTime: "1-3 hours",
    },
    {
      name: "RAM Upgrade",
      status: "operational",
      description: "Increasing system memory for better multitasking",
      estimatedTime: "30 minutes - 1 hour",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "degraded":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case "outage":
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-500">Operational</Badge>;
      case "degraded":
        return <Badge className="bg-yellow-500">Degraded</Badge>;
      case "outage":
        return <Badge className="bg-red-500">Outage</Badge>;
      default:
        return null;
    }
  };

  const overallStatus = services.every(
    (service) => service.status === "operational"
  )
    ? "operational"
    : services.some((service) => service.status === "outage")
    ? "outage"
    : "degraded";

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <Laptop className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">WepzComputers Service Status</h1>
        </div>
        {/* <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button> */}
      </div>

      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">
            Overall System Status
          </CardTitle>
          {getStatusIcon(overallStatus)}
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            {getStatusBadge(overallStatus)}
            <span className="text-lg">
              {overallStatus === "operational"
                ? "All Systems Operational"
                : overallStatus === "degraded"
                ? "Some Systems Degraded"
                : "Major System Outage"}
            </span>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.name}
            className="transition-shadow hover:shadow-lg"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {service.name}
              </CardTitle>
              {getStatusIcon(service.status)}
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
              <div className="mt-2 flex items-center space-x-2">
                {getStatusBadge(service.status)}
                <span className="text-sm text-muted-foreground flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {service.estimatedTime}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Status Legend</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>Operational</span>
          </div>
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
            <span>Degraded</span>
          </div>
          <div className="flex items-center">
            <XCircle className="h-5 w-5 text-red-500 mr-2" />
            <span>Outage</span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-muted-foreground">
        Last updated: {new Date().toLocaleString()}
      </div>
    </div>
  );
}

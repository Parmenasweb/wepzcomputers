import Link from "next/link";
import { Facebook, Instagram, X, Github, Youtube } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white rounded-xl border-2 border-gray-800">
      <div className=" mx-auto py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
          {/* Left Side - Mission */}
          <div className="lg:w-1/4 mb-32">
            <div className="flex flex-col items-start justify-between mb-4">
              <Image
                src="https://wepzcomputers.in/wp-content/uploads/2022/02/cropped-wepz-computers-Logo.png"
                alt="WEPZ Computers Logo"
                width={200}
                height={150}
                quality={100}
                className="text-white font-bold flex items-start mb-2 "
              />
              <p className=" flex  font-semibold">
                Expert laptop repair services to keep you connected.
              </p>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/wepzcomputer"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-white hover:text-blue-500" />
              </Link>
              <Link
                href="https://www.instagram.com/wepzcomputers/"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-white hover:text-orange-500" />
              </Link>
              <Link href="https://twitter.com/WepzComputers" aria-label="X">
                <X className="h-6 w-6 text-white hover:text-blue-500" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCvCOe4UgWGGriCKVQzSasRA"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6 text-white hover:text-red-500" />
              </Link>
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="grid grid-cols-2 p-6 gap-24 lg:grid-cols-4 lg:gap-8 w-[75%] ">
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/laptop-desktop-repair"
                    className="hover:text-indigo-500"
                  >
                    Laptop/PC Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/laptop-desktop-upgrade"
                    className="hover:text-indigo-500"
                  >
                    Laptop/PC Upgrades
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/other-tech-repairs"
                    className="hover:text-indigo-500"
                  >
                    Other Tech Repairs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/pc-builds-assembly"
                    className="hover:text-indigo-500"
                  >
                    Custom PC Builds
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-indigo-500">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/cantact" className="hover:text-indigo-500">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-indigo-500">
                    Warranty Information
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-indigo-500">
                    Service Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="hover:text-indigo-500">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-indigo-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-indigo-500">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.google.com/maps/uv?pb=!1s0x375a59743677c519%3A0xa5c007e030c0bd83!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNzvb1wYZpuhti7-2L2LDne5icP02B_JoaPcR5A%3Dw213-h160-k-no!5swepz%20computers%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipNzvb1wYZpuhti7-2L2LDne5icP02B_JoaPcR5A&hl=en&sa=X&ved=2ahUKEwib_vfYwvD1AhWf4zgGHdRvAK8Qoip6BAgmEAM&cshid=1644337567839149"
                    className="hover:text-indigo-500"
                  >
                    <span className="font-bold">Address:</span>- Dona planet,
                    1st floor, Gs road , guwahati, Assam 781005
                  </Link>
                </li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-indigo-500">
                    <span className="font-bold">Phone:</span>- 9401655366
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-indigo-500">
                    <span className="font-bold">tel:</span> - +91 07399712002
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@wepzcomputers.com"
                    className="hover:text-indigo-500"
                  >
                    <span className="font-bold">Email:</span> -
                    info@wepzcomputers.com
                  </a>
                </li>
                <li>
                  <p className="hover:text-indigo-500">
                    <span className="font-bold">Hours:</span>- Mon-Fri: 9am-6pm
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between border-t border-gray-800 pt-8 text-center lg:text-left">
          <p>
            © {new Date().getFullYear()} WEPZ Computers, Inc. All rights
            reserved.
          </p>
          <p>
            Developed by{" "}
            <a
              href="https://www.example.com"
              className="text-indigo-500 hover:underline"
            >
              ghostDev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

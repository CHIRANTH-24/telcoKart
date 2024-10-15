import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-white py-8 mt-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex-1 max-w-[200px]">
            <h6 className="text-lg font-semibold mb-4 text-white">Know Us</h6>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline text-white" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/team">
                  Our Team
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/press">
                  Press
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 max-w-[200px]">
            <h6 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h6>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline text-white" href="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 max-w-[200px]">
            <h6 className="text-lg font-semibold mb-4 text-white">
              For Business
            </h6>
            <ul className="space-y-2">
              <li>
                <Link className="hover:underline text-white" href="/solutions">
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-white"
                  href="/case-studies"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/enterprise">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/partners">
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-white"
                  href="/contact-sales"
                >
                  Contact Sales
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 max-w-[200px]">
            <h6 className="text-lg font-semibold mb-4 text-white">
              For Startups
            </h6>
            <ul className="space-y-2">
              <li>
                <Link
                  className="hover:underline text-white"
                  href="/startup-resources"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/mentorship">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/incubators">
                  Incubators
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/grants">
                  Grants
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline text-white"
                  href="/startup-events"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 max-w-[200px]">
            <h6 className="text-lg font-semibold mb-4 text-white">
              Quick Connects
            </h6>
            <ul className="space-y-2">
              <li>
                <Link
                  className="hover:underline text-white"
                  href="/social-media"
                >
                  Social Media
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/newsletter">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/feedback">
                  Feedback
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/support">
                  Support
                </Link>
              </li>
              <li>
                <Link className="hover:underline text-white" href="/community">
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 px-4 border-t border-gray-700 pt-4">
        <p className="text-sm text-center text-gray-400">
          &copy; 2024 TelcoKart. All rights reserved.
        </p>
        <p className="text-sm text-center text-gray-400 mt-2">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/company/novus-webspace-technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Novus Webspace Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}

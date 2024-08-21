import { Link } from 'lucide-react';
import React from 'react';// or any routing library you're using
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="flex-1 max-w-[200px]">
              <h6 className="text-lg font-semibold mb-4">Know Us</h6>
              <ul className="space-y-2">
                <li>
                  <Link href="/about">
                    <a className="hover:underline">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/team">
                    <p className="hover:underline">Our Team</p>
                  </Link>
                </li>
                <li>
                  <Link href="/careers">
                    <a className="hover:underline">Careers</a>
                  </Link>
                </li>
                <li>
                  <Link href="/press">
                    <a className="hover:underline">Press</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="hover:underline">Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 max-w-[200px]">
              <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
              <ul className="space-y-2">
                <li>
                  <Link href="/home">
                    <a className="hover:underline">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="hover:underline">Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <a className="hover:underline">Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a className="hover:underline">Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a className="hover:underline">FAQ</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 max-w-[200px]">
              <h6 className="text-lg font-semibold mb-4">For Business</h6>
              <ul className="space-y-2">
                <li>
                  <Link href="/solutions">
                    <a className="hover:underline">Solutions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies">
                    <a className="hover:underline">Case Studies</a>
                  </Link>
                </li>
                <li>
                  <Link href="/enterprise">
                    <a className="hover:underline">Enterprise</a>
                  </Link>
                </li>
                <li>
                  <Link href="/partners">
                    <a className="hover:underline">Partners</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-sales">
                    <a className="hover:underline">Contact Sales</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 max-w-[200px]">
              <h6 className="text-lg font-semibold mb-4">For Startups</h6>
              <ul className="space-y-2">
                <li>
                  <Link href="/startup-resources">
                    <a className="hover:underline">Resources</a>
                  </Link>
                </li>
                <li>
                  <Link href="/mentorship">
                    <a className="hover:underline">Mentorship</a>
                  </Link>
                </li>
                <li>
                  <Link href="/incubators">
                    <a className="hover:underline">Incubators</a>
                  </Link>
                </li>
                <li>
                  <Link href="/grants">
                    <a className="hover:underline">Grants</a>
                  </Link>
                </li>
                <li>
                  <Link href="/startup-events">
                    <a className="hover:underline">Events</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 max-w-[200px]">
              <h6 className="text-lg font-semibold mb-4">Quick Connects</h6>
              <ul className="space-y-2">
                <li>
                  <Link href="/social-media">
                    <a className="hover:underline">Social Media</a>
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter">
                    <a className="hover:underline">Newsletter</a>
                  </Link>
                </li>
                <li>
                  <Link href="/feedback">
                    <a className="hover:underline">Feedback</a>
                  </Link>
                </li>
                <li>
                  <Link href="/support">
                    <a className="hover:underline">Support</a>
                  </Link>
                </li>
                <li>
                  <Link href="/community">
                    <a className="hover:underline">Community</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer

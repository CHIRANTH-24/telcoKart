import  Link  from 'next/link';
import React from 'react';
const Footer = () => {
  return (
    <div>
      <footer className="custom-class text-white py-8">
        <div className="container mx-auto px-4 ">
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
                  <Link className="hover:underline" href="/team">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/careers">
                   Careers
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/press">
                   Press
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/contact">
                   Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 max-w-[200px]">
              <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:underline" href="/home">
                   Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/services">
                   Services
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/pricing">
                   Pricing
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/blog">
                   Blog
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/faq">
                   FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 max-w-[200px]">
              <h6 className="text-lg font-semibold mb-4">For Business</h6>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:underline" href="/solutions">
                   Solutions
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/case-studies">
                   Case Studies
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/enterprise">
                   Enterprise
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/partners">
                   Partners
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/contact-sales">
                   Contact Sales
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 max-w-[200px]">
              <h6 className="text-lg font-semibold mb-4">For Startups</h6>
              <ul className="space-y-2">
                <li>
                  <Link href="/startup-resources">
                   Resources
                  </Link>
                </li>
                <li>
                  <Link href="/mentorship">
                   Mentorship
                  </Link>
                </li>
                <li>
                  <Link href="/incubators">
                   Incubators
                  </Link>
                </li>
                <li>
                  <Link href="/grants">
                   Grants
                  </Link>
                </li>
                <li>
                  <Link href="/startup-events">
                   Events
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 max-w-[200px]">
              <h6 className="text-lg font-semibold mb-4">Quick Connects</h6>
              <ul className="space-y-2">
                <li>
                  <Link href="/social-media">
                   Social Media
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter">
                   Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="/feedback">
                   Feedback
                  </Link>
                </li>
                <li>
                  <Link href="/support">
                   Support
                  </Link>
                </li>
                <li>
                  <Link href="/community">Community</Link>
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

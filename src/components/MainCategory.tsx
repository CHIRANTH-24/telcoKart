import Link from "next/link";
import { Card, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  FileQuestion,
  Users,
  Download,
  FileText,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
const fixedPath = "/form";
const handleNavigation = () => {
  window.location.href =
    "https://forms.zohopublic.in/Connectivities/form/PrePaid/formperma/IIKOLB5-hSUMY8DOdzltvDmb174CIKw3F6SrT6QkJ8k"; // Replace with your desired path
};
const cardItems = [
  { id: 1, name: "Mobility", logo: "/images/mobility27.png" },
  { id: 2, name: "Data Connectivity", logo: "/images/Data Connectivity.png" },
  {
    id: 3,
    name: "Digital Voice and Solutions",
    logo: "/images/Digital Voice.png",
  },
  { id: 4, name: "SMS and BOTS", logo: "/images/sms.png" },
  { id: 5, name: "Electronics", logo: "/images/electronics.png" },
  { id: 6, name: "Cyber Security", logo: "/images/cyber.png" },
  { id: 7, name: "Data Center and Cloud", logo: "/images/datacenter.png" },
  { id: 8, name: "Software", logo: "/images/software27.png" },
  { id: 9, name: "Gig Community", logo: "/images/gig-economy.png" },
  { id: 10, name: "Startups", logo: "/images/Startup.png" },
];

const mobilityItems = [
  "Pre-Paid",
  "Post paid",
  "MNP",
  "Prepaid to Postpaid",
  "Data SIMs ( No Voice)",
  "Machine 2 Machine SIMs",
  "Asset Tracking",
  "Location Tracking",
  "Manpower Tracking",
  "Vehicle Telematics SIMs",
  "Industrial Asset Monitoring",
  "Smart Genset Monitoring",
  "IoT Whitelisting Solution",
];

const dataConnectivityItems = [
  "Broadband",
  "Internet Leased Line",
  "MPLS",
  "Global MPLS",
  "IPLC",
  "NLD",
  "VSAT",
  "Satellite Connect (LEO)",
  "Managed WiFi",
  "Google Connect",
  "Amazon Connect",
  "Azure Connect",
  "OPGW Fiber",
];

const digitalVoiceItems = [
  "PRI - SIP",
  "Toll Free",
  "Contact Centre",
  "Business Caller ID",
  "Conferencing Solution",
  "Unified Communication",
  "Mobile Number CLI",
  "Landline CLI",
  "Number Masking",
  "IVR Solution",
  "Click To Call",
  "Dialer",
  "Missed Call Solution",
  "Sim Based Recording",
  "Cpaas (Communication Platform as Service)",
  "Local Business Number (50+ Countries)",
  "eKYC",
  "e-Stamp",
  "e-Sign",
];
const smsBotsItems = [
  "Promotional",
  "Transactional",
  "Authentication & Verification",
  "SMS Reminders",
  "SMS Notifications",
  "RCS",
  "In-App-Massaging",
  "Mobile Push Notification",
  "Google Business Massages",
  "Apple Business Massages",
  "Authentication 2FA Solution",
  "Website BoT",
  "WhatsAPP BoT",
  "Voice BoT",
  "Instagram BoT",
  "Telegram BoT",
  "AI + ChatGPT BoT",
  "Omni Channel BoT",
  "APIs",
];
const cloudDataCentreItems = [
  "Colocation",
  "DR Solution",
  "Private Cloud",
  "Public Cloud",
  "Hybrid Cloud",
  "Edge CDN",
  "Cloud Managed Services",
  "Data Centre Built",
];
const cloudSecurityItems = [
  "Cloud Access Security Broker (CASB)",
  "Cloud Security Posture Management (CSPM)",
];
const cyberSecurityItems = [
  "Network Security ",
  "Endpoint Security ",
  "Data Security ",
  "Identity and Access Management (IAM) ",
  "Cloud Security ",
  "Application Security ",
  "Incident Response ",
  "Threat Intelligence ",
  "Governance, Risk, and Compliance (GRC) ",
  "Security Orchestration Automation and Response (SOAR) ",
  "Security Information and Event Management (SIEM) ",
  "Physical Security ",
  "DDI Solutions ",
  "Distributed Denial of Service (DDoS) ",
  "Security Operations Center (SOC) ",
];
const dataCenterCloudItems = [
  "Colocation",
  "DR Solution",
  "Private Cloud",
  "Public Cloud",
  "Hybrid Cloud",
  "Edge CDN",
  "Cloud Managed Services",
  "Data Centre Built",
];
const gigCommunityItems = [
  "Download App and Discover",
  "Perform Tasks or Projects",
  "Submit Proof of Work",
  "Get Paid",
];

export default function   Component() {
  const renderDropdownItems = (items: string[]) =>
    items.map((subItem, index) => (
      <DropdownMenuSub key={index}>
        <DropdownMenuSubTrigger className="text-xs">
          {subItem}
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <Link
            href="https://forms.zohopublic.in/Connectivities/form/PrePaid/formperma/IIKOLB5-hSUMY8DOdzltvDmb174CIKw3F6SrT6QkJ8k"
            target="_blank"
            aria-label="Pre-Paid Form"
            passHref
          >
            <DropdownMenuSubContent>
              {
                <DropdownMenuItem onClick={handleNavigation}>
                  <FileQuestion className="mr-2 h-4 w-4" />
                  <span className="text-xs">Submit Enquiry</span>
                </DropdownMenuItem>
              }
              {subItem !== "Pre-Paid" &&
                subItem !== "Post paid" &&
                subItem !== "MNP" &&
                subItem !== "Prepaid to Postpaid" &&
                subItem !== "Data SIMs ( No Voice)" &&
                subItem !== "Broadband" &&
                subItem !== "Internet Leased Line" &&
                subItem !== "IPLC" &&
                subItem !== "NLD" &&
                subItem !== "Managed WiFi" &&
                subItem !== "Google Connect" &&
                subItem !== "Amazon Connect" &&
                subItem !== "Azure Connect" &&
                subItem !== "OPGW Fiber" &&
                subItem !== "PRI - SIP" &&
                subItem !== "Toll Free" &&
                subItem !== "Conferencing Solution" &&
                subItem !== "Mobile Number CLI" &&
                subItem !== "Landline CLI" &&
                subItem !== "Number Masking" &&
                subItem !== "Click To Call" &&
                subItem !== "Missed Call Solution" &&
                subItem !== "Sim Based Recording" &&
                subItem !== "Apis" && (
                  <DropdownMenuItem onClick={handleNavigation}>
                    <Users className="mr-2 h-4 w-4" />
                    <span className="text-xs">Schedule Meeting</span>
                  </DropdownMenuItem>
                )}
              {subItem !== "Pre-Paid" &&
                subItem !== "Post paid" &&
                subItem !== "MNP" &&
                subItem !== "Prepaid to Postpaid" &&
                subItem !== "Data SIMs ( No Voice)" &&
                subItem !== "Vehicle Telematics SIMs" &&
                subItem !== "Pre-Paid" &&
                subItem !== "Post paid" &&
                subItem !== "MNP" &&
                subItem !== "Prepaid to Postpaid" &&
                subItem !== "Data SIMs ( No Voice)" &&
                subItem !== "Vehicle Telematics SIMs" &&
                subItem !== "Data Connectivity" &&
                subItem !== "Broadband" &&
                subItem !== "Internet Leased Line" &&
                subItem !== "MPLS" &&
                subItem !== "Global MPLS" &&
                subItem !== "IPLC" &&
                subItem !== "NLD" &&
                subItem !== "Managed WiFi" &&
                subItem !== "Google Connect" &&
                subItem !== "Amazon Connect" &&
                subItem !== "Azure Connect" &&
                subItem !== "OPGW Fiber" &&
                subItem !== "Digital Voice Solutions" &&
                subItem !== "Conferencing Solution" &&
                subItem !== "Mobile Number CLI" &&
                subItem !== "Landline CLI" &&
                subItem !== "Number Masking" &&
                subItem !== "Sim Based Recording" &&
                subItem !== "SMS & Bots" &&
                subItem !== "SMS Reminders" &&
                subItem !== "SMS Notifications" &&
                subItem !== "RCS" &&
                subItem !== "In-App-Massaging" &&
                subItem !== "Mobile Push Notification" &&
                subItem !== "Cloud & Data Centre" &&
                subItem !== "Data Centre Built" &&
                subItem !== "Cyber Security" &&
                subItem !== "Network Security" &&
                subItem !== "Network Segmentation" &&
                subItem !== "Endpoint Security" &&
                subItem !== "Data Security" &&
                subItem !== "Identity and Access Management (IAM)" &&
                subItem !== "Privileged Access Management (PAM)" &&
                subItem !== "Cloud Security" &&
                subItem !== "Application Security" &&
                subItem !== "Incident Response" &&
                subItem !== "Threat Intelligence" &&
                subItem !== "Governance, Risk, and Compliance (GRC)" &&
                subItem !==
                  "Security Orchestration Automation and Response (SOAR)" &&
                subItem !==
                  "Security Information and Event Management (SIEM)" &&
                subItem !== "SIEM Solution" &&
                subItem !== "Physical Security" &&
                subItem !== "DDI Solutions" &&
                subItem !== "Distributed Denial of Service (DDoS)" &&
                subItem !== "Security Operations Center (SOC)" &&
                subItem !== "Gig Economy" &&
                subItem !== "For Business" &&
                subItem !== "Promotion" &&
                subItem !== "Social Media Post Engagement" &&
                subItem !== "Telegram Channel Promotion" &&
                subItem !== "Mobile App Promotion" &&
                subItem !== "WhatsApp Group Promotion" &&
                subItem !== "Content Writing" &&
                subItem !== "Translation and Transcription" &&
                subItem !== "LinkedIn Page Management" &&
                subItem !== "Online Reputation Management" &&
                subItem !== "Fintech Acquisition" &&
                subItem !== "Credit Card Acquisition" &&
                subItem !== "Demat Account Opening" &&
                subItem !== "Debit Card Acquisition" &&
                subItem !== "Savings Account Opening" &&
                subItem !== "User Acquisition" &&
                subItem !== "Google and Facebook Ads" &&
                subItem !== "Search Engine Optimization" &&
                subItem !== "Public Relations" &&
                subItem !== "Social Media Management" &&
                subItem !== "Designing" &&
                subItem !== "UI/UX Designing" &&
                subItem !== "Graphic Designing" &&
                subItem !== "Development" &&
                subItem !== "Mobile App Development" &&
                subItem !== "Website Development" &&
                subItem !== "Data" &&
                subItem !== "Data Entry" &&
                subItem !== "Data Analytics" &&
                subItem !== "Data Mining" &&
                subItem !== "Catalog Management" &&
                subItem !== "Research" &&
                subItem !== "Market Research" &&
                subItem !== "Online Survey" &&
                subItem !== "Mystery Auditing" &&
                subItem !== "Product Sampling" &&
                subItem !== "Branding" &&
                subItem !== "Influencer Marketing" &&
                subItem !== "LinkedIn Profile Management" &&
                subItem !== "Lead Management" &&
                subItem !== "Website Registrations" &&
                subItem !== "Tele Calling" &&
                subItem !== "For Gig" &&
                subItem !== "Download App and Discover" &&
                subItem !== "Perform Tasks or Projects" &&
                subItem !== "Submit Proof of Work" &&
                subItem !== "Get Paid" &&
                subItem !== "Hardware" &&
                subItem !== "Software" &&
                subItem !== "Forms" &&
                subItem !== "Forms-Automation-DMS" &&
                subItem !== "CRM" &&
                subItem !== "Asset Management" &&
                subItem !== "Patch Management" &&
                subItem !== "Productivity Management" &&
                subItem !== "Data Center Management" &&
                subItem !== "Payroll Management" &&
                subItem !== "Startups" &&
                subItem !== "Virtual Office" &&
                subItem !== "Co-working Space" &&
                subItem !== "Pitch Deck Review*Free" &&
                subItem !== "Teaser Pitch" &&
                subItem !== "Investor Proposal" &&
                subItem !== "Financial Projections" &&
                subItem !== "Fund Raising Consulting" &&
                subItem !== "Investor Meet & Fund Raise" &&
                subItem !== "Incorporation" &&
                subItem !== "IPR" &&
                subItem !== "Contracts & Agreements Management" &&
                subItem !== "Legal Advisory" &&
                subItem !== "Statutory Compliance" &&
                subItem !== "Legal & Compliance Audit" &&
                subItem !== "Policy & Procedures" &&
                subItem !== "Licenses & Certifications" && (
                  <DropdownMenuItem onClick={handleNavigation}>
                    <Download className="mr-2 h-4 w-4" />
                    <span className="text-xs">Download</span>
                  </DropdownMenuItem>
                )}
              {subItem !== "Pre-Paid" &&
                subItem !== "Post paid" &&
                subItem !== "MNP" &&
                subItem !== "Prepaid to Postpaid" &&
                subItem !== "Data SIMs ( No Voice)" &&
                subItem !== "Vehicle Telematics SIMs" &&
                subItem !== "Pre-Paid" &&
                subItem !== "Post paid" &&
                subItem !== "MNP" &&
                subItem !== "Prepaid to Postpaid" &&
                subItem !== "Data SIMs ( No Voice)" &&
                subItem !== "Vehicle Telematics SIMs" &&
                subItem !== "Data Connectivity" &&
                subItem !== "Broadband" &&
                subItem !== "Internet Leased Line" &&
                subItem !== "MPLS" &&
                subItem !== "Global MPLS" &&
                subItem !== "IPLC" &&
                subItem !== "NLD" &&
                subItem !== "Managed WiFi" &&
                subItem !== "Google Connect" &&
                subItem !== "Amazon Connect" &&
                subItem !== "Azure Connect" &&
                subItem !== "OPGW Fiber" &&
                subItem !== "Digital Voice Solutions" &&
                subItem !== "PRI - SIP" &&
                subItem !== "Toll Free" &&
                subItem !== "Contact Centre" &&
                subItem !== "Conferencing Solution" &&
                subItem !== "Sim Based Recording" &&
                subItem !== "SMS & Bots" &&
                subItem !== "Promotional" &&
                subItem !== "Transactional" &&
                subItem !== "SMS Reminders" &&
                subItem !== "SMS Notifications" &&
                subItem !== "RCS" &&
                subItem !== "In-App-Massaging" &&
                subItem !== "Mobile Push Notification" &&
                subItem !== "Cloud & Data Centre" &&
                subItem !== "Data Centre Built" &&
                subItem !== "Cyber Security" &&
                subItem !== "Network Security" &&
                subItem !== "Network Segmentation" &&
                subItem !== "Endpoint Security" &&
                subItem !== "Data Security" &&
                subItem !== "Identity and Access Management (IAM)" &&
                subItem !== "Cloud Security" &&
                subItem !== "Gig Economy" &&
                subItem !== "For Business" &&
                subItem !== "Promotion" &&
                subItem !== "Social Media Post Engagement" &&
                subItem !== "Telegram Channel Promotion" &&
                subItem !== "Mobile App Promotion" &&
                subItem !== "WhatsApp Group Promotion" &&
                subItem !== "Content Writing" &&
                subItem !== "Translation and Transcription" &&
                subItem !== "LinkedIn Page Management" &&
                subItem !== "Online Reputation Management" &&
                subItem !== "Fintech Acquisition" &&
                subItem !== "Credit Card Acquisition" &&
                subItem !== "Demat Account Opening" &&
                subItem !== "Debit Card Acquisition" &&
                subItem !== "Savings Account Opening" &&
                subItem !== "User Acquisition" &&
                subItem !== "Google and Facebook Ads" &&
                subItem !== "Search Engine Optimization" &&
                subItem !== "Public Relations" &&
                subItem !== "Social Media Management" &&
                subItem !== "Designing" &&
                subItem !== "UI/UX Designing" &&
                subItem !== "Graphic Designing" &&
                subItem !== "Development" &&
                subItem !== "Mobile App Development" &&
                subItem !== "Website Development" &&
                subItem !== "Data" &&
                subItem !== "Data Entry" &&
                subItem !== "Data Analytics" &&
                subItem !== "Data Mining" &&
                subItem !== "Catalog Management" &&
                subItem !== "Research" &&
                subItem !== "Market Research" &&
                subItem !== "Online Survey" &&
                subItem !== "Mystery Auditing" &&
                subItem !== "Product Sampling" &&
                subItem !== "Branding" &&
                subItem !== "Influencer Marketing" &&
                subItem !== "LinkedIn Profile Management" &&
                subItem !== "Lead Management" &&
                subItem !== "Website Registrations" &&
                subItem !== "Tele Calling" &&
                subItem !== "For Gig" &&
                subItem !== "Download App and Discover" &&
                subItem !== "Perform Tasks or Projects" &&
                subItem !== "Submit Proof of Work" &&
                subItem !== "Get Paid" &&
                subItem !== "Software" &&
                subItem !== "Forms" &&
                subItem !== "Forms-Automation-DMS" &&
                subItem !== "CRM" &&
                subItem !== "Asset Management" &&
                subItem !== "Patch Management" &&
                subItem !== "Productivity Management" &&
                subItem !== "Data Center Management" &&
                subItem !== "Payroll Management" &&
                subItem !== "Startups" &&
                subItem !== "Virtual Office" &&
                subItem !== "Co-working Space" &&
                subItem !== "Pitch Deck Review*Free" &&
                subItem !== "Teaser Pitch" &&
                subItem !== "Investor Proposal" &&
                subItem !== "Financial Projections" &&
                subItem !== "Fund Raising Consulting" &&
                subItem !== "Investor Meet & Fund Raise" &&
                subItem !== "Incorporation" &&
                subItem !== "IPR" &&
                subItem !== "Contracts & Agreements Management" &&
                subItem !== "Legal Advisory" &&
                subItem !== "Statutory Compliance" &&
                subItem !== "Legal & Compliance Audit" &&
                subItem !== "Policy & Procedures" &&
                subItem !== "Licenses & Certifications" && (
                  <DropdownMenuItem onClick={handleNavigation}>
                    <FileText className="mr-2 h-4 w-4" />
                    <span className="text-xs">Use Case</span>
                  </DropdownMenuItem>
                )}
              <DropdownMenuItem onClick={handleNavigation}>
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="text-xs">WhatsApp Chat</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </Link>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    ));

  return (
    <div className="px-2 py-4 max-h-24 pt-0 mt-2 flex justify-center">
      <div className=" flex space-x-2 ">
        {cardItems.map((item) => (
          <Card
            key={item.id}
            className="min-h-8  flex items-center justify-between p-2 h-20 w-20 sm:h-24 sm:w-24 outline-none shadow-none border-none"
          >
            <CardHeader className="flex flex-col items-center justify-between  p-0 space-y-1">
              <Image
                src={item.logo}
                alt={item.name}
                width={42}
                height={42}
                className="mb-1"
              />
              <div className="flex">
                <div className="flex flex-col items-center justify-between w-full">
                  <p className="text-center text-[0.6rem] leading-tight font-bold">
                    {item.name}
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    <ChevronDown className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4 pt-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.name === "Mobility" &&
                      renderDropdownItems(mobilityItems)}
                    {item.name === "Data Connectivity" &&
                      renderDropdownItems(dataConnectivityItems)}
                    {item.name === "Digital Voice and Solutions" &&
                      renderDropdownItems(digitalVoiceItems)}
                    {item.name === "SMS and BOTS" &&
                      renderDropdownItems(smsBotsItems)}
                    {item.name === "Cloud & Data Centre" &&
                      renderDropdownItems(cloudDataCentreItems)}
                    {item.name === "Cloud Security" &&
                      renderDropdownItems(cloudSecurityItems)}
                    {item.name === "Cyber Security" &&
                      renderDropdownItems(cyberSecurityItems)}
                    {item.name === "Data Center and Cloud" &&
                      renderDropdownItems(dataCenterCloudItems)}
                    {item.name === "Gig Community" &&
                      renderDropdownItems(gigCommunityItems)}
                    {/* {item.name !== "Mobility" &&
                      item.name !== "Data Connectivity" && (
                        <DropdownMenuItem className="text-xs">
                          No options available
                        </DropdownMenuItem>
                      )} */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

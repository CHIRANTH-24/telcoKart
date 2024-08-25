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

export default function Component() {
  const renderDropdownItems = (items: string[]) =>
    items.map((subItem, index) => (
      <DropdownMenuSub key={index}>
        <DropdownMenuSubTrigger className="text-xs">
          {subItem}
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <Link href="https://forms.zohopublic.in/Connectivities/form/PrePaid/formperma/IIKOLB5-hSUMY8DOdzltvDmb174CIKw3F6SrT6QkJ8k" target="_blank" aria-label="Pre-Paid Form" passHref>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={handleNavigation}>
                <FileQuestion className="mr-2 h-4 w-4" />
                <span className="text-xs">Enquiry</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleNavigation}>
                <Users className="mr-2 h-4 w-4" />
                <span className="text-xs">Enquiry Discussion Meeting</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleNavigation}>
                <Download className="mr-2 h-4 w-4" />
                <span className="text-xs">Download</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleNavigation}>
                <FileText className="mr-2 h-4 w-4" />
                <span className="text-xs">Use Case</span>
              </DropdownMenuItem>
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
    <div className="px-2 py-4">
      <div className=" flex    justify-between items-stretch  space-x-2 ">
        {cardItems.map((item) => (
          <Card
            key={item.id}
            className="flex-shrink-0 flex flex-col items-center justify-between p-2 h-20 w-20 sm:h-24 sm:w-24 outline-none shadow-none border-none"
          >
            <CardHeader className="flex flex-col items-center justify-between w-full p-0 space-y-1">
              <Image
                src={item.logo}
                alt={item.name}
                width={42}
                height={42}
                className="mb-1"
              />
              <div className="flex flex-col items-center justify-between w-full">
                <p className="text-center text-[0.6rem] leading-tight font-bold">
                  {item.name}
                </p>
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    <ChevronDown className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4" />
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

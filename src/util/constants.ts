import {
  FileQuestion,
  MessageCircle,
  Download,
  FileText,
  Users,
} from "lucide-react";

export const CATEGORY_ACTIONS = [
  //add more actions here
  {
    label: "whatsapp chat",
    Icon: MessageCircle,
  },
  {
    label: "submit enquiry",
    Icon: FileQuestion,
  },
  {
    label: "schedule meeting",
    Icon: Users,
  },
  {
    label: "usecase",
    Icon: FileText,
  },
  {
    label: "download",
    Icon: Download,
  },
];

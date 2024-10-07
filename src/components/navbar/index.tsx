import Link from "next/link";
import NavItem from "@/components/navbar/nav-item";
import Searchbar from "@/components/navbar/searchbar";
import NavActions from "@/components/navbar/actions";
import Logo from "@/components/globals/logo";

export default function Navabar() {
  return (
    <nav className="max-w-screen-2xl mx-auto fixed inset-0 z-50 h-16 grid place-items-center bg-white border-b border-b-gray-200 shadow-lg">
      <div className="w-full flex items-center justify-between gap-4 px-8">
        <Link href="/">
          <Logo />
        </Link>
        <Searchbar />
        <div className="flex items-center gap-6">
          <NavItem label="Advertise" href="" />
          <NavItem label="List Business" href="" />
          <NavItem label="Get Advice" href="" />
          <NavActions />
        </div>
      </div>
    </nav>
  );
}

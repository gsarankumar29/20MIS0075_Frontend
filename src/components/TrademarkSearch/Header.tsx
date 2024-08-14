
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col pt-6 pb-px bg-slate-50 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start self-stretch ml-8 w-full text-sm font-semibold text-white max-w-[1263px] max-md:max-w-full">
        <div className="flex gap-8 items-start">
          <div>Call Us: 1-877-794-9511</div>
          <div>Email Us</div>
        </div>
        <nav className="flex gap-8 items-start whitespace-nowrap">
          <a href="#services">Services</a>
          <a href="#attorneys">Attorneys</a>
          <a href="#support">Support</a>
          <a href="#login">Login</a>
        </nav>
      </div>
      <div className="flex shrink-0 mt-7 bg-indigo-50 h-[9px] max-md:max-w-full" />
    </header>
  );
};

export default Header;


import { TbBackground, TbMenu } from 'react-icons/tb';
import logo from '/assets/img/react-bits-logo.svg';

const NavBar = () => {
  return (
    <div className="absolute top-8 left-0 w-full h-15 z-0 pointer-events-none">
      <div className="mx-auto w-[90%] md:w-[60%] h-full rounded-[50px] py-4 px-6 flex items-center justify-between bg-white/5 backdrop-blur-[10px] border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <img
          src={logo}
          alt="React Bits Logo"
          className="h-10 rounded-[10px]"
        />

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden items-center text-white">
          <TbMenu size={20} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 font-semibold">
          <span className="text-white text-sm flex items-center">
            Home
          </span>
          <span className="text-white text-sm flex items-center">
            Docs
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
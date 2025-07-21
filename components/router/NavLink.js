import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, children, className }) => {
    const router = useRouter();
    const isActive = router.pathname === href;
  
    return (
      <Link 
      href={href} 
      className={isActive ? `${className} active` : className}
      >
        {children}
      </Link>
    );
  };

export default NavLink
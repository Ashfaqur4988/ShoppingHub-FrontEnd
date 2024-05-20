import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "gfgf", role: "admin" };

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const logoutHandler = () => {};
  return (
    <nav className="flex flex-row justify-end items-stretch gap-5">
      <Link
        className="text-[#2E2E2E] tracking-widest font-serif hover:text-[#006888]"
        onClick={() => setIsOpen(false)}
        to={"/"}
      >
        Home
      </Link>
      <Link
        className="text-[#2E2E2E] tracking-widest font-serif hover:text-[#006888]"
        onClick={() => setIsOpen(false)}
        to={"/search"}
      >
        <FaSearch>Search</FaSearch>
      </Link>
      <Link
        className="text-[#2E2E2E] tracking-widest font-serif hover:text-[#006888]"
        onClick={() => setIsOpen(false)}
        to={"/cart"}
      >
        <FaShoppingBag>Cart</FaShoppingBag>
      </Link>
      {user?._id ? (
        //if user present
        <>
          <button
            className="cursor-pointer border-none text-xl hover:hover:text-[#006888] bg-transparent"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FaUser>User</FaUser>
            {/*if user admin then do the dialogue box part */}
            <dialog
              className="rounded-md border-solid border-2 border-[#ccc] p-3 absolute left-[calc(100%-170px)] top-8"
              open={isOpen}
            >
              <div className="flex flex-col justify-start items-center gap-1">
                {user.role === "admin" && (
                  <Link to={"admin/dashboard"}>Admin</Link>
                )}
                <Link to={"/orders"}>Orders</Link>
                <button>
                  <FaSignOutAlt onClick={logoutHandler}>SignOut</FaSignOutAlt>
                </button>
              </div>
            </dialog>
          </button>
        </>
      ) : (
        //if user not preset, button for login page
        <Link to={"/login"}>
          <FaSignInAlt>Login</FaSignInAlt>
        </Link>
      )}
    </nav>
  );
};
export default Header;

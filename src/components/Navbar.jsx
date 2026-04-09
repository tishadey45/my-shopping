import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar flex justify-between bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
      
        </div>
        <a className="font-bold text-3xl"><span className="text-indigo-700">e</span>Shopping</a>
      </div>
      <div className="">
        <ul className="menu menu-horizontal flex gap-4 px-1 text-lg">
        <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
        <Link href="/myOrder">My order</Link>
        <Link href="/dashboard">Dashboard</Link>
        </ul>
      </div>
    </div>
  );
}

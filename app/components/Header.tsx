import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  const bottomNavLinks = [
    "Prime Video",
    "Amazon Business",
    "Todays' Deals",
    "Electronics",
    "Food & Grocery",
    "Prime",
    "Buy Again",
    "Shopper Toolkit",
    "Health & Personal Care",
  ];
  return (
    <header className="">
      {/* TOP CONTAINER */}
      <div className="flex items-center bg-amazon_blue  p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <img
            src="https://links.papareact.com/f90"
            alt="Amazon logo"
            width="110"
            height="40"
            className="cursor-pointer  object-contain"
          />
        </div>

        {/* SEARCH */}
        <div className="hidden sm:flex flex-grow ml-4  items-center cursor-pointer h-10  rounded-md  bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="h-full flex-grow px-4 focus:outline-none flex-shrink rounded-l-md"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* RIGHT */}
        <div className="text-white whitespace-nowrap text-xs mx-6 flex items-center space-x-6">
          <div className="cursor-pointer hover:underline ">
            <p>Hello janvier</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="cursor-pointer hover:underline">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">&Orders</p>
          </div>
          <div className="relative cursor-pointer items-center flex hover:underline">
            <span className="absolute right-0 top-0 md:right-10 h-4 w-4 text-center rounded-full text-black font-bold bg-yellow-400">
              0
            </span>
            <ShoppingCartIcon className="h-8  mt-2" />
            <p className="font-extrabold hidden sm:block md:text-sm">Basket</p>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="flex items-center  space-x-3 p-2 pl-6 bg-amazon_blue-light text-gray-300 text-sm">
        <p className="flex items-center cursor hover:underline">
          <MenuIcon className="h-6 mr-1" /> All{" "}
        </p>
        {bottomNavLinks.map((link, index) => (
          <p
            key={index}
            className="cursor-pointer hover:underline hover:text-white  hidden sm:inline-flex"
          >
            {link}
          </p>
        ))}
      </div>
    </header>
  );
}

export default Header;

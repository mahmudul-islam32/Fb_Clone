import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { session, signOut, useSession } from "next-auth/client";

function Header() {
    const [session] = useSession();
    return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
       <Image
        src="https://links.papareact.com/5me"
        width={40}
        height={40}
        layout="fixed"
      />
       <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
           <SearchIcon className="h-6 text-gray-600"/>
           
           <input className="hidden md:inline-flex items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Search on Facebook" />
       </div>

       {/* Center */}

        <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
        <HeaderIcon active Icon={HomeIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
        </div>
        
        
        
        </div>
        
        <div className="flex items-center justify-end sm:space-x-2">
            <Image 
            onClick = {signOut}
            className="rounded-full cursor-pointer"
            src={session.user.image}
            width="40"
            height="40"
            layout="fixed"
            />
            <p className=" whitespace-nowrap pr-3 font-semibold">{session.user.name}</p>
            <ViewGridIcon className="icon" />
            <ChatIcon className="icon" />
            <BellIcon className="icon" />
            <ChevronDownIcon className="icon" />
        </div>
      

        </div>
        
    )
}

export default Header

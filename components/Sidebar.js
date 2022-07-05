import Image from "next/image"
import Logo from './Img/icon-twitter.png'
import SidebarMenuItem from "./SidebarMenuItem"
import { HomeIcon } from '@heroicons/react/solid'
import {
    BellIcon, BookmarkIcon, ClipboardIcon,
    DotsCircleHorizontalIcon, DotsHorizontalIcon,
    HashtagIcon, InboxIcon, UserIcon
} from '@heroicons/react/outline'


const Sidebar = () => {
    return (
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full gap-3">

            {/* Twitter Logo */}
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">

                <Image className="" width="50" height="50" src={Logo}></Image>
            </div>



            {/* Menu */}

            <div>
                <SidebarMenuItem text="Home" Icon={HomeIcon} active />
                <SidebarMenuItem text="Explor" Icon={HashtagIcon} />
                <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                <SidebarMenuItem text="Message" Icon={InboxIcon} />
                <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                <SidebarMenuItem text="Profile" Icon={UserIcon} />
                <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
            </div>

            {/* Button */}

            <button className="bg-blue-400 text-white w-52 h-12 font-bold shadow-xl text-lg hidden xl:inline rounded-full hover:bg-blue-600" >Tweet</button>

            {/* Mini-Profile */}
            <div className="hoverEffect gap-2 text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                <img
                    src="https://lh3.googleusercontent.com/a-/AFdZucogHTbyi6uYA7NJHct3AjBC_ZcwCGvY2A1Nqq4S=s96-c-rg-br100"
                    alt="user-ime"
                    className="w-10 h-10 rounded-full" />
                <div className="hidden xl:inline">
                    <h4 className="font-bold">Parisa mobaraki</h4>
                    <p className="text-gray-500 text-sm">@parisa-mobaraki</p>
                </div>
                <DotsHorizontalIcon className="h-5 hidden xl:inline " />
            </div>

        </div>
    )
}

export default Sidebar
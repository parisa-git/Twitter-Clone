import Image from "next/image"
import Logo from './Img/icon-twitter.png'
import SidebarMenuItem from "./SidebarMenuItem"
import { HomeIcon } from '@heroicons/react/solid'
import {
    BellIcon, BookmarkIcon, ClipboardIcon,
    DotsCircleHorizontalIcon, DotsHorizontalIcon,
    HashtagIcon, InboxIcon, UserIcon
} from '@heroicons/react/outline'
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { userAuthActions } from "../store/user-auth"


const Sidebar = () => {

    const user = useSelector((state) => state.userAuth.user);
    const toggle = useSelector((state) => state.userAuth.logOutModal);

    const router = useRouter();

    const dispatch = useDispatch();

    const openLogout = () => {

        dispatch(userAuthActions.toggle());
    }

    return (
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full gap-3 xl:ml-13 lg:ml-[50px] lg:items-center sm:ml-[100px]">

            {/* Twitter Logo */}
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">

                <Image className="" width="50" height="50" src={Logo}></Image>
            </div>



            {/* Menu */}

            <div className="w-full">
                <SidebarMenuItem text="Home" Icon={HomeIcon} active />
                <SidebarMenuItem text="Explor" Icon={HashtagIcon} />
                {user &&
                    <>
                        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                        <SidebarMenuItem text="Message" Icon={InboxIcon} />
                        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                        <SidebarMenuItem text="Profile" Icon={UserIcon} />
                        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
                    </>
                }

            </div>

            {/* Button */}

            {user ? <>
                <button className="bg-blue-400 text-white w-52 h-12 font-bold shadow-xl text-lg hidden xl:inline rounded-full hover:bg-blue-600" >Tweet</button>

                {/* Mini-Profile */}
                <div

                    className="hoverEffect gap-2 text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                    <img
                        src={user.photoURL}
                        alt="user-ime"
                        className="w-10 h-10 rounded-full" />
                    <div className="hidden xl:inline">
                        <h4 className="font-bold">{user.displayName}</h4>
                        <p className="text-gray-500 text-sm">{user.email}</p>
                    </div>
                    <DotsHorizontalIcon onClick={openLogout} className="h-5 hidden xl:inline " />
                </div>
            </> :
                <>
                    <button
                        onClick={() => router.push("/auth/signin")}
                        className="bg-blue-400 text-white w-52 h-12 font-bold shadow-xl text-lg hidden xl:inline rounded-full hover:bg-blue-600" >SignIn</button>
                </>
            }

        </div>
    )
}

export default Sidebar
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
import Avatar from './Img/avatar.png';
import Link from "next/link"


const Sidebar = ({ active }) => {

    const user = useSelector((state) => state.userAuth.user);
    const toggle = useSelector((state) => state.userAuth.logOutModal);

    const router = useRouter();

    const dispatch = useDispatch();

    const openLogout = () => {

        dispatch(userAuthActions.toggle());
    }

    const signOutHandler = () => {

        dispatch(userAuthActions.signOut(null));
        localStorage.clear();
    }

    return (
        <div className=" sm:flex flex-col p-2 xl:items-start fixed h-full gap-3 xl:ml-13 lg:ml-[50px] lg:items-center sm:ml-[100px]">

            {/* Twitter Logo */}
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">

                <Image className="" width="50" height="50" src={Logo}></Image>
            </div>



            {/* Menu */}

            <div className="w-full">
                <div className="hoverEffect flex items-center justify-center xl:justify-start text-lg gap-3 text-gray-700 ">
                    <HomeIcon className="h-7" />
                    <Link href=""><span className={`${active && "font-bold"} hidden xl:inline`}>Home</span></Link>
                </div>
                <div className="hoverEffect flex items-center justify-center xl:justify-start text-lg gap-3 text-gray-700 ">
                    <HashtagIcon className="h-7" />
                    <Link href=""><span className={`${active && "font-bold"} hidden xl:inline`}>Explor</span></Link>
                </div>
                {/* <SidebarMenuItem text="Home" Icon={HomeIcon} />
                <SidebarMenuItem text="Explor" Icon={HashtagIcon} /> */}
                {user &&
                    <>
                        <div className="hoverEffect flex items-center justify-center xl:justify-start text-lg gap-3 text-gray-700 ">
                            <BellIcon className="h-7" />
                            <Link href="">
                                <span className={`${active && "font-bold"} hidden xl:inline`}>Notifications</span>
                            </Link>
                        </div>
                        <div className="hoverEffect flex items-center justify-center xl:justify-start text-lg gap-3 text-gray-700 ">
                            <InboxIcon className="h-7" />
                            <Link href="">
                                <span className={`${active && "font-bold"} hidden xl:inline`}>Message</span>
                            </Link>
                        </div>
                        <div className="hoverEffect flex items-center justify-center xl:justify-start text-lg gap-3 text-gray-700 ">
                            <BookmarkIcon className="h-7" />
                            <Link href="">
                                <span className={`${active && "font-bold"} hidden xl:inline`}>Bookmarks</span>
                            </Link>
                        </div>
                        <div className="hoverEffect flex items-center justify-center xl:justify-start text-lg gap-3 text-gray-700 ">
                            <ClipboardIcon className="h-7" />
                            <Link href="">
                                <span className={`${active && "font-bold"} hidden xl:inline`}>Lists</span>
                            </Link>
                        </div>
                        <div className="hoverEffect flex items-center justify-center xl:justify-start text-lg gap-3 text-gray-700 ">
                            <UserIcon className="h-7" />
                            <Link href="/profile/profile">
                                <span className={`${active && "font-bold"} hidden xl:inline`}>Profile</span>
                            </Link>
                        </div>
                        <div className="hoverEffect flex items-center justify-center xl:justify-start text-lg gap-3 text-gray-700 ">
                            <DotsCircleHorizontalIcon className="h-7" />
                            <Link href="">
                                <span className={`${active && "font-bold"} hidden xl:inline`}>More</span>
                            </Link>
                        </div>
                        {/* <SidebarMenuItem text="Notifications" Icon={BellIcon} /> */}
                        {/* <SidebarMenuItem text="Message" Icon={InboxIcon} /> */}
                        {/* <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} /> */}
                        {/* <SidebarMenuItem text="Lists" Icon={ClipboardIcon} /> */}
                        {/* <SidebarMenuItem text="Profile" Icon={UserIcon} link="profile/profile" /> */}
                        {/* <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} /> */}
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
                        src={user ? user.photoURL : Avatar}
                        alt="user-ime"
                        className="w-10 h-10 rounded-full" onClick={signOutHandler} />
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
                        className="bg-blue-400 text-white xl:w-52  lg:w-52 h-12 font-bold shadow-xl xl:text-lg lg:text-lg w-12 text-xs xl:inline rounded-full hover:bg-blue-600" >SignIn</button>
                </>
            }

        </div>
    )
}

export default Sidebar
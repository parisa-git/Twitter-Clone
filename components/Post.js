import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline"
import Moment from "react-moment"


const Post = ({ post }) => {
    return (
        <div className="flex p-3 cursor-pointer border-b border-gray-200">
            {/* user image */}
            <img className="w-10 h-10 rounded-full cursor-pointer hover:brightness-95 mr-4"
                src={post.data().userImage}
                alt="user-img"
            />

            {/* right side  */}
            <div className="w-full">
                {/* header */}

                <div className="flex justify-between items-center">
                    {/* user info  */}
                    <div className="flex items-center gap-1 whitespace-nowrap">
                        <h4 className="xl:text-lg text-sm font-bold text-gray-700 hover:underline">{post.data().name}</h4>
                        <span className="text-sm text-gray-500">@{post.data().username} -</span>
                        <span className="text-sm text-gray-500 hover:underline">
                            <Moment fromNow>
                                {post?.timestamp?.toDate()}
                            </Moment>
                        </span>
                    </div>

                    {/* dot icon  */}
                    <DotsHorizontalIcon className="xl:h-11 h-5 hoverEffect hover:bg-sky-100 hover:text-sky-500 " />
                </div>

                {/* post text */}
                <p className="text-gray-700 text-lg sm:text-sm mb-2">{post.data().text}</p>

                {/* post img  */}
                <img className="rounded-2xl mr-2 w-full  h-auto" src={post.data().image} />

                {/* icons  */}
                <div className="flex justify-between text-gray-500 mt-2 p-2">
                    <ChatIcon className="xl:h-11 h-5 hoverEffect hover:bg-sky-100 hover:text-sky-500" />
                    <TrashIcon className="xl:h-11 h-5 hoverEffect hover:bg-red-100 hover:text-red-500" />
                    <HeartIcon className="xl:h-11 h-5 hoverEffect hover:bg-red-100 hover:text-red-500" />
                    <ShareIcon className="xl:h-11 h-5 hoverEffect hover:bg-sky-100 hover:text-sky-500" />
                    <ChartBarIcon className="xl:h-11 h-5 hoverEffect hover:bg-sky-100 hover:text-sky-500" />
                </div>
            </div>
        </div>
    )
}

export default Post
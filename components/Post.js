import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline"
import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Moment from "react-moment"
import { useDispatch, useSelector } from "react-redux";
import { db, storage } from "../firebase";
import { HeartIcon as HeartIconFiled } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { deleteObject, ref } from "firebase/storage";
import { CommentPostActions } from "../store/comment";



const Post = ({id,post }) => {

    const user = useSelector((state) => state.userAuth.user);


    const [likes, setLikes] = useState([]);
    const [comments, setComments] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);
    const [postId, setPostId] = useState(id);
    // console.log(postId);


    const dispatch = useDispatch();

    const router = useRouter();


    useEffect(() => {

        const unsubscribe = onSnapshot(collection(db, "posts", id, "likes"),
            (snapshot) => setLikes(snapshot.docs)
        );

    }, [db]);

    useEffect(() => {


        const unsubscribe = onSnapshot(collection(db, "posts", id, "comments"),
            (snapshot) => setComments(snapshot.docs)
        );
    }, [db]);

    useEffect(() => {

        setHasLiked(likes.findIndex((like) => like.id === user?.uid) !== -1);

    }, [likes]);



    const likePost = async () => {
        if (user) {
            if (hasLiked) {
                await deleteDoc(doc(db, "posts", id, "likes", user?.uid));
            } else {

                await setDoc(doc(db, "posts", id, "likes", user?.uid), {
                    username: user.displayName.split(" ").join("").toLocaleLowerCase(),
                })
            }
        } else {
            router.push("/auth/signin")
        }
    }

    const deletPost = async () => {
        if (window.confirm("Are you sure to delet??")) {

            await deleteDoc(doc(db, "posts",id));
            if (post.data().image) {

                deleteObject(ref(storage, `posts/${id}/image`));
            }
            router.push('/');
        }
    }


    const openComments = () => {

        // localStorage.setItem("postId", JSON.stringify(postId));
        dispatch(CommentPostActions.getPostId(postId));
        dispatch(CommentPostActions.openComments());
    }




    return (
        <div className="xl:flex lg:flex  p-3 cursor-pointer border-b border-gray-200">
            {/* user image */}
            <img className="w-10 h-10 mb-3 rounded-full cursor-pointer hover:brightness-95 mr-4"
                src={post?.data().userImage}
                alt="user-img"
            />

            {/* right side  */}
            <div className="w-full">
                {/* header */}

                <div className="flex justify-between items-center">
                    {/* user info  */}
                    <div className="flex items-center gap-1 xl:whitespace-nowrap truncate ">
                        <h4 className="xl:text-lg text-sm font-bold text-gray-700 hover:underline">{post?.data().name}</h4>
                        <span className="text-sm text-gray-500">{post?.data().username} -</span>
                        <span className="text-sm text-gray-500 hover:underline">
                            <Moment fromNow>
                                {post?.data().timestamp?.toDate()}
                            </Moment>
                        </span>
                    </div>

                    {/* dot icon  */}
                    <DotsHorizontalIcon className="xl:h-11 h-5 hoverEffect hover:bg-sky-100 hover:text-sky-500 " />
                </div>

                {/* post text */}
                <p onClick={()=>router.push(`/posts/${id}`)} className="text-gray-700 text-lg sm:text-sm mb-2">{post?.data().text}</p>

                {/* post img  */}
                <img onClick={()=>router.push(`/posts/${id}`)} className="rounded-2xl mr-2 w-full  h-auto" src={post?.data().image} />

                {/* icons  */}
                <div className="flex justify-between text-gray-500 mt-2 p-2">

                    {user ?
                        <div className="flex items-center" onClick={() => setPostId(id)}

                        >
                            {comments.length > 0 &&
                                <>
                                    <span className=" select-none text-sm">{comments.length}</span>
                                </>
                            }
                            <ChatIcon
                                onClick={openComments}
                                className="xl:h-11 h-5 hoverEffect hover:bg-sky-100 hover:text-sky-500"
                            />
                        </div>
                        :
                        router.push("/auth/signin")
                    }


                    {user?.uid === post?.data().id &&
                        <>
                            <TrashIcon onClick={deletPost} className="xl:h-11 h-5 hoverEffect hover:bg-red-100 hover:text-red-500" />
                        </>
                    }

                    <div className="flex items-center">

                        {likes.length > 0 &&
                            <>
                                <span className={`${hasLiked && "text-red-500"} select-none text-sm`}>{likes.length}</span>
                            </>
                        }

                        {hasLiked ?
                            <>
                                <HeartIconFiled onClick={likePost} className="xl:h-11 h-5 hoverEffect hover:bg-red-100 text-red-500" />
                            </>
                            : <>
                                <HeartIcon onClick={likePost} className="xl:h-11 h-5 hoverEffect hover:bg-red-100 hover:text-red-500" />
                            </>
                        }

                    </div>



                    <ShareIcon className="xl:h-11 h-5 hoverEffect hover:bg-sky-100 hover:text-sky-500" />
                    <ChartBarIcon className="xl:h-11 h-5 hoverEffect hover:bg-sky-100 hover:text-sky-500" />
                </div>
            </div>
          
        </div>
    )
}

export default Post
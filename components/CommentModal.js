import React, { useEffect, useRef, useState } from 'react'
import Modal from "react-modal";
import { useDispatch, useSelector } from 'react-redux';
import { CommentPostActions } from '../store/comment';
import { EmojiHappyIcon, PhotographIcon, XIcon } from '@heroicons/react/outline'
import { db } from '../firebase';
import { addDoc, collection, doc, onSnapshot, query, serverTimestamp } from 'firebase/firestore';
import Moment from 'react-moment';
import { useRouter } from 'next/router';

const CommentModal = () => {

    const user = useSelector((state) => state.userAuth.user);
    const open = useSelector((state) => state.Comment.open);
    const postId = useSelector((state) => state.Comment.postIds);


    const [input, setInput] = useState();
    const [selectedFile, setSelectedFile] = useState(null);
    const [post, setPost] = useState({});

    const filePickerRef = useRef(null);
    const router = useRouter();

    const dispatch = useDispatch();
    useEffect(() => {

    }, [])

    useEffect(() => {
        const fetchData = async () => {

            onSnapshot(doc(db, "posts", postId), (snapshot) => {
                setPost(snapshot);
            });
            // const post = post.data();

            // onSnapshot(
            //     query(collection(db, "posts", postId), (snapshot) => {
            //         setPost(snapshot);
            //     })

        }

        fetchData();


    }, [db,postId]);

    const closeModal = () => {
        dispatch(CommentPostActions.closeModal());
    }



    const sendComment = async () => {
        await addDoc(collection(db, "posts", postId, "comments"), {

            comment: input,
            name: user.displayName,
            username: user.displayName.split(" ").join("").toLocaleLowerCase(),
            userImg: user.photoURL,
            timestamp: serverTimestamp(),
            userId: user.uid,
        });

        closeModal();
        setInput("");
        router.push(`/posts/${postId}`);
    }

    return (
        <div>{post &&

            <Modal isOpen={open}
                onRequestClose={closeModal}
                className="moooodal max-w-lg w-[90%]  absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 rounded-xl shadow-md" >
                <div className="p-1">

                    <div className="border-b border-gray-200 py-2 px-1.5">
                        <div onClick={closeModal} className="hoverEffect w-10 h-10 flex items-center justify-center">
                            <XIcon className="h-[23px] text-gray-700 p-0" />
                        </div>
                    </div>
                </div>
                {/* {postId && <> */}

                <div className="p-2 flex items-center space-x-1 relative">
                    <span className="w-0.5 h-full z-[-1] absolute left-8 top-11 bg-gray-300" />
                    <img
                        className="h-11 w-11 rounded-full mr-4"
                        // src={post.data().userImage}
                        alt="user-img"
                    />
                    <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                        {/* { post.data().name} */}
                    </h4>
                    <span className="text-sm sm:text-[15px]">
                        {/* @{ppost?.data()?.username} -{" "} */}
                    </span>
                    <span className="text-sm sm:text-[15px] hover:underline">
                        <Moment fromNow>
                            {/* { post?.data()?.timestamp.toDate()} */}
                        </Moment>
                    </span>
                </div>
                <p className="text-gray-500 text-[15px] sm:text-[16px] ml-16 mb-2">
                    {/* {post?.data()?.text} */}
                </p>

                <div className='flex border-b border-gray-200 p-3 space-x-3'>
                    <img className="w-10 h-10 rounded-full cursor-pointer hover:brightness-95 "
                        // src={user.photoURL}
                        alt="user-ime" />
                    <div className='w-full gap-2'>
                        <div className=' border-b border-gray-200 '>
                            <textarea className='w-full border-none focus:ring-0 text-lg
                                placeholder-gray-700 min-h-[50px] text-gray-700 tracking-wide' rows="2"
                                placeholder="Tweet your reply..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            >
                            </textarea>
                        </div>
                        {selectedFile &&
                            <div className='relative'>
                                <XIcon onClick={() => setSelectedFile(null)} className='h-7  absolute text-white cursor-pointer shadow-lg bg-red-500 rounded-lg' />
                                <img className={`${loading && "animate-pulse"}`} src={selectedFile} />
                            </div>
                        }
                        <div className='flex items-center justify-between pt-2.5 '>


                            <div className='flex'>
                                {/* <div onClick={() => filePickerRef.current.click()}> */}
                                {/* <PhotographIcon className='h-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' /> */}
                                {/* <input 
                                    type='file' hidden 
                                    ref={filePickerRef} 
                                    onChange={addImageToPost} 
                                    /> */}
                                {/* </div> */}

                                {/* <EmojiHappyIcon className='h-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' /> */}
                            </div>
                            <button
                                onClick={sendComment}
                                disabled={!input}
                                className=' bg-blue-400 text-white w-24 px-4 py-2 font-bold rounded-full hover:brightness-95 disabled:opacity-50' >Reply</button>


                        </div>
                    </div>
                </div>
                {/* </>} */}

            </Modal>
        }
        </div>
    )
}

export default CommentModal
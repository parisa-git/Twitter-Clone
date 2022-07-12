import { EmojiHappyIcon, XIcon } from '@heroicons/react/outline'
import { PhotographIcon } from '@heroicons/react/solid'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { db, storage } from '../firebase';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';



const Input = () => {

    const [input, setInput] = useState();
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);


    const user = useSelector((state) => state.userAuth.user);

    const filePickerRef = useRef(null);

    const sendPostHandler = async () => {

        // if (loading) return;
        setLoading(true);

        const docRef = await addDoc(collection(db, 'posts'), {
            id: user.uid,
            text: input,
            userImage: user.photoURL,
            timestamp: serverTimestamp(),
            name: user.displayName,
            username: user.email,
        });

        const imageRef = ref(storage, `posts/${docRef.id}/image`);

        if (selectedFile) {
            await uploadString(imageRef, selectedFile, "data_url").then(async () => {
                const downloadURL = await getDownloadURL(imageRef);
                await updateDoc(doc(db, "posts", docRef.id), {
                    image: downloadURL,
                });
            });
        }

        setInput("");
        setSelectedFile(null);
        setLoading(false);
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    };

    return (
        <>
            {user &&
                (
                    <div className='flex border-b border-gray-200 p-3 space-x-3'>
                        <img className="w-10 h-10 rounded-full cursor-pointer hover:brightness-95 "
                            src={user.photoURL}
                            alt="user-ime" />
                        <div className='w-full gap-2'>
                            <div className=' border-b border-gray-200 '>
                                <textarea className='w-full border-none focus:ring-0 text-lg
                                placeholder-gray-700 min-h-[50px] text-gray-700 tracking-wide' rows="2"
                                    placeholder="What's happening?"
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
                            <div className='flex items-center justify-between pt-2.5'>
                                {!loading &&
                                    <>

                                        <div className='flex'>
                                            <div onClick={() => filePickerRef.current.click()}>
                                                <PhotographIcon className='h-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' />
                                                <input type='file' hidden ref={filePickerRef} onChange={addImageToPost} />
                                            </div>

                                            <EmojiHappyIcon className='h-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' />
                                        </div>
                                        <button
                                            onClick={sendPostHandler}
                                            disabled={!input}
                                            className=' bg-blue-400 text-white w-24 px-4 py-2 font-bold rounded-full hover:brightness-95 disabled:opacity-50' >Tweet</button>

                                    </>
                                }
                            </div>
                        </div>
                    </div>
                )}

        </>
    )
}

export default Input
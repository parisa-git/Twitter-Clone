import { EmojiHappyIcon } from '@heroicons/react/outline'
import { PhotographIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux'


const Input = () => {

    const user = useSelector((state) => state.userAuth.user);
    // console.log(user);

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
                    placeholder-gray-700 min-h-[50px] text-gray-700 tracking-wide' rows="2" placeholder="What's happening?"  >

                                </textarea>
                            </div>
                            <div className='flex items-center justify-between pt-2.5'>
                                <div className='flex'>
                                    <PhotographIcon className='h-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' />
                                    <EmojiHappyIcon className='h-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100' />
                                </div>
                                <button className=' bg-blue-400 text-white w-24 px-4 py-2 font-bold rounded-full hover:brightness-95 disabled:opacity-50' >Tweet</button>
                            </div>
                        </div>
                    </div>
                )}

        </>
    )
}

export default Input
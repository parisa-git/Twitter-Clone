import { SearchIcon } from '@heroicons/react/outline'
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import News from './News'

const Widgets = ({ newsResults, randomUserResults }) => {

    const [articleNum, setArticleNum] = useState(3);
    const [randomUserNum, setRandomUserNum] = useState(3);

    return (
        <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5 ">
            <div className="w-[90%] xl:w-[85%] sticky top-0 bg-white py-1.5 z-50  lg:w-[90%]">
                <div className='flex items-center rounded-full p-3 relative'>
                    <SearchIcon className='h-5 z-50 border-gray-500 text-gray-500 ' />
                    <input 
                    className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100 " type="text" placeholder='search twitter' />
                </div>
            </div>
            {/* What's happening */}
            <div className='text-gray-700 bg-gray-100 rounded-xl pt-2 w-[80%] xl:w-[85%] space-y-3 lg:w-[90%] '>
                <h4 className='font-bold px-4 text-lg'>Whats happening</h4>
                <AnimatePresence>

                    {newsResults.slice(0, articleNum).map((article) => (
                        <motion.div key={article.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <News key={article.title} article={article} />
                        </motion.div>
                    ))}
                </AnimatePresence>

                <button onClick={() => setArticleNum(articleNum + 3)} className='text-blue-300 hover:text-blue-500 pl-4 pb-3'>Show more</button>
            </div>
            {/* who to  follow */}
            <div className='text-gray-700 bg-gray-100 rounded-xl pt-2 w-[80%] xl:w-[85%]  lg:w-[90%] space-y-3 sticky top-16'>
                <h4 className='font-bold px-4 text-lg'>Who to  follow </h4>
                <AnimatePresence>
                    {randomUserResults.slice(0, randomUserNum).map((randomUser) => (

                        <motion.div key={randomUser.login.username}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <div key={randomUser.login.username} className='flex items-center px-4 py-2  cursor-pointer hover:bg-gray-200 transition duration-500 ease-out'>
                                <img className='rounded-full' width="40" src={randomUser.picture.thumbnail} />
                                <div className='truncate ml-4 leading-5'>
                                    <h4 className="font-bold hover:underline text-[14px] truncate">{randomUser.login.username}</h4>
                                    <h5 className="text-[13px] text-gray-500 truncate">{randomUser.name.first + " " + randomUser.name.last}</h5>
                                </div>
                                <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">follow</button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                <button onClick={() => setRandomUserNum(randomUserNum + 3)} className='text-blue-300 hover:text-blue-500 pl-4 pb-3'>Show more</button>
            </div>
        </div>
    )
}

export default Widgets
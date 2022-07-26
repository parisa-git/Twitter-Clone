import { SparklesIcon } from '@heroicons/react/outline'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import Input from './Input'
import Post from './Post';

const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(
        () =>
            onSnapshot(
                query(collection(db, "posts"), orderBy("timestamp", "desc")),
                (snapshot) => {
                    setPosts(snapshot.docs);
                }
            ),
        []
    );
    console.log(posts)

    return (
        <div className='xl:ml-[330px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow '>
            <div className='flex sticky py-2 px-3 bg-white top-0 z-50 border-b border-gray-200'>
                <h2 className='cursor-pointer text-lg sm:text-xl  font-bold'>Home</h2>
                <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                    <SparklesIcon className='h-5' />
                </div>
            </div>
            <Input />
            <AnimatePresence>

                {posts.map((post) => (
                    <motion.div key={post.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity:1 }}
                        exit={{ opacity:0 }}>
                        <Post key={post.id} id={post.id} post={post} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default Feed
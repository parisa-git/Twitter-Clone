import { SparklesIcon } from '@heroicons/react/outline'
import Input from './Input'
import Post from './Post';

const Feed = () => {
    const posts = [
        {
            id: "1",
            name: "parisa mobaraki",
            username: "parisa mbk",
            userimag: "https://lh3.googleusercontent.com/a-/AFdZucogHTbyi6uYA7NJHct3AjBC_ZcwCGvY2A1Nqq4S=s96-c-rg-br100",
            img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            text: "nice pic!!",
            timestamp: "2 days ago"
        },
        {
            id: "2",
            name: "parisa mobaraki",
            username: "parisa mbk",
            userimag: "https://lh3.googleusercontent.com/a-/AFdZucogHTbyi6uYA7NJHct3AjBC_ZcwCGvY2A1Nqq4S=s96-c-rg-br100",
            img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            text: "fantastic !!",
            timestamp: "2 days ago"
        }
    ];
    return (
        <div className='xl:ml-[330px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow  w-full'>
            <div className='flex sticky py-2 px-3 bg-white top-0 z-50 border-b border-gray-200'>
                <h2 className='cursor-pointer text-lg sm:text-xl  font-bold'>Home</h2>
                <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                    <SparklesIcon className='h-5' />
                </div>
            </div>
            <Input />
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Feed
import { ArrowLeftIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'
import CommentModal from '../../components/CommentModal'
import LogoutModal from '../../components/LogoutModal'
import Sidebar from '../../components/Sidebar'
import Widgets from '../../components/Widgets'
import userIcon from '../../components/Img/icon-twitter.png'

const profile = ({ newsResults, randomUserResults }) => {

    const user = useSelector((state) => state.userAuth.user)

    const router = useRouter();


    return (
        <div >
            <Head>
                <title>Twitter Clone</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='flex min-h-screen mx-auto'>

                {/* Sidbar */}
                <Sidebar />

                {/* Profile */}


                <div className="xl:ml-[300px] lg:ml-[125px] max-w-xl border-l border-r border-gray-200  xl:min-w-[600px] lg:min-w-[550px] sm:ml-[180px] flex-grow  sm:min-w-[470px]">
                    <div className="flex items-center space-x-2  py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                        <div className="hoverEffect" onClick={() => router.push("/")}>
                            <ArrowLeftIcon className="h-5 " />
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
                            {user?.displayName}
                        </h2>
                    </div>

                    <div className="relative">
                        <div className='bg-gray-200 p-10'>
                            <img src='' />
                        </div>
                        <div className='flex items-center justify-between px-3 pt-3 relative'>
                            <div className='rounded-full w-40 absolute bottom-[-77px] left-[25px]'>
                                <img className="xl:w-32 xl:h-32 sm:w-24 sm:w-24 rounded-full border-4 border-white m-3" src={user?.photoURL} />
                            </div>


                            <div >
                                <button className='rounded-full px-3 py-2  border  border-gray-200 absolute top-5 right-[30px]' >Set up Profile</button>
                            </div>
                        </div>
                        <div className='relative mt-20 px-5'>
                            <p className='font-bold text-xl'>{user?.displayName}</p>
                            <p className='text-gray-400 font-sm'>{user?.email}</p>
                            <div className='mt-5 flex items-center justify-start gap-3'>

                                <p className='text-gray-400 font-sm'><span className='text-black font-bold px-1'>1</span>follwoing</p>
                                <p className='text-gray-400 font-sm'><span className='text-black font-bold px-1'>1</span>follower</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Widgets */}
                <Widgets newsResults={newsResults.articles} randomUserResults={randomUserResults.results} />

                {/* Modal */}

                <CommentModal />

                <LogoutModal />

            </main>

        </div>
    )
}

export default profile

export const getServerSideProps = async () => {

    const newsResults = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
        .then((res) => res.json());

    // hwo to follo section
    const randomUserResults = await fetch("https://randomuser.me/api/?results=50&inc=name,login,picture")
        .then((res) => res.json());

    return {
        props: {
            newsResults,
            randomUserResults
        }
    }
}
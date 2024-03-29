import React from 'react'

const News = ({article}) => {
    return (
        <a rel='noreferrer' href={article.url} target="_blank">
            <div className='flex justify-between items-center px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-500 ease-out'>
                <div className='space-y-0.5'>
                    <h6 className='font-bold text-sm'>{article.title}</h6>
                    <p className='text-xs font-medium text-gray-500'>{article.source.name}</p>
                </div>
                <img className='rounded-xl' width="70" src={article.urlToImage} />
            </div>
        </a>
    )
}

export default News
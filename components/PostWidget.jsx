import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';

import { getRecentPosts, getSimilarPosts } from '../services';


const PostWidget = ({ categories, slug }) => {

  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug])

  console.log('relatedPosts:', relatedPosts)
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'פוסטים קשורים' : 'פוסטים חדשים'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.id} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img src={post.image.url} className="align-middle rounded-full"
              alt={post.title} width="60px" height="60px" />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xs'>
              {moment(post.createdAt).format('DD/MM/YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}
              className='text-md'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
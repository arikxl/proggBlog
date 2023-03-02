import type { NextPage } from 'next'
import Head from 'next/head'

import {  PostCard, Categories, PostWidget} from '../components';

const posts = [
  { id:101, title: 'בדיקת ריאקט ' , excerpt: 'אחלה דבר שבעולם! ' },
  {id: 102, title: 'Ts Test', excerpt: 'Ts Test 11111  OMG' }
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>ProggBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>

        <div className='lg: col-span-8 col-span-1' >
          {posts.map(post => (
            <PostCard post={ post} key={ post.id }/>
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home

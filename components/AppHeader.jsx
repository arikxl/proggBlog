import React, { useContext } from 'react'
import Link from 'next/link';

const categories = [
    { id: 1001, name: 'CSS', slug: 'css' }, { id: 1002, name: 'React', slug: 'react' }
];

const AppHeader = () => {
    return (
        <header className="container mx-auto px-10 mb-8">
            <div className='border-b w-full inline-block border-blue-400 py-8'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer font-bold text-4xl text-white en-font underline'>
                            Proggblog
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map(category => (
                        <Link key={category.id} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-white ml-4
                            font-semibold cursor-pointer en-font">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>

            </div>
        </header>
    )
}

export default AppHeader
import Head from 'next/head';
import Link from 'next/link';

interface TITLE {
    children: any;
    title: string;
}

const Layout: React.FC<TITLE> = ({ children, title = 'LIFE 100' }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <nav className='bg-gray-800 w-screen'>
                    <div className='flex items-center pl-8 h-14'>
                        <div className='flex space-x-4'>
                            <Link href='/'>
                                <a data-testid="home-nav" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Home
                                </a>
                            </Link>
                            <Link href='/sub'>
                                <a data-testid="sub-nav" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Sub
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main className='flex flex-1 justify-center items-center flex-col w-screen'>
                {children}
            </main>
        </div>
    )
}

export default Layout
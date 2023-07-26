import Image from 'next/image'
import {Inter} from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
const inter = Inter({subsets: ['latin']})

export default function Home() {
    const navigate = useRouter();
    const testApplication = () => {
        navigate.push('/login')
    }
    return (
        <main>
            <Head>
                <title>Next JS</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={'bg-slate-800 text-white min-h-screen p-20 pb-0'}>
                <div className={
                    styles.description
                }>
                    <div>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            By{' '}
                            <h1 className='font-bold'>Clickup Integration</h1>
                        </a>
                    </div>
                </div>
                <div className={'p-20 pb-0 text-center justify-center flex flex-col'}>
                    <div className="text-9xl font-semibold bg-gradient-to-r bg-clip-text  text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text ">
                        <span className='text-9xl font-bold'>Clickup.</span>
                        <span className='text-9xl from-green-600  font-bold'>Integration.</span>
                        <span className='text-9xl font-bold'>Flow</span>
                    </div>
                    <p className='py-10 px-24 text-white'>Starter Social Packet is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.</p>
                </div>
                <div className='text-center'>
                    <p className='text-9xl'>🚀</p>
                </div>
                <div className={'flex justify-center py-14'}>
                    <button type="button"
                        onClick={testApplication}
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Test Now</button>
                </div>
            </main>
        </main>
    )
}

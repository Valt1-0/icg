import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from './Containers/Header'
import Slider from './Components/Slider'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
    <Slider/>
    </>
  )
}

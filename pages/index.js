import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Botao from '../components/botao'
import Avatar from '@/components/avatar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>Opa</h1>
      <Avatar/>
      <Botao texto={'Login'} desabilitado={false}  manipularClick={() => console.log('Botao Clicado')}/>
    </>
  )
}

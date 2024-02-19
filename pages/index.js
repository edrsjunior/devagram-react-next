import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Botao from '../components/botao'
import Avatar from '@/components/avatar'
import { UploadImg } from '@/components/uploadImg'
import { useRef, useState } from 'react'
import Login from '@/components/login'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [imagem,setImagem] = useState(null);
  const referenciaInput = useRef();

  console.log(imagem);

  return (
    <>
      <Login />
    </>
    
  )
}

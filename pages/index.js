import { useRef, useState } from 'react'
import Login from '@/components/login'



export default function Home() {

  const [imagem,setImagem] = useState(null);
  const referenciaInput = useRef();

  console.log(imagem);

  return (
      <Login />
  )
}

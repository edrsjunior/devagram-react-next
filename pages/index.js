import { useEffect, useRef, useState } from 'react'
import Login from '@/components/login'
import UsuarioService from '@/services/UsuarioService';
import Home from '@/components/home';


const usuarioService = new UsuarioService();
export default function Index() {

  const [estaAutenticado, setEstaAutenticado] = useState(false);

  useEffect(() => {
    setEstaAutenticado(
      usuarioService.estaAutenticado()
    );
  }), [];

  if (estaAutenticado) {
    return <Home/>
  }

  return (
      <Login  aposAutenticado={() => setEstaAutenticado(true)}/>
  )
}

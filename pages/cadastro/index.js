import Image from "next/image"
import Link from "next/link"
import Botao from "@/components/botao"


import imagemEnvelope from "../../public/imagens/envelope.svg"
import imagemKey from "../../public/imagens/chave.svg"
import imagemLogo from "../../public/imagens/logo.svg"
import imagemUsuarioAtivo from "../../public/imagens/usuario_Ativo.svg"
import InputPublico from "@/components/inputPublico"
import { UploadImg } from "@/components/uploadImg"


export default function Cadastro(){
    return (
        <section className={`cadastro publicPage`}>
            <form>
            
            <UploadImg

            />

            <div className="logoContainer desktop">
                <Image
                    src={imagemLogo}
                    alt="Logotipo"
                    fill
                    className="logo"
                />
            </div>
            <div className="publicPageContent">
                <InputPublico
                    imagem={imagemUsuarioAtivo}
                    texto={"Nome Completo"}
                    tipo={"text"}
                    aoAlterarValor={e => console.log(e.target.value)}
                    // valor={email}
                />

                <InputPublico
                    imagem={imagemEnvelope}
                    texto={"Email"}
                    tipo={"text"}
                    aoAlterarValor={e => console.log(e.target.value)}
                    //value={}
                />
                
                <InputPublico
                    imagem={imagemKey}
                    texto={"Senha"}
                    tipo={"password"}
                    aoAlterarValor={e => console.log(e.target.value)}
                    //value={}
                />

                <InputPublico
                    imagem={imagemKey}
                    texto={"Confirmar Senha"}
                    tipo={"passowrd"}
                    aoAlterarValor={e => console.log(e.target.value)}
                    //value={}
                />


                <Botao
                    texto= "Continuar"
                    tipo="submit"
                    desabilitado = {false}
                />

                <div className="rodapePaginaPublica">
                    <p>Já possui uma conta?</p>
                    <Link href="/">Faça seu login agora!</Link>
                </div>
            </div>
            </form>
            
        </section>
    )
}
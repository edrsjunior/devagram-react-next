import Image from "next/image"
import Link from "next/link"
import Botao from "@/components/botao"
import { useState } from "react"
import UploadImg  from "@/components/uploadImg"
import InputPublico from "@/components/inputPublico"


import imagemEnvelope from "../../public/imagens/envelope.svg"
import imagemKey from "../../public/imagens/chave.svg"
import imagemLogo from "../../public/imagens/logo.svg"
import imagemUsuarioAtivo from "../../public/imagens/usuario_Ativo.svg"
import imagemUsuarioPhoto from "../../public/imagens/userPhoto.svg"


export default function Cadastro(){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
    const [imagem, setImagem] = useState(null);

    return (
        <section className={`paginaCadastro publicPage`}>

                <div className="logoContainer desktop">
                    <Image
                        src={imagemLogo}
                        alt="Logotipo"
                        fill
                        className="logo"
                    />
                </div>
                <div className="publicPageContent">
                    <UploadImg
                        imagemPreviewClassName = "avatar avatarPreview"
                        setImagem={setImagem}
                        imagemPreview={imagem?.preview || imagemUsuarioPhoto.src}
                        
                    />
                    <form>
                        <InputPublico
                            imagem={imagemUsuarioAtivo}
                            texto={"Nome Completo"}
                            tipo={"text"}
                            aoAlterarValor={e => setNome(e.target.value)}
                            valor={nome}
                        />

                        <InputPublico
                            imagem={imagemEnvelope}
                            texto={"Email"}
                            tipo={"text"}
                            aoAlterarValor={e => setEmail(e.target.value)}
                            valor={email}
                        />
                        
                        <InputPublico
                            imagem={imagemKey}
                            texto={"Senha"}
                            tipo={"password"}
                            aoAlterarValor={e => setSenha(e.target.value)}
                            valor={senha}
                        />

                        <InputPublico
                            imagem={imagemKey}
                            texto={"Confirmar Senha"}
                            tipo={"password"}
                            aoAlterarValor={e => setConfirmacaoSenha(e.target.value)}
                            valor={confirmacaoSenha}
                        />


                        <Botao
                            texto= "Continuar"
                            tipo="submit"
                            desabilitado = {false}
                        />
                    </form>
                    <div className="rodapePaginaPublica">
                        <p>Já possui uma conta?</p>
                        <Link href="/">Faça seu login agora!</Link>
                    </div> 
                </div>
        </section>
    )
}
import Image from "next/image"
import Link from "next/link"
import Botao from "@/components/botao"
import { useState } from "react"
import UploadImg  from "@/components/uploadImg"
import InputPublico from "@/components/inputPublico"
import { validarNome,validarEmail,validarSenha, validarSenhaConfirmacao } from "@/utils/validadores"
import UsuarioService from "@/services/UsuarioService"

const usuarioService = new UsuarioService();


import imagemEnvelope from "../../public/imagens/envelope.svg"
import imagemKey from "../../public/imagens/chave.svg"
import imagemLogo from "../../public/imagens/logo.svg"
import imagemUsuarioAtivo from "../../public/imagens/usuario_Ativo.svg"
import imagemUsuarioPhoto from "../../public/imagens/userPhoto.svg"
import { toFormData } from "axios"


export default function Cadastro(){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
    const [imagem, setImagem] = useState(null);
    const [estaSubmetendo, setEstaSubmetendo] = useState(false);

    const validarFormulario = () =>{
        return (
            validarNome(nome)
            && validarEmail(email)
            && validarSenha(senha)
            && validarSenhaConfirmacao(senha, confirmacaoSenha)

        );
    }

    const  aoSubmeter = async (e) => {
        e.preventDefault();
        if (!validarFormulario()) {
            return;
        }

        setEstaSubmetendo(true);

        try {
            const  corpoReqCadastro = new FormData();
            
            corpoReqCadastro.append("nome", nome);
            corpoReqCadastro.append("email", email);
            corpoReqCadastro.append("senha", senha);
            console.log(corpoReqCadastro);
            if (imagem?.arquivo) {
                corpoReqCadastro.append("file", imagem.arquivo);
            }

            await usuarioService.cadastro(corpoReqCadastro);
            
            alert("Cadastrado com sucesso!");
            //TODO: AUTENTICAR USUARIO AUTOMATICAMENTE APOS CADASTRO

        } catch (error) {
            alert(
                "Erro ao cadastrar usuário, tente novamente mais tarde!" + error?.response?.data.erro
            )
        }

        setEstaSubmetendo(false);
    }


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
                    <form onSubmit={aoSubmeter}>
                        <InputPublico
                            imagem={imagemUsuarioAtivo}
                            texto={"Nome Completo"}
                            tipo={"text"}
                            aoAlterarValor={e => setNome(e.target.value)}
                            valor={nome}
                            mensagemValidacao="O nome precisa possuir pelo menos 3 caracteres!"
                            exibirMensagemValidacao={nome && !validarNome(nome)}
                        />

                        <InputPublico
                            imagem={imagemEnvelope}
                            texto={"Email"}
                            tipo={"text"}
                            aoAlterarValor={e => setEmail(e.target.value)}
                            valor={email}
                            mensagemValidacao="O endereço de email é invalido!"
                            exibirMensagemValidacao={email && !validarEmail(email)}
                        />
                        
                        <InputPublico
                            imagem={imagemKey}
                            texto={"Senha"}
                            tipo={"password"}
                            aoAlterarValor={e => setSenha(e.target.value)}
                            valor={senha}
                            mensagemValidacao="A senha precisa possuir pelo menos 8 caracteres!"
                            exibirMensagemValidacao={senha && !validarSenha(senha)}
                        />

                        <InputPublico
                            imagem={imagemKey}
                            texto={"Confirmar Senha"}
                            tipo={"password"}
                            aoAlterarValor={e => setConfirmacaoSenha(e.target.value)}
                            valor={confirmacaoSenha}
                            mensagemValidacao="Ambas senhas precisam ser iguais"
                            exibirMensagemValidacao={confirmacaoSenha && !validarSenhaConfirmacao(senha, confirmacaoSenha)}
                        />


                        <Botao
                            texto= "Continuar"
                            tipo="submit"
                            desabilitado = {!validarFormulario() || estaSubmetendo}
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
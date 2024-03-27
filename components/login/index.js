import InputPublico from "../inputPublico";
import Image from "next/image";
import Botao from "../botao";
import Link from "next/link";
import { useState } from "react";
import { validarEmail, validarSenha } from "@/utils/validadores"


import imagemEnvelope from "../../public/imagens/envelope.svg"
import imagemKey from "../../public/imagens/chave.svg"
import imagemLogo from "../../public/imagens/logo.svg"
import UsuarioService from "@/services/UsuarioService";

const usuarioService = new UsuarioService;


export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [estaSubmetendo, setEstaSubmetendo] = useState(false);

    const validarFormulario = () => {
        return (
            validarEmail(email)
            && validarSenha(senha)
        );
    }

    const aoSubmeter = async (e) => {
        e.preventDefault();

        if (!validarFormulario) {
            return;
        }

        setEstaSubmetendo(true);
        

        try {

            await usuarioService.login({
                login: email,
                senha: senha
            });
            //TODO: REDIRECIONAR USER TO HOME PAGe
        } catch (error) {
            alert(
                "Erro ao Realizar Login, " + error?.response?.data.error
            )
        }

        setEstaSubmetendo(false);
        
    }

    return (
        <section className={`loginPage publicPage`}>
            <div className="logoContainer">
                <Image
                    src={imagemLogo}
                    alt="Logotipo"
                    fill
                    className="logo"
                />
            </div>
            <div className="publicPageContent">
                <form onSubmit={aoSubmeter}>
                    <InputPublico
                        imagem={imagemEnvelope}
                        texto={"Email"}
                        tipo={"email"} //O EDGE NAO VALIDA O EMAIL ENTAO DA ERRO DO HIBERNATE
                        aoAlterarValor={e => setEmail(e.target.value)}
                        valor={email}
                        mensagemValidacao="O endereço informado é invalido!"
                        exibirMensagemValidacao= {email && !validarEmail(email)}
                    />
                    <InputPublico
                        imagem={imagemKey}
                        texto={"Senha"}
                        tipo={"password"}
                        aoAlterarValor={e => setSenha(e.target.value)}
                        valor={senha}
                        mensagemValidacao="Precisa ter pelo menos 8 caracteres!"
                        exibirMensagemValidacao={senha && !validarSenha(senha)}
                    />

                    <Botao
                        texto= "Login"
                        tipo="submit"
                        desabilitado = {!validarFormulario() || estaSubmetendo}
                    />
                </form>

                <div className="rodapePaginaPublica">
                    <p>Não possui uma conta?</p>
                    <Link href="/cadastro">Faça seu cadastro agora!</Link>
                </div>
            </div>
        </section>
    )
}
import InputPublico from "../inputPublico";
import Image from "next/image";
import Botao from "../botao";
import Link from "next/link";
import { useState } from "react";

import imagemEnvelope from "../../public/imagens/envelope.svg"
import imagemKey from "../../public/imagens/chave.svg"
import imagemLogo from "../../public/imagens/logo.svg"



export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

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
                <form>
                    <InputPublico
                        imagem={imagemEnvelope}
                        texto={"Email"}
                        tipo={"email"}
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

                    <Botao
                        texto= "Login"
                        tipo="submit"
                        desabilitado = {false}
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
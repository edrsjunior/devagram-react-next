import Image from 'next/image';
import imgHomeAtivo from '../../public/imagens/home_Ativo.svg';
import imgHomeInativo from '../../public/imagens/home_Inativo.svg';
import imgPublicacaoAtivo from '../../public/imagens/publicacao_Ativo.svg';
import imgPublicacaoInativo from '../../public/imagens/publicacao_Inativo.svg';
import imgUsuarioAtivo from '../../public/imagens/usuario_Ativo.svg';
import imgUsuarioInativo from '../../public/imagens/usuario_Inativo.svg';


export default function Navbar({className}){
    return(
        <nav className={`barraNavegacao ${className}`}>
            <ul>
                <li>
                    <Image
                        src={imgHomeAtivo}
                        alt='Icone Home'
                        width={20}
                        height={20}
                    />
                </li> 
                
                <li>
                    <Image
                        src={imgPublicacaoInativo}
                        alt='Icone Publicacao'
                        width={20}
                        height={20}
                    />
                </li> 

                <li>
                    <Image
                        src={imgUsuarioInativo}
                        alt='Icone Usuario'
                        width={20}
                        height={20}
                    />
                </li> 

            </ul>
        </nav>
    );
}
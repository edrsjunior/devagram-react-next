import Image from 'next/image';
import logoHozintalImg from '../../public/imagens/LogoHorizontal.svg';
import imagemLupa from '../../public/imagens/lupa.svg';
import Navbar from './Navbar';

export default function Header() {
    return(
        <header className='cabecalhoPrincipal'>
            <div className='conteudoCabecalhoPrincipal'>
                <div className='logoCabecalhoPrincipal'>
                    <Image
                        src={logoHozintalImg}
                        alt='Logo Devagram'
                        layout='fill'
                    />
                </div>

                <div className='barraPesquisa'>
                    <div className='containerImageLupa'>
                        <Image
                            src={imagemLupa}
                            alt='Imagem Lupa Pesquisa'
                            layout='fill'
                        />
                    </div>

                    <input
                        type='text'
                        placeholder='Pesquisar'
                        value={''}
                        onChange={() => {console.log('Pesquisando')}}
                    />
                </div>

                <Navbar className='desktop'/>

            </div>
        </header>
    );
}
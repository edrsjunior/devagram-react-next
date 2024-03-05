import { useEffect, useRef } from "react";

export default function UploadImg({
    className = '',
    setImagem,
    imagemPreview,
    imagemPreviewClassName= '',
    aoSetarReferencia
}){

    const referenciaInput = useRef(null);

    useEffect(() => {
        if(!aoSetarReferencia){
            return;
        }

        aoSetarReferencia(referenciaInput?.current);

    }, [referenciaInput?.current]);



    const abrirSeletorArquivos = () => {
        referenciaInput?.current?.click()
    }

    const onChangeImagem = () => {
        console.log("Imagem Alterada")

        if (!referenciaInput?.current?.files?.length) {
            return;
        }

        const arquivo = referenciaInput?.current?.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(arquivo);
        fileReader.onloadend = () => {
            setImagem({
                preview: fileReader.result,
                arquivo
            });
        }

    }

    return (
        <div className={`UploadImgContainer ${className}`} onClick={abrirSeletorArquivos}>
            {imagemPreview && (
                <div className="imagemPreviewContainer">
                    <img
                    src={imagemPreview}
                    alt="preview da imagem do usuario"
                    className={imagemPreviewClassName}
                    ></img>
                </div>
            )}
            <input 
            type="file" 
            className="oculto" 
            accept="image/*"
            ref={referenciaInput}
            onChange={onChangeImagem}
            >
            
            </input>
        </div>
        
    );
}
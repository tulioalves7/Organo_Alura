import './Rodape.css'

const Rodape = () => {

    return (
        <div className='rodapes'>
            <div className='midias'>
                <img src="/imagens/fb.png" alt="Facebok" />
                <img src="/imagens/tw.png" alt="Twitter" />
                <img src="/imagens/ig.png" alt="Instagram" />
            </div>
            <div className='logo'>
                <img src="/imagens/logo.png" alt="Organo" />
            </div>
            <div className='direitos'>
                <p>Desenvolvido por Alura e Túlio Braga.</p>
            </div>
        </div>
    )
}

export default Rodape
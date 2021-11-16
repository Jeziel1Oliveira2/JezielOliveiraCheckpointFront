import '../style/landingB.scss';

function landinB() {
  
    const projetos = [
        {
            id: 1,
            titulo: "Microondas JS",
            imagem: "data:image/jpeg;base64,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",
            site: "https://jeziel1oliveira2.github.io/checkpoint/",
            codigofonte: "https://github.com/Jeziel1Oliveira2/checkpoint.git"
        },
        {
            id: 2,
            titulo: "Primeiro trabalho em html",
            imagem: "https://img.olhardigital.com.br/wp-content/uploads/2020/08/20200821092335.jpg",
            site: "https://jeziel1oliveira2.github.io/Front-eng/",
            codigofonte: "https://github.com/Jeziel1Oliveira2/Front-eng.git"
        },
        {
            id: 3,
            titulo: "Meu primeiro projeto React",
            imagem: "https://s2.glbimg.com/lozlcZNfEOoa0Vbgr1xCaEUQBcw=/0x0:1252x620/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/6/P/7KiRTOSAekjW6vc4NYTw/passo-1.png",
            site: "https://jeziel1oliveira2.github.io/aulaIntegradora/",
            codigofonte: "https://github.com/Jeziel1Oliveira2/aulaIntegradora.git"
        }
    ];

    return (
        projetos.map((projetos) => {
            return (
            
                <ul id="projetos" key={projetos.id}>
                    <li>
                        <h3 className="letras">{projetos.titulo}</h3>    
                    </li>
                    <li>
                    <img id="foto" src={projetos.imagem} alt="ImgProjeto"/>
                    </li>
                    <li>
                        <strong className="letras">Ver o projeto: </strong>
                        <a class="link" href={projetos.site}>Site</a>
                    </li>
                    <li>
                        <strong className="letras">Código-fonte: </strong>
                        <a class="link" href={projetos.codigofonte}>Código Fonte(GitHub)</a>
                    </li>
                </ul>           
            )
        })
    )
}

export default landinB;
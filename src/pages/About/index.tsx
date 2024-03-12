import AboutImage from '../../assets/img/about-image.jpg'

import './style.css'

const About = () => {
  return (
    <main className='container about-page'>
      <div className='about-text'>
        <h1>SOBRE</h1>
        <p>
          Emily Ramos, sou uma fotógrafa apaixonada pela arte de capturar momentos únicos e transformá-los em memórias eternas. Minha história com a fotografia começou com um celular e um show da banda dos meus amigos, depois disso busquei aprender cada vez mais, e todo trabalho que caia na telha era bem vindo.
          Acredito que cada clique é uma oportunidade de explorar novas perspectivas e criar imagens que inspirem e emocionem. Estou constantemente em busca de expandir meu trabalho e compartilhar minha paixão com o mundo.
        </p>
      </div>
      <div className='about-image'>
        <img src={AboutImage} alt="Emily Ramos" />
      </div>
    </main>
  )
}

export default About;
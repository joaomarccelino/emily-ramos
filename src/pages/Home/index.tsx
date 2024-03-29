import './style.css'
import Lollo1 from '../../assets/img/18° prêmio lollo terra de mpb 2023.jpg';
import Bienal1 from '../../assets/img/35° bienal de arte de São Paulo 2023.jpg';
import Bienal2 from '../../assets/img/35° bienal de arte de sao paulo 2023(1).jpg';
import Bienal3 from '../../assets/img/35° bienal de arte de sao paulo 2023.jpg';
import Bienal4 from '../../assets/img/35° bienal de arte de são paulo 2023(1).jpg';
import BandaMais from '../../assets/img/banda mais bonita na cidade 2023.jpg';
import BatRap from '../../assets/img/batalha de rap no _MANI.festa_ @coletivocacau.jpg';
import Batuque from '../../assets/img/batuque de carnaval 2024 @batuquedosperdidos.jpg';
import Abigail1 from '../../assets/img/bloco da abigail 2024(1).jpg';
import Abigail2 from '../../assets/img/bloco da abigail 2024.jpg';
import Ballet from '../../assets/img/festival anual de ballet 2023 @equilíbrionaspontas(1).jpg';
import Ballet2 from '../../assets/img/festival anual de ballet 2023 @equilíbrionaspontas.jpg';
import ColStar from '../../assets/img/lançamento da coleção _stars_ 2024 @kx7xn(1).jpg';
import ColStar2 from '../../assets/img/lançamento da coleção _stars_ 2024 @kx7xn.jpg';
import OfPipa from '../../assets/img/oficina de pipa @casaopoca.jpg';
import AnaPaia from '../../assets/img/show da ana paia e banda no festival clareia 2023.jpg';
import ShowPerdidos2024 from '../../assets/img/show da perdidos banda 2023_.jpg';
import ShowJotaQuest from '../../assets/img/show jota quest 2024 @jotaquest(1).jpg';
import ShowJotaQuest2 from '../../assets/img/show jota quest 2024 @jotaquest.jpg';
import ShowMarcos from '../../assets/img/show marcos e belutti 2024 @marcosebelutti.jpg';
import ShowPerdidos2023 from '../../assets/img/show perdidos 2023 @perdidos.jpg';
import ShowPerdidos20232 from '../../assets/img/show perdidos 2023.jpg';
import ShowPerdidos20242 from '../../assets/img/show perdidos 2024.jpg';
import TardeCultural from '../../assets/img/tarde cultural @casaopoca.jpg';
import PortfolioImage from '../../components/PortfolioImage';
import Modal from '../../components/Modal';
import { useState } from 'react';


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setIsModalOpen(true);
    setSelectedImageIndex(index);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(0);
  };

  const portfolioItems = [
    {
      source: ShowJotaQuest,
      name: "Show Jota Quest - 2024",
      orientation: "portrait"
    },
    {
      source: BandaMais,
      name: "Show Banda Mais Bonita da Cidade - 2023",
      orientation: "portrait"
    },
    {
      source: ShowPerdidos20242,
      name: "Show Banda PERDIDOS - 2024",
      orientation: "portrait"
    },
    {
      source: ShowPerdidos2023,
      name: "Show Banda PERDIDOS- 2023",
      orientation: "portrait"
    },
    {
      source: ColStar,
      name: "Lançamento da Coleção Stars - 2024",
      orientation: "landscape"
    },
    {
      source: Lollo1,
      name: "Festival Lollo Terra - 2023",
      orientation: "portrait"
    },
    {
      source: Bienal1,
      name: "Bienal de Arte - 2023",
      orientation: "portrait"
    },
    {
      source: BatRap,
      name: "Batalha de Rap - 2023",
      orientation: "portrait"
    },
    {
      source: Abigail2,
      name: "Bloco da Abigail - 2024",
      orientation: "landscape"
    },
    {
      source: Bienal2,
      name: "Bienal de Arte - 2023",
      orientation: "portrait"
    },
    {
      source: Batuque,
      name: "Batuque de Carnaval - 2024",
      orientation: "portrait"
    },
    {
      source: Ballet2,
      name: "Festival Anual de Ballet - 2023",
      orientation: "portrait"
    },
    {
      source: ColStar2,
      name: "Lançamento da Coleção Stars - 2024",
      orientation: "portrait"
    },
    {
      source: Abigail1,
      name: "Bloco da Abigail - 2024",
      orientation: "portrait"
    },
    {
      source: AnaPaia,
      name: "Show Ana Paia - 2023",
      orientation: "landscape"
    },
    {
      source: ShowPerdidos2024,
      name: "Show Banda PERDIDOS - 2024",
      orientation: "portrait"
    },
    {
      source: ShowJotaQuest2,
      name: "Show Jota Quest - 2024",
      orientation: "portrait"
    },
    {
      source: ShowMarcos,
      name: "Show Marcos & Belutti - 2024",
      orientation: "portrait"
    },
    {
      source: Bienal3,
      name: "Bienal de Arte - 2023",
      orientation: "portrait"
    },
    {
      source: OfPipa,
      name: "Oficina de pipa - 2023",
      orientation: "landscape"
    },
    {
      source: Bienal4,
      name: "Bienal de Arte - 2023",
      orientation: "landscape"
    },
    {
      source: Ballet,
      name: "Festival Anual de Ballet - 2023",
      orientation: "portrait"
    },
    {
      source: ShowPerdidos20232,
      name: "Show Banda PERDIDOS - 2023",
      orientation: "portrait"
    },
    {
      source: TardeCultural,
      name: "Tarde Cultura @casaopoca - 2023",
      orientation: "landscape"
    }
  ];
  return (
    <main className='container main-page'>
      <div className="images-area">
        {
          portfolioItems.map((item, index) => (
            <PortfolioImage key={index} source={item.source} name={item.name} index={index} orientation={item.orientation} openModal={openModal} />
          ))
        }
      </div>
      {isModalOpen && <Modal images={portfolioItems} initialIndex={selectedImageIndex} onClose={closeModal} />}
    </main>
  )
}

export default Home;
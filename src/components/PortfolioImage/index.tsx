import { useState } from 'react';
import './style.css';

type PortFolioImageProps = {
  source: string;
  name: string;
  orientation: string;
  index: number;
  openModal: (index: number) => void; // Função para abrir o modal
}
const PortFolioImage = ({ source, name, orientation, index, openModal }: PortFolioImageProps) => {
  const [showName, setShowName] = useState(false);

  return (
    <>
      {orientation === 'portrait' ?
        <div
          className='portfolio-image-container'
          onMouseEnter={() => setShowName(true)}
          onMouseLeave={() => setShowName(false)}
          onClick={() => openModal(index)}>
          <img className='portfolio-image' src={source} alt="" />
          {showName && <div className="image-overlay"></div>}
          {showName && <div className="image-name">{name}</div>}
        </div>
        :
        <div
          className='portfolio-image-container portfolio-big-image'
          onMouseEnter={() => setShowName(true)}
          onMouseLeave={() => setShowName(false)}
          onClick={() => openModal(index)}
        >
          <img className='big-image' src={source} alt="" />
          {showName && <div className="image-overlay"></div>}
          {showName && <div className="image-name">{name}</div>}
        </div>
      }

    </>
  )
}

export default PortFolioImage;
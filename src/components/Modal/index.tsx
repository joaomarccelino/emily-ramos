import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import './style.css'

interface ImageProps {
  source: string;
  name: string;
  orientation: string;
}

interface ModalProps {
  images: ImageProps[]; // Lista de URLs das imagens
  initialIndex: number; // Índice inicial da imagem
  onClose: () => void; // Função para fechar o modal
}

const Modal = ({ images, initialIndex, onClose }: ModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);
  const [maxWidth, setMaxWidth] = useState<number | undefined>(undefined);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const calculateMaxSize = () => {
      const image = new Image();
      image.src = images[currentImageIndex].source;
      image.onload = () => {
        const aspectRatio = image.width / image.height;
        if (aspectRatio > 1) {
          setMaxWidth(window.innerWidth * 0.9);
          setMaxHeight(window.innerHeight * 0.9);
        } else {
          setMaxWidth(window.innerWidth * 1);
          setMaxHeight(window.innerHeight * 1);
        }
      };
    };

    calculateMaxSize();

    const handleResize = () => {
      calculateMaxSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [images, currentImageIndex]);
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ width: maxWidth, height: maxHeight }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <IoMdCloseCircle size={40} color='red'/>
        </button>
        <button className="modal-nav-btn modal-prev-btn" onClick={handlePrevImage}>
          <IoIosArrowBack size={40} color={"#fff"} />
        </button>
        <button className="modal-nav-btn modal-next-btn" onClick={handleNextImage}>
          <IoIosArrowForward size={40} color={"#fff"} />
        </button>
        <img
          src={images[currentImageIndex].source}
          alt={`Imagem ${currentImageIndex + 1}`}
          className="modal-image"
          style={{ maxWidth, maxHeight }}
        />
      </div>
    </div>
  );
};

export default Modal;
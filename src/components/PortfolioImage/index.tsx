import { useState } from 'react';
import './style.css';

type PortFolioImageProps = {
  source: string;
  name: string;
}
const PortFolioImage = ({source, name}: PortFolioImageProps) => {
  const [showName, setShowName] = useState(false);



  return (
    <div
    className='portfolio-image-container'
      onMouseEnter={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
    >
      <img className='portfolio-image' src={source} alt="" />
      {showName && <div className="image-overlay"></div>}
      {showName && <div className="image-name">{name}</div>}
    </div>
  )
}

export default PortFolioImage;
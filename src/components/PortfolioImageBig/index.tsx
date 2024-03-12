import { useState } from 'react';
import './style.css';
type PortFolioImageBigProps = {
  source: string;
  name: string;
}

const PortFolioImageBig = ({ source, name }: PortFolioImageBigProps) => {
  const [showName, setShowName] = useState(false)
  return (
    <div
    className='portfolio-image-container portfolio-big-image'
      onMouseEnter={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
    >
      <img className='big-image' src={source} alt="" />
      {showName && <div className="image-overlay"></div>}
      {showName && <div className="image-name">{name}</div>}
    </div>
  )
}

export default PortFolioImageBig;
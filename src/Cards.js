import React,{useEffect, useState} from 'react'
import { useSpring, animated as a } from 'react-spring'

import './styles.css'

function Cards({data,isFlipped}) {
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })
    useEffect(() => {
        isFlipped(flipped)
    }, [flipped])
    
    return (
        <div>
                    <div onClick={() => set(state => !state)}>
                    <a.div className="c front" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
                    
                    <div className="container mt-5">
  <div className="row">
    <div className="col text-center">
      <img src={data.pic} alt={data.pic} class="img-fluid image rounded-circle"/>
    <p className="name">{data.from}</p>
    </div>
  </div>
</div>
                    
                    </a.div>
                <a.div class="c back" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
                   
                    <div className="row">
                            <div className="col">
                                <img src={data.pic2} alt={data.pic2} className="front-image"/>
                                                          </div>
                            <div className="col">
                                <p className="font"> from:  {data.from}</p>
                                <p className="font">{data.message}</p>
                            </div>
                        </div>
                </a.div>.
    </div>
        </div>
    )
}

export default Cards

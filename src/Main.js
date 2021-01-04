import React,{useState,useEffect} from 'react'
import { Fireworks } from 'fireworks/lib/react'
import pic3 from './images/pic3.png';
import pic2 from './images/pic2.png';
import pic4 from './images/pic4.png';

function Main({isgreet}) {
    let fxProps1 = {
    
        count: 1,
        interval: 800,
        colors: ['pink', 'yellow', 'orange'],
        calc: (props, i) => ({
          ...props,
          x: (i + 1) * (window.innerWidth /1.1) - (i + 1) * 80,
          y: 10 + Math.random() * 200 - 50 + (i === 2 ? -80 : 0)
        })
      }
      let fxProps2 = {
        
        count: 1,
        interval: 800,
        colors: ['pink', 'yellow', 'orange'],
        calc: (props, i) => ({
          ...props,
          x: (i + 1) * (window.innerWidth /5) - (i + 1) * 100,
          y: 10 + Math.random() * 200 - 50 + (i === 2 ? -80 : 0)
        })
      }
      
      const [scen1, setscen1] = useState(true);
      const [classn, setclass] = useState("text animate__animated animate__rotateIn");
      const [showbtn, setshowbtn] = useState(false);
      useEffect( () => {
        fetchdata(); 
        setTimeout(() => {
          setscen1(false);  
        }, 6000);
        setTimeout(() => {
            setshowbtn(true);  
          }, 7000);
          
      }, [])
      
      const fetchdata = async() =>{
        
        await setanimation("text animate__animated animate__rubberBand",2000);
        await setanimation("text animate__animated animate__tada animate__infinite infinite",1000);
        }
      
        const setanimation = (anime,delay) =>{
        setTimeout(() => {
          setclass(anime);
             }, delay);
      } 
      const igreet = () =>{
          isgreet(true);
      }
      
      return (
        <div className="App">
          <div className="head">
            <img src={pic2} alt={pic2} style={{position:"absolute",bottom:"0",right:"0px"}} />
            <img src={pic4} alt={pic4} style={{position:"absolute",bottom:"0",left:"-5px",}} />
            <img src={pic3} alt={pic3} style={{position:"absolute",top:"10px",left:"50vw"}} />
            <div className="container">
            
              <p className={classn} >HAPPY BIRTHDAY</p>
              <p className={scen1?"text animate__animated animate__flipInX animate__delay-4s":"text animate__animated animate__tada animate__delay-1s animate__infinite	infinite"}>HANNA MARIE</p>   
                {showbtn &&
                    <>
                        <div className="animate__animated animate__flipInX animate__delay-4s">
                        <a className={" btn btn-primary" } onClick={igreet}>Greetings...</a>
                        </div>
                    </>
                }
            </div>
          {!scen1 &&
          <>
            <Fireworks {...fxProps1}/>
            <Fireworks {...fxProps2}/>
          </>
          }
            </div>
        </div>
        );
    
}

export default Main

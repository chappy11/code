import React,{useEffect,useState} from 'react'
import jayvie1 from './images/jayvie.jpg';
import jayvie2 from './images/jayvie1.jpg'
import maan1 from './images/maan.jpg';
import maan2 from './images/maan2.jpg';
import eme1 from './images/eme.jpg';
import eme2 from './images/eme1.jpg';
import aira1 from './images/aira.jpg';
import aira2 from './images/aira1.jpg';
import Cards from './Cards';



function Greetings() {
    const [data, setData] = useState({});
    const maan ="Happy Happy Birthday Han I know how happy you are right now, finally nakauyab na jud kag balik char leng HAHAHAH Bitaw bahalag gi malas2 sa past ang importante swerte ang present Kahibaw jud ka unsa ka kaimportante sa akoa. Gikan sa una nato pagkaila kadto gi hilak2an tika bsag wako kaila nimo ug wa ka kaila nako  hahahahahahh Nya damayan ko nimo, damayan sad tika mura tag true. If ever naa kay problems naa ra ko pirme. Dli tika biyaa, dli sd tika pasagdan. I do hoe you guys reat each other right and make it work. Im happy for you Stay Healthy and Happy";
    const jayvie = "Hi han happiest birthday Guwang na jud ka hahahah. Bitaw han grabe jud nako ka thankful na nakaila taka. Bisan pa pila pa ta katuig na nagkaila sa imo rajud murag comfortable ko mo share (kahibaw naka ana hehe). Then karun kahibaw ko sud sa pila katuig unsa ka ka fighter, unsa pa daw to ato linyahan.. Everythings happen for a reason.. Saksi ko sa tanan nimo paghilak sa bhouse, kun unsa ka mahiubos kun unsa ka maglagot, kun unsa ka kasaputon haha sabot ra jud ko then gi mingaw sad ko kanang murag tag mga tanga na mang hilak sa bhouse. Permi mani nako isulti nimo pero ako na sad balikon ug sulti karun na happy kaayo ko nimo karun. Wala jud koy iba na ge wish nimo kundili be happy always. Love you hannaaa. Mya God bless you always. Amping ka always kamo tanan ara. Enjoy nalang sa imo adlaw labyou"
    const emelita = "Hanna! Happy Birthday Titikalagas na kita aww ako la ngayan hahah balitaw stay safe always pati imo family ngan patambok na ano pa ba ? Aaaay. ou ngayan baga glow up ka baya yana blooming pa kami san o pa daw hahahah miss you han nakakamiss geap tim pagiging saputon iton nakakalasan nala kami baga gud la deri geap ako sugad haha parehas ta nakakamiss geap imo oppo camera hahahaha permi puno pictures an im panlaba panhugas ha bhouse tim mga notes pag harapit na ang exam ngan tim expression pag kinikilig ka hahahah baa daw kay namamaso makarimadima gud hahahah sige amo la adto next year naman hahaha Happy Birthday Han Hoping to have more memories with you and others be happy and Godbless Lovelats ingats";
    const aira ="Hi Marieeee Mareng Mariee Happy Birthdayyy! Mapapasanaol ka nalang talaga. 33 ka na sanglit pakamaybout na. It sapot pang gagamba la dire pan Hanna haha nakakatawa yun grabeeee. Pero may wish ako para haim kay required ito. Hmm sana maging masaya ka with him ay chaar (maeffort baya SANAOLLL). Sana humataas ka na pagsul-ot la permi hit high-heeled nga sandals madali la iton an matingog gud pati it calculator maaringasa gihap ako tim wishes nga maka move on naak tas maging masaya na kan Lee Min Ho. Haha choss di ko ngayan birthday. Balit iday enjoy ur day. Pakain ka na lang pagkadto ta ha Tacloban pagkuha hit gamit. Ay oo ngayan graduate kan na han pagiging sanaol  ayiee che nakakabitter hahah Mahal kita mula noon hanggang ngayon ikaw ato ako.. Haayys napkulang-kulang it quarantine God bless Marie punta tayo sa Marie soon mwa";
    const message = [
        {
            id:1,
            pic:maan1,
            message:maan,
            from:"Maan",
            pic2:maan2
            
        },
        {
            id:2,
            pic:jayvie1,
            message:jayvie,
            from:"Jayvie",
            pic2:jayvie2
        },
        {
            id:3,
            pic:eme1,
            message:emelita,
            from:"Eme",
            pic2:eme2
        },
        {
            id:4,
            pic:aira1,
            message:aira,
            from:"Aira",
            pic2:aira2
        }
    ] 
    const [flip, setflip] = useState(true);
    const [count, setcount] = useState(1);
    const [classn, setclassn] = useState("")
    const [showbtn, setshowbtn] = useState({
        btnnext:true,
        btnprev:true
    })
    
    useEffect(() => {
        getmessage(count);
        let prev = count;
        if(count > prev){
            next();
            
        }
        if(count===1){
            setshowbtn({btnprev:false,btnnext:true});
        }
            else if(count===4){
            setshowbtn({btnprev:true,btnnext:false});
        }else{
            setshowbtn({btnnext:true,btnprev:true});
        }
    }, [count])
    const getmessage=(index) =>{
  
        const data = message.find(e => e.id===index);
        setData({...data});
          
    }
    const next = async() =>{
        
        await setanimation("text animate__animated animate__fadeOutLeftBig",0);
        setTimeout(() => {
            setcount(count+1);    
        }, 1000);
        
        await setanimation("text animate__animated animate__fadeInRightBig",1000);
        }
        const prev = async() =>{
        
            await setanimation("text animate__animated animate__fadeOutRightBig",0);
            setTimeout(() => {
                setcount(count - 1);    
            }, 1000);
            
            await setanimation("text animate__animated animate__fadeInLeftBig",1000);
            }
          
        const setanimation = (anime,delay) =>{
        setTimeout(() => {
          setclassn(anime);
             }, delay);
      } 
    const onClick = (e) =>{
        e.preventDefault();
        let ev = e.target.value;
        
        if(ev==="next"){
          next();        
        }else if(ev==="prev"){
            prev()
        }
      
    }
    const isFlipped = (flip) =>{
        setflip(flip);
    }
    
    return (
        <div>
            <div className="head2 animate__animated animate__lightSpeedInRight">
                <a className="btn btn-success btngologin" href="/login">Login</a>
                <div className={classn}>
                    <Cards data={data} isFlipped={isFlipped}/>
                </div>
        {!flip  &&
         <>
         <div className="prev">
                {showbtn.btnprev &&  <button className="btn btn-primary" value="prev" onClick={onClick}>previous</button>}
          </div>
          <div className="next">      
                {showbtn.btnnext  && <button className="btn btn-primary" value="next" onClick={onClick}>Next</button>}
        
                </div>
            </>
        }
            </div>
        </div>
    )
}

export default Greetings

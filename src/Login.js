import React,{useState} from 'react'
import "./login.css";
function Login() {
    const password ="082320";
    const [mypass, setmypass] = useState("");
    const [message, setmessage] = useState("");
    const [showmess, setshowmess] = useState(false);
    const onChange = e =>{
        setmypass(e.target.value);
    }

    const onClick = (e) =>{
        e.preventDefault();
        if(password===mypass){

            setTimeout(() => {
                window.location.pathname="/mygreeting";    
                setshowmess(false);
            }, 3000);
            setshowmess(true);
            setmessage("Successfully Login")
        }else{
            setshowmess(true);
            setmessage("Error")
            setTimeout(() => {
                   
                setshowmess(false);
            }, 3000);
        }        
    }
    
    return (
        <div>
            <div className="head2">
                    <div className="form">
                        <div className="card ">
                            <p>This page is only for authorize, mauwaw ang developer</p>
                            <input className="form-control form-sm" onChange={onChange} placeholder="Password"/>
                             <br></br>
                            <button className="btn btn-success" onClick={onClick}>Login</button>
                            {showmess &&                                
                                <p style={{textAlign:"center"}}>{message}</p>
                           
                           }
                                                      </div>
                </div>

            </div>
        </div>
    )
}

export default Login

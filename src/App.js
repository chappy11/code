import React, { useState } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Main from './Main';
import './App.css'
import Greetings from './Greetings';
import Login from './Login';
import Mygreeting from './Mygreeting'
function App() {
    const [main, setstate] = useState(false);
    const [greeting, setgreeting] = useState(false);
    
    const isgreet = (greet) =>{
        setgreeting(greet)
    }

    return (
        <div>
        {!greeting &&
            <Main isgreet={isgreet}/>
        }
        {greeting &&
            <Greetings />
        }
        
        </div>
    )
}

export default App

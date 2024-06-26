import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{
    const s1 ={
        "name":"Teja",
        "class":"IT"
    }

    const [state,setState] = useState(s1);
    const update = () =>{
        setTimeout(()=>{
            setState({
                "name":"Tejas",
                 "class":"IIT"
            }

            )

        },1000

        )
    }
    return(
        <noteContext.Provider value={{state,update}}>
               {props.children}
        </noteContext.Provider>
    )
}
export default NoteState
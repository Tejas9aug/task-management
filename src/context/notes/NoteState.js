import noteContext from "./noteContext";

const NoteState = (props)=>{
    const state ={
        "name":"Teja",
        "class":"IT"
    }
    return(
        <noteContext.Provider value={state}>
               {props.children}
        </noteContext.Provider>
    )
}
export default NoteState
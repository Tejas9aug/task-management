import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props)=>{
  const notesinitial = [
  {
    "user": "666c52b73fc4328a2df0a052",
    "title": "codeforces",
    "description": "specialist on codeforces.",
    "tag": "General",
    "_id": "667ec5a1935aa8cef85bcea3",
    "date": "2024-06-28T14:16:01.070Z",
    "__v": 0
  },
  {
    "user": "666c52b73fc4328a2df0a052",
    "title": "codeforces",
    "description": "specialist on codeforces.",
    "tag": "General",
    "_id": "667ec5a1935aa8cef85bcea3",
    "date": "2024-06-28T14:16:01.070Z",
    "__v": 0
  },
  {
    "user": "666c52b73fc4328a2df0a052",
    "title": "codeforces",
    "description": "specialist on codeforces.",
    "tag": "General",
    "_id": "667ec5a1935aa8cef85bcea3",
    "date": "2024-06-28T14:16:01.070Z",
    "__v": 0
  },
  {
    "user": "666c52b73fc4328a2df0a052",
    "title": "codeforces",
    "description": "specialist on codeforces.",
    "tag": "General",
    "_id": "667ec5a1935aa8cef85bcea3",
    "date": "2024-06-28T14:16:01.070Z",
    "__v": 0
  },
  {
    "user": "666c52b73fc4328a2df0a052",
    "title": "codeforces",
    "description": "specialist on codeforces.",
    "tag": "General",
    "_id": "667ec5a1935aa8cef85bcea3",
    "date": "2024-06-28T14:16:01.070Z",
    "__v": 0
  },
  {
    "user": "666c52b73fc4328a2df0a052",
    "title": "codeforces",
    "description": "specialist on codeforces.",
    "tag": "General",
    "_id": "667ec5a1935aa8cef85bcea3",
    "date": "2024-06-28T14:16:01.070Z",
    "__v": 0
  },
  {
    "user": "666c52b73fc4328a2df0a052",
    "title": "codeforces",
    "description": "specialist on codeforces.",
    "tag": "General",
    "_id": "667ec5a1935aa8cef85bcea3",
    "date": "2024-06-28T14:16:01.070Z",
    "__v": 0
  },
  {
    "user": "666c52b73fc4328a2df0a052",
    "title": "codeforces",
    "description": "specialist on codeforces.",
    "tag": "General",
    "_id": "667ec5a1935aa8cef85bcea3",
    "date": "2024-06-28T14:16:01.070Z",
    "__v": 0
  }
]
const [notes,setnotes] = useState(notesinitial);
    return(
        <noteContext.Provider value={{notes}}>
               {props.children}
        </noteContext.Provider>
    )
}
export default NoteState
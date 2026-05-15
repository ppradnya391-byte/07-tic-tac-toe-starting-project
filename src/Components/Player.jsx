import { useState } from "react";

function Player({initialName,symbol,isActive,onChangeName}){

  const [playerName, setPlayerName] = useState(initialName);

  function handleChange(event){
setPlayerName(event.target.value);
  }


  const [ isEditing, setIsEditing ] = useState(false);


  function handleEditClick(){
   setIsEditing((editing) => !editing);
   if(isEditing){
   onChangeName(symbol,playerName);
  }
}

  let editableplayerName =  <span className="player-name">{playerName}</span>;
  if(isEditing){
    editableplayerName = <input type="text" value={playerName} onChange={handleChange}required />
  }
  
    return(
         <li className={isActive ? 'active' : undefined}>
        <span className="player">
         
       {editableplayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );

}

export default Player;
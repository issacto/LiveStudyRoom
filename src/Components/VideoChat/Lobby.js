import React from 'react';
import { ReactComponent as LockLogo }  from "../Images/locker.svg"
const Lobby = ({
  roomName,
  handleRoomNameChange,
  handleSubmit
}) => {
  return (
    <div style={{  justifyContent: "center"}}>
     < LockLogo fill ="white" stroke="rgb(138, 187, 199)" width="100%" height="50%"/>
     <br/><br/>
    
    <form onSubmit={handleSubmit}>
      <h2 style={{fontSize:"4vh",color:"rgb(138, 187, 199)"}}>Enter a room name</h2>
        <label htmlFor="room"></label>
        <div>
        <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          required
        />
        </div>
        <br/>
      <button style={{ display:"inline", padding: "1vh", fontSize:"2.3vh",marginLeft:"3vh"}}type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Lobby;
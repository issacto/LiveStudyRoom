import React, { useState, useCallback, useEffect } from "react";
import Video from "twilio-video";
import Lobby from "./Lobby";
import Room from "./Room";
import {writeData,deleteData,getUserData} from "../Firebase/action"



const VideoChat = props=> {
  const [input, setThings] = useState(props);
  const username = input.inputUsername
  const isSetRoom = input.inputIsSetRoom
  console.log(isSetRoom)
  console.log(username)
  const [data, setData] = useState({ hits: [] });
  const [roomName, setRoomName] = useState("");
  const [room, setRoom] = useState(null);
  const [connecting, setConnecting] = useState(false);


  const handleRoomNameChange = useCallback((event) => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setConnecting(true);
      writeData(roomName)
      const data = await fetch("/video/token", {
        method: "POST",
        body: JSON.stringify({
          identity: username,
          room: roomName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      Video.connect(data.token, {
        name: roomName,
      })
        .then((room) => {
          setConnecting(false);
          setRoom(room);
        })
        .catch((err) => {
          console.error(err);
          setConnecting(false);
        });
    },
    [roomName, username]
  );

  const handleLogout = useCallback(() => {
    setRoom((prevRoom) => {
      if (prevRoom) {
        prevRoom.localParticipant.tracks.forEach((trackPub) => {

          trackPub.track.stop();
          
        });
        prevRoom.disconnect();
      }
      
      deleteData(prevRoom.name)
      return null;
    });
  }, []);
  const display = useCallback(
    async (event) => {
            var x= await getUserData();
          return x} )

  useEffect(() => async () => {
    const result = await 
      display()
    ;
    setData(result);
    if (room) {
      const tidyUp = (event) => {
        if (event.persisted) {
          return;
        }
        if (room) {
          handleLogout();
        }
      };
      window.addEventListener("pagehide", tidyUp);
      window.addEventListener("beforeunload", tidyUp);
      return () => {
        window.removeEventListener("pagehide", tidyUp);
        window.removeEventListener("beforeunload", tidyUp);
      };
    }
  }, [room, handleLogout]);

  let render;
  if (room) {
    render = (
      <Room roomName={roomName} room={room} handleLogout={handleLogout} />
    );
  } else {
    if(isSetRoom){
      render = (
      
        <Lobby
          username={username}
          roomName={roomName}
          handleRoomNameChange={handleRoomNameChange}
          handleSubmit={handleSubmit}
          connecting={connecting}
        />
        
      );

    }else{
      {console.log(data)}
      render = (
        <div>
        <p>ERROR</p>
          {data!=null|data!=undefined? data.hits.map(person => (
            <p>Hello, {person} !</p> 
            
        )):null}
        </div>
      )
    }
    
  }
  return render;
};

export default VideoChat;
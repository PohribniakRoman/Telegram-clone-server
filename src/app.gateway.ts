import { SubscribeMessage,WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

const db = []


@WebSocketGateway()
export class AppGateway  {
    @WebSocketServer()
    server;
    @SubscribeMessage("joinToRoom")
    handleJoin(client:any,data:{user1,user2}){
        let connected = false;
        const separator = "12-\\-12";
        const createRoom = data.user1+separator+data.user2
        console.log(createRoom);
        db.forEach(room=>{
            if (room.id.split(separator).includes(data.user1) && room.id.split(separator).includes(data.user2)) {
                client.join(room.id)
                connected = true;   
            }
        })
        if(!connected){
            client.join(createRoom)
            db.push({id:createRoom,msg:[]})
        }
        console.log(db);
    }

    @SubscribeMessage("msgToClient")
    handleMsg(client:any,data:{sender,room,msg}){
        db.forEach(room=>{
            if(room.id === data.room){
                this.server.to(data.room).emmit("msg",{sender:data.sender,msg:data.msg}) 
                room.msg.push({sender:data.sender,msg:data.msg})
            }
        })
    }
}
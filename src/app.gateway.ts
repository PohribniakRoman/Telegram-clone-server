import { SubscribeMessage,WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

const db = []


@WebSocketGateway()
export class AppGateway  {
    @WebSocketServer()
    server;
    @SubscribeMessage("PRIVATE_MESSAGE")
    handleMsg(client:any,data:{sender,room,msg}){
        console.log(client.id);
        
    }
}
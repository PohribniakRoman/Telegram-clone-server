import { SubscribeMessage,WebSocketGateway,OnGatewayInit } from "@nestjs/websockets";

@WebSocketGateway()
export class AppGateway implements OnGatewayInit {
    afterInit(server: any) {
        console.log(server);
        
    }
    @SubscribeMessage("msgToClient")
    handleMsg(client:any,payload:any){
        console.log(client.id)
    }
}
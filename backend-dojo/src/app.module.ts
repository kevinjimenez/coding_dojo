import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { SalaModule } from './sala/sala.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WebSocketModule } from './websockets/websockets.module';


@Module({
  imports: [
    MongooseModule
      .forRoot('mongodb://localhost:32768/mongo', { useNewUrlParser: true }),
    WebSocketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

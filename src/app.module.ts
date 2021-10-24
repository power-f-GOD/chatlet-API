import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CliquesModule } from './cliques/cliques.module';
import { PalsModule } from './pals/pals.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: process.env.NODE_ENV === 'development',
      logging: false, // process.env.NODE_ENV === 'development',
      autoLoadEntities: true,
      entities: ['dist/**/entities/*.entity.js'],
      migrations: ['dist/**/migrations/*.js'],
      subscribers: ['dist/**/subscribers/*.subscriber.js']
    }),
    AuthModule,
    UsersModule,
    CliquesModule,
    PalsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

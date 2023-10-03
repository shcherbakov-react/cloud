import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'cornelius.db.elephantsql.com',
      port: 3306,
      username: 'kkjsvnwq',
      password: 'wOtKFUcj72U3-9XWBa2tq8SqhCUNaiLf',
      database: 'kkjsvnwq',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

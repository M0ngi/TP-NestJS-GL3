import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModuleModule } from './todo-module/todo-module.module';
import { CommonModuleModule } from './common-module/common-module.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import TodoEntity from './todo-module/entities/TodoEntity';
import { AuthentificationMiddleware } from './authentification/authentification.middleware';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CvsModule } from './cvs/cvs.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [
    TodoModuleModule, 
    CommonModuleModule,
    ConfigModule.forRoot({
      envFilePath: ".env"
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      username: "root",
      password: "root",
      database: "mydb",
      entities: [TodoEntity],
      synchronize: true
    }),
    UsersModule,
    CvsModule,
    SkillsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthentificationMiddleware)
      .forRoutes(
        "todo", 
        "v2/todo",
        "cvs",
        "skills",
      )
  }
  
}

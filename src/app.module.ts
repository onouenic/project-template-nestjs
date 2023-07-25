import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { KeycloakModule } from './keycloak/keycloak.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    KeycloakModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

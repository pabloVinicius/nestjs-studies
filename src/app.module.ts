import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { LibrariesModule } from './libraries/libraries.module';
import { PensModule } from './pens/pens.module';

const url = process.env.MONGO_URL || 'localhost';

/**
 * 
 * GraphQLModule.forRoot({
      playground: true,
      introspection: true,
      path: '/v1/graphql',
      autoSchemaFile: 'schema.gql',
      fieldResolverEnhancers: ['filters'],
      debug: process.env.NODE_ENV !== 'production',
      useGlobalPrefix: process.env.NODE_ENV !== 'production',
    }),
 */

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      // path: '/v1/graphql',
      // debug: process.env.NODE_ENV !== 'production',
      // useGlobalPrefix: process.env.NODE_ENV !== 'production',
    }),
    MongooseModule.forRoot(`mongodb://${url}:27017/customer`, {
      useNewUrlParser: true,
    }),
    LibrariesModule,
    BooksModule,
    PensModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

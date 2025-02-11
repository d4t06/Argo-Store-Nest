import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { InvoicesModule } from './invoices/invoices.module';
import { InvoiceItemsModule } from './invoice-items/invoice-items.module';
import { ProductUnitsModule } from './product-units/product-units.module';
import { InvoiceItemQuantitiesModule } from './invoice-item-quantities/invoice-item-quantities.module';
import { WarehouseEntriesModule } from './warehouse-entries/warehouse-entries.module';
import { WarehouseEntryItemsModule } from './warehouse-entry-items/warehouse-entry-items.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local'],
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([
      {
        // time to live
        ttl: 10000,
        limit: 20,
      },
    ]),
    ProductsModule,
    AuthModule,
    UsersModule,
    CustomersModule,
    InvoicesModule,
    InvoiceItemsModule,
    ProductUnitsModule,
    InvoiceItemQuantitiesModule,
    WarehouseEntriesModule,
    WarehouseEntryItemsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig1739623834853 implements MigrationInterface {
    name = 'Mig1739623834853'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Product_Units\` (\`id\` int NOT NULL AUTO_INCREMENT, \`unit_name\` varchar(255) NOT NULL, \`unit_name_ascii\` varchar(255) NOT NULL, \`conversion_quantity\` int NOT NULL, \`price\` int NOT NULL, \`debt_price\` int NULL, \`product_id\` int NOT NULL, UNIQUE INDEX \`check_unique\` (\`product_id\`, \`unit_name_ascii\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`product_name\` varchar(255) NOT NULL, \`product_name_ascii\` varchar(255) NOT NULL, \`image_url\` varchar(255) NULL, \`image_path\` varchar(255) NULL, \`stock_price\` int NULL, \`stock\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`user_id\` int NOT NULL, UNIQUE INDEX \`check_unique\` (\`user_id\`, \`product_name_ascii\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Invoice_Items\` (\`id\` int NOT NULL AUTO_INCREMENT, \`price\` int NOT NULL, \`quantity\` int NOT NULL, \`unit_name\` varchar(255) NOT NULL, \`product_name\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`invoice_id\` int NOT NULL, \`product_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Invoices\` (\`id\` int NOT NULL AUTO_INCREMENT, \`customer_id\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`user_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Customers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`customer_name\` varchar(255) NOT NULL, \`customer_name_ascii\` varchar(255) NOT NULL, \`phone_number\` varchar(255) NULL, \`address\` varchar(255) NULL, \`user_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`phone_number\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`store_name\` varchar(255) NOT NULL, \`refresh_token\` varchar(255) NOT NULL DEFAULT '', \`role\` varchar(255) NOT NULL DEFAULT 'USER', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Warehouse_Entries\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Warehouse_Entry_Items\` (\`id\` int NOT NULL AUTO_INCREMENT, \`warehouse_entry_id\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Product_Units\` ADD CONSTRAINT \`FK_af4bac54f3b14495110dc7ba496\` FOREIGN KEY (\`product_id\`) REFERENCES \`Products\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_a148c032f029a37e35017d2b29c\` FOREIGN KEY (\`user_id\`) REFERENCES \`Users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Invoice_Items\` ADD CONSTRAINT \`FK_a7895dac7abc48cd50cfc8ea394\` FOREIGN KEY (\`invoice_id\`) REFERENCES \`Invoices\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Invoice_Items\` ADD CONSTRAINT \`FK_e6134bb9677ea986a0ab4839d3c\` FOREIGN KEY (\`product_id\`) REFERENCES \`Products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Invoices\` ADD CONSTRAINT \`FK_a881adf8f2a14217b7c7aa4743e\` FOREIGN KEY (\`customer_id\`) REFERENCES \`Customers\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Invoices\` ADD CONSTRAINT \`FK_e0f50fd509041bc790c006f5b2f\` FOREIGN KEY (\`user_id\`) REFERENCES \`Users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Customers\` ADD CONSTRAINT \`FK_68552605ed25f60194930525332\` FOREIGN KEY (\`user_id\`) REFERENCES \`Users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Warehouse_Entries\` ADD CONSTRAINT \`FK_ec79eabcc7d4f2b0aedcc4ec003\` FOREIGN KEY (\`user_id\`) REFERENCES \`Users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Warehouse_Entry_Items\` ADD CONSTRAINT \`FK_03dfe40157a8ac2372b608561db\` FOREIGN KEY (\`warehouse_entry_id\`) REFERENCES \`Warehouse_Entries\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Warehouse_Entry_Items\` DROP FOREIGN KEY \`FK_03dfe40157a8ac2372b608561db\``);
        await queryRunner.query(`ALTER TABLE \`Warehouse_Entries\` DROP FOREIGN KEY \`FK_ec79eabcc7d4f2b0aedcc4ec003\``);
        await queryRunner.query(`ALTER TABLE \`Customers\` DROP FOREIGN KEY \`FK_68552605ed25f60194930525332\``);
        await queryRunner.query(`ALTER TABLE \`Invoices\` DROP FOREIGN KEY \`FK_e0f50fd509041bc790c006f5b2f\``);
        await queryRunner.query(`ALTER TABLE \`Invoices\` DROP FOREIGN KEY \`FK_a881adf8f2a14217b7c7aa4743e\``);
        await queryRunner.query(`ALTER TABLE \`Invoice_Items\` DROP FOREIGN KEY \`FK_e6134bb9677ea986a0ab4839d3c\``);
        await queryRunner.query(`ALTER TABLE \`Invoice_Items\` DROP FOREIGN KEY \`FK_a7895dac7abc48cd50cfc8ea394\``);
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_a148c032f029a37e35017d2b29c\``);
        await queryRunner.query(`ALTER TABLE \`Product_Units\` DROP FOREIGN KEY \`FK_af4bac54f3b14495110dc7ba496\``);
        await queryRunner.query(`DROP TABLE \`Warehouse_Entry_Items\``);
        await queryRunner.query(`DROP TABLE \`Warehouse_Entries\``);
        await queryRunner.query(`DROP TABLE \`Users\``);
        await queryRunner.query(`DROP TABLE \`Customers\``);
        await queryRunner.query(`DROP TABLE \`Invoices\``);
        await queryRunner.query(`DROP TABLE \`Invoice_Items\``);
        await queryRunner.query(`DROP INDEX \`check_unique\` ON \`Products\``);
        await queryRunner.query(`DROP TABLE \`Products\``);
        await queryRunner.query(`DROP INDEX \`check_unique\` ON \`Product_Units\``);
        await queryRunner.query(`DROP TABLE \`Product_Units\``);
    }

}

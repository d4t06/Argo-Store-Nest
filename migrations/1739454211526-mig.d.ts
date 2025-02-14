import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Mig1739454211526 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}

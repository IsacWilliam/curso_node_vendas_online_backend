import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableUser1713975210189 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            ALTER TABLE public.user ADD UNIQUE(email);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(``);
    }

}

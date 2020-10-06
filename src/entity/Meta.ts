import {
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

export abstract class Meta {
	@PrimaryGeneratedColumn()
	id: number;
	@UpdateDateColumn('timestamptz')
	updatedAt: string;

	@CreateDateColumn('timestamptz')
	createdAt: string;
}

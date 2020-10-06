import {
	CreateDateColumn,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Language } from './Language';

export abstract class Meta {
	@PrimaryGeneratedColumn()
	id: number;

	@UpdateDateColumn('timestamptz')
	updatedAt: string;

	@CreateDateColumn('timestamptz')
	createdAt: string;
}

export abstract class MetaWithLangs extends Meta {
	@OneToOne(() => Language)
	@JoinColumn()
	from: Language;

	@OneToOne(() => Language)
	@JoinColumn()
	to: Language;
}

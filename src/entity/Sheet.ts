import { Column, Entity, ManyToOne } from 'typeorm';
import { Meta } from './Meta';
import { User } from './User';

@Entity()
export class Sheet extends Meta {
	@Column()
	title: string;

	@Column({ default: true })
	containsProfanity: boolean;

	@Column('int')
	points: number;

	@ManyToOne(() => User, (user) => user.sheets)
	createdBy: User;

	@ManyToOne(() => User, (user) => user.forkedSheets, { nullable: true })
	forkedFrom: User;
}

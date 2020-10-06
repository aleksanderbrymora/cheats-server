import {
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToOne,
} from 'typeorm';
import { Language } from './Language';
import { Meta } from './Meta';
import { TranslationGroup } from './TranslationGroup';
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

	@OneToOne(() => Language)
	@JoinColumn()
	from: Language;

	@OneToOne(() => Language)
	@JoinColumn()
	to: Language;

	@ManyToMany(() => TranslationGroup)
	@JoinTable()
	translationGroups: TranslationGroup[];
}

import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { MetaWithLangs } from './Shared';
import { Sheet } from './Sheet';

@Entity()
export class Book extends MetaWithLangs {
	@Column()
	name: string;

	@Column('simple-array')
	authors: string[];

	@Column()
	publisher: string;

	@Column('year', { nullable: true })
	published: number;

	@ManyToMany(() => Sheet, (sheet) => sheet.books)
	@JoinTable()
	sheets: Sheet[];
}

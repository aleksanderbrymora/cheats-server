import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Word } from './Word';

@Entity()
export class Language {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column({
		type: 'varchar',
		width: 20,
		nullable: true,
		comment: 'Emoji of a language flag',
	})
	flag: string;

	@OneToMany(() => Word, (word) => word.language)
	words: Word[];
}

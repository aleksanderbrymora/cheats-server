import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Word } from './Word';

@Entity()
export class TranslationGroup {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToMany(() => Word, (word) => word.language)
	words: Word[];
}

import { Column, Entity, OneToMany } from 'typeorm';
import { Meta } from './Meta';
import { Sheet } from './Sheet';

@Entity()
export class User extends Meta {
	@Column()
	name: string;

	@OneToMany(() => Sheet, (sheet) => sheet.createdBy)
	sheets: Sheet[];

	@OneToMany(() => Sheet, (sheet) => sheet.forkedFrom)
	forkedSheets: Sheet[];
}

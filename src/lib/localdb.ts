import Dexie, { type Table } from 'dexie';

export type Photo = {
	id?: number;
	public_id: string;
	base64Url: string;
};

export type Word = {
	id?: number;
	word: string;
	base64Url: string;
};

export class MySubClassedDexie extends Dexie {
	// 'friends' is added by dexie when declaring the stores()
	// We just tell the typing system this is the case
	photos!: Table<Photo>;
	words!: Table<Word>;

	constructor() {
		super('myDatabase');
		this.version(1).stores({
			photos: '++id, public_id, base64Url', // Primary key and indexed props
			words: '++id, word, base64Url'
		});
	}

	async getRandomPhoto() {
		//count the number of rows in the photo table
		const count = await this.photos.count();
		if (count === 0) return null;

		const randomIndex = Math.floor(Math.random() * count);

		const randomPhoto = await this.photos.offset(randomIndex).first();

		return randomPhoto || null;
	}

	async getRandomWord() {
		const count = await this.words.count();
		if (count === 0) return null;

		const randomIndex = Math.floor(Math.random() * count);
		const randomWord = await this.words.offset(randomIndex).first();

		return randomWord || null;
	}
}

export const db = new MySubClassedDexie();

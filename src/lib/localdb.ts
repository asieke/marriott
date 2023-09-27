import Dexie, { type Table } from 'dexie';

export interface Photo {
	id?: number;
	supabaseName: string;
	base64Url: string;
}

export class MySubClassedDexie extends Dexie {
	// 'friends' is added by dexie when declaring the stores()
	// We just tell the typing system this is the case
	photos!: Table<Photo>;

	constructor() {
		super('myDatabase');
		this.version(1).stores({
			photos: '++id, supabaseName, base64Url' // Primary key and indexed props
		});
	}

	async getRandomPhoto() {
		//count the number of rows in the photo table
		const count = await this.photos.count();
		if (count === 0) return null;

		const randomIndex = Math.floor(Math.random() * count);

		const randomPhoto = await this.photos.offset(randomIndex).first();

		return randomPhoto;
	}
}

export const db = new MySubClassedDexie();

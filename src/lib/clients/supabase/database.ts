export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			artists: {
				Row: {
					artist_url: string | null;
					category: string | null;
					created_at: string;
					description: string | null;
					end_year: number | null;
					has_images: boolean | null;
					id: number;
					image_count: number | null;
					img_url: string | null;
					name: string | null;
					region: string | null;
					short_description: string | null;
					start_year: number | null;
				};
				Insert: {
					artist_url?: string | null;
					category?: string | null;
					created_at?: string;
					description?: string | null;
					end_year?: number | null;
					has_images?: boolean | null;
					id?: number;
					image_count?: number | null;
					img_url?: string | null;
					name?: string | null;
					region?: string | null;
					short_description?: string | null;
					start_year?: number | null;
				};
				Update: {
					artist_url?: string | null;
					category?: string | null;
					created_at?: string;
					description?: string | null;
					end_year?: number | null;
					has_images?: boolean | null;
					id?: number;
					image_count?: number | null;
					img_url?: string | null;
					name?: string | null;
					region?: string | null;
					short_description?: string | null;
					start_year?: number | null;
				};
				Relationships: [];
			};
			images: {
				Row: {
					artist_id: number | null;
					category: string | null;
					created_at: string;
					file_exists: boolean | null;
					id: number;
					sk: string | null;
					title: string | null;
					titleUrl: string | null;
				};
				Insert: {
					artist_id?: number | null;
					category?: string | null;
					created_at?: string;
					file_exists?: boolean | null;
					id?: number;
					sk?: string | null;
					title?: string | null;
					titleUrl?: string | null;
				};
				Update: {
					artist_id?: number | null;
					category?: string | null;
					created_at?: string;
					file_exists?: boolean | null;
					id?: number;
					sk?: string | null;
					title?: string | null;
					titleUrl?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'images_artist_id_fkey';
						columns: ['artist_id'];
						referencedRelation: 'artists';
						referencedColumns: ['id'];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			get_random_art: {
				Args: Record<PropertyKey, never>;
				Returns: {
					artist_id: number;
					artist_name: string;
					artist_url: string;
					short_description: string;
					start_year: number;
					end_year: number;
					region: string;
					artist_category: string;
					image_id: number;
					sk: string;
					title: string;
					image_category: string;
					image_url: string;
				}[];
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}

import { AuthorDetail } from './author-detail';
import { FeaturedMedia } from './featured-media';

export class Post {
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
	};
	excerpt: {
		rendered: string;
	};
	_embedded: {
		author: AuthorDetail;
		'wp:featuredmedia' : FeaturedMedia;
	};

}
export class Comment {
	id: number;
	name: string;
	email: string;
	body: string;

	constructor(params) {
		this.id = params.id;
		this.name = params.name;
		this.email = params.email;
		this.body = params.body;
	}
}

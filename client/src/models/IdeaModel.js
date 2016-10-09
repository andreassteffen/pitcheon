import {observable} from 'mobx';

export default class IdeaModel {
	constructor(store, id, title, description, customer) {
		this.store = store;
		this.id = id;
		this.title = observable({title});
		this.description = observable({description});
		this.customer = observable({customer});
	}

	destroy() {
		this.store.ideas.remove(this);
	}

	setTitle(title) {
		this.title = title;
	}

	setDescription(description) {
		this.description = description;
	}

	setCustomer(customer) {
		this.customer = customer;
	}
	
	toJS() {
		return {
			id: this.id,
			title: this.title,
			description: this.description,
			customer: this.customer
		};
	}

	static fromJS(store, object) {
		return new IdeaModel(store, object.id, object.title, object.description, object.customer);
	}
}
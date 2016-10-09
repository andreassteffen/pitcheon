import {observable} from 'mobx';

export default class IdeaModel {
	constructor(store, id, title, description, customer, status) {
		this.store = store;
		this.id = id;
		this.title = observable({title});
		this.description = observable({description});
		this.customer = observable({customer});
		this.status = observable({status});
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
	setStatus(status) {
		this.status = status;
	}
	toJS() {
		return {
			id: this.id,
			title: this.title,
			description: this.description,
			customer: this.customer,
			status: this.status
		};
	}

	static fromJS(store, object) {
		return new IdeaModel(store, object.id, object.title, object.description, object.customer, object.status);
	}
}
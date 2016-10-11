import {observable} from 'mobx';

export default class IdeaModel {
	constructor(store, id, title, description, customer, status, likes, pitch) {
		this.store = store;
		this.id = id;
		this.title = observable(title);
		this.description = observable(description);
		this.customer = observable(customer);
		this.status = observable(status);
		this.likes = observable(likes);
		this.pitch = observable(pitch);
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
	setPitch(pitch){
		this.pitch.set(pitch);
	}
	addUserLike(user){
		this.likes.push(user);
	}
	togglePitch(){
		this.pitch.set(!this.pitch.get());
		console.log('I really change the pitch!!!', this.pitch.value)
	}
	toJS() {
		return {
			id: this.id,
			title: this.title,
			description: this.description,
			customer: this.customer,
			status: this.status,
			pitch: this.pitch
		};
	}

	static fromJS(store, object) {
		return new IdeaModel(store, object.id, object.title, object.description, object.customer, object.status, object.likes, object.pitch);
	}
}
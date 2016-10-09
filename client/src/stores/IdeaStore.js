import {action, observable, computed, reaction} from 'mobx';
import * as Utils from '../utils';
import IdeaModel from '../models/IdeaModel';
import autorun from 'mobx';


class IdeaStore{
	ideas = observable([]);
	addIdea (title, description, customer, status) {
		this.ideas.push(new IdeaModel(this, Utils.uuid(), title, description, customer, status));
	}
}

const ideaStore = new IdeaStore();
export default ideaStore;
export{IdeaStore};

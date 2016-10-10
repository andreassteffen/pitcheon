import {action, observable, computed, reaction} from 'mobx';
import * as Utils from '../utils';
import IdeaModel from '../models/IdeaModel';


class IdeaStore{
	ideas = observable([]);
	
	addIdea (title, description, customer, status) {
		this.ideas.push(new IdeaModel(this, Utils.uuid(), title, description, customer, status));
	}
	
	static fromJS(array) {
		const ideaStore = new IdeaStore();
		ideaStore.ideas = array.map(item => IdeaModel.fromJS(ideaStore, item));
		return ideaStore;
	}
}

var initData = [

	{	id:1,
		title: 'BRAF as a target for melanoma',
		description: 'interesting data from cell lines screening. paper providing supper.',
		customer: 'os',
		status: 'ideate',
		likes: ['andreas'],
		pitch: false
	},
	{	id:2,
		title: 'pipeline for DNASeq',
		description: 'time for delivering it!',
		customer: 'cipl',
		status: 'refine',
		likes: ['andreas'],
		pitch: false
	},
	{	id:3,
		title: 'BRD9 for acute heart failure',
		description: 'impressive literature data. vast literature.',
		customer: 'heart',
		status: 'act',
		likes: ['andreas'],
		pitch: false
	},
];

const ideaStore = IdeaStore.fromJS(initData);
window.ideaStore = ideaStore;
export default ideaStore;
export{IdeaStore};

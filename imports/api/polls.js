import { Mongo } from 'meteor/mongo';

const PollsData = new Mongo.Collection('polls');

Meteor.methods({
    insertPoll(data){
        PollsData.insert(data);
    },
    deletePoll(id){
        if(!id)
			throw new Meteor.Error('invalid id');

		PollsData.remove({
			_id:id
		});
    }
});

export default PollsData;
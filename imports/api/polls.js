import { Mongo } from 'meteor/mongo';

const PollsData = new Mongo.Collection('polls');

if(Meteor.isServer){
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
        },
        
        totalPolls() {
            return PollsData.find().count();
        }
    });
}

export default PollsData;
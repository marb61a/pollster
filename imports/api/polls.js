import { Mongo } from 'meteor/mongo';

const PollsData = new Mongo.Collection('polls');

if(Meteor.isServer){
    Meteor.methods({
        insertPoll(data){
            if(!this.userId)
  			    throw new Meteor.Error('unauthorized');
            const pollId = PollsData.insert(data);
            return pollId;
        },
        
        deletePoll(id){
            if(!this.userId)
			   throw new Meteor.Error('unauthorized');
            if(!id)
                throw new Meteor.Error('invalid id');
            PollsData.remove({
                _id: id
            });
        },
        
        totalPolls() {
            return PollsData.find().count();
        }
    });
}

export default PollsData;
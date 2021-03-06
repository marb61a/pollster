import PollsData from '/imports/api/polls.js';

Meteor.publish('userPolls', function() {
    return PollsData.find({author: this.userId});
});

Meteor.publish('polls', function (options) {
    return PollsData.find({}, options);
});

Meteor.publish('singlePoll', (id) => {
    check(id, String);
    return PollsData.find({_id: id});
});
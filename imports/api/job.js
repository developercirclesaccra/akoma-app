import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Jobs = new Mongo.Collection('jobs');

Meteor.methods({
  'job.insert'(jobObj) {
    check(jobObj, Object);

    const {fullName, email, location, phone, job, desc, payment} = jobObj;

    Jobs.insert({
      fullName,
      email,
      phone,
      location,
      job,
      desc,
      payment,
      createdAt: new Date()
    });
  }
});

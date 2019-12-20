import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Users = new Mongo.Collection('users');

Meteor.methods({
  'user.insert'(userObj) {
    check(userObj, Object);
    const {
      fullName,
      age,
      gender,
      phone,
      address,
      qualification,
      skill
    } = userObj;

    if (!Meteor.user()) throw new Meteor.Error('not-authorized');

    Users.insert({
      fullName,
      age,
      gender,
      phone,
      address,
      qualification,
      skill,
      user_id: this.userId,
      createdAt: new Date()
    });
  },
  'user.update'(userId, updateObj) {
    check(userId, String);
    check(updateObj, Object);

    // get user
    const doc = users.findOne({_id: userId});

    // check if user has sign up or login
    if (!Meteor.user() && doc.user_id !== this.userId)
      throw new Meteor.Error('not-authorized');

    const {
      fullName,
      age,
      gender,
      phone,
      address,
      qualification,
      skills
    } = updateObj;

    Users.update(userId, {
      $set: {
        fullName,
        age,
        gender,
        phone,
        address,
        qualification,
        skills,
        updatedAt: new Date()
      }
    });
  },
  'user.delete'(id) {
    check(id, String);

    // get user
    const doc = users.findOne({_id: userId});

    // check if user has sign up
    if (doc.user_id !== this.userId) throw new Meteor.Error('not-authorized');

    if (!Meteor.user() && doc.user_id !== this.userId)
      throw new Meteor.Error('not-authorized');

    Users.remove(id);
  }
});

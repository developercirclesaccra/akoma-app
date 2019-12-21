import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Profiles = new Mongo.Collection('profiles');

if (Meteor.isServer) {
  Meteor.publish('profile', () => {
    return Profiles.find();
  });
}

Meteor.methods({
  'profile.create'(userObj) {
    check(userObj, Object);
    const {
      fullName,
      age,
      gender,
      phone,
      address,
      qualification,
      skill,
      bio
    } = userObj;

    if (!Meteor.user()) throw new Meteor.Error('not-authorized');

    Profiles.insert({
      fullName,
      age,
      gender,
      phone,
      address,
      qualification,
      skill,
      bio,
      user_id: this.userId,
      createdAt: new Date()
    });
  },
  'profile.update'(userId, updateObj) {
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
      skills,
      bio
    } = updateObj;

    Profiles.update(userId, {
      $set: {
        fullName,
        age,
        gender,
        phone,
        address,
        qualification,
        skills,
        bio,
        updatedAt: new Date()
      }
    });
  },
  'profile.delete'(id) {
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

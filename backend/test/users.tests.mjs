import request from 'supertest';
import { expect } from 'chai';
import app from '../index.js';
import User from '../models/User.js';
import Tour from '../models/Tour.js';

describe('API Endpoint Testing', function () {
  it('should delete a user', function (done) {
    this.timeout(50000)
    const user = new User({ username: 'John Doe222', email: 'john22@example.com', password: 'joh1n' });

    user.save().then(() => {
      request(app)
        .delete(`/api/v1/users/${user._id}`)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          expect(res.body.success).to.be.true;
          expect(res.body.message).to.equal('Successfully deleted');
          done();
        });
    }).catch((err) => {
      done(err);
    });
  });
  it('should update a user', function (done) {
    this.timeout(50000)
    const user = new User({ username: 'John111 Doe8563e345y4tr876573588', email: 'john711118658e34456776r78@example.com', password: 'john' });

    user.save().then(() => {
      const updatedUser = { username: 'Upda1111ted7 34354r6e6765User', email: 'upda7456t71111634re56ed@example.com', password: 'updated' };
      request(app)
        .put(`/api/v1/users/${user._id}`)
        .send(updatedUser)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          expect(res.body.success).to.be.true;
          expect(res.body.message).to.equal('Successfully updated');
          expect(res.body.data.username).to.equal(updatedUser.username);
          expect(res.body.data.email).to.equal(updatedUser.email);
          expect(res.body.data.password).to.equal(updatedUser.password);
          done();
        });
    }).catch((err) => {
      done(err);
    });
  });
  it('should update a tour', async function () {
    this.timeout(50000)
    // Create a tour to update
    const newTour = new Tour({
      title: 'Tour314 433A25w3',
      city: 'A23w343111453',
      address: 'Alba13ni3344a25w3',
      distance: 902310,
      desc: 'A wond21e34rfu4l t3our',
      price: 12010,
      maxGroupSize: 92
    });
    const savedTour = await newTour.save();

    // Update the tour
    const updatedData = {
      title: 'Updat111ed334 Touw34r A235',
      city: 'Updated133 Ci4tyw53423',
      address: 'Upda11t33ed Add434wre2s5s3',
      distance: 12000,
      desc: 'Updated213 descr3iption',
      price: 200,
      maxGroupSize: 10
    };

    const res = await request(app)
      .put(`/api/v1/tours/${savedTour._id}`)
      .send(updatedData)
      .expect(200);

    expect(res.body.success).to.be.true;
    expect(res.body.message).to.equal('Successfully updated');
    expect(res.body.data.title).to.equal(updatedData.title);
    expect(res.body.data.city).to.equal(updatedData.city);
    expect(res.body.data.address).to.equal(updatedData.address);
    expect(res.body.data.distance).to.equal(updatedData.distance);
    expect(res.body.data.desc).to.equal(updatedData.desc);
    expect(res.body.data.price).to.equal(updatedData.price);
    expect(res.body.data.maxGroupSize).to.equal(updatedData.maxGroupSize);
  });

  it('should create a new tour', async function () {
    const newTour = {
      title: 'Tour 331443Aff',
      city: 'Afff334134',
      address: 'Alba331344niaff',
      distance: 900,
      desc: 'A wonder1f3ul tour',
      price: 100,
      maxGroupSize: 9
    };

    const res = await request(app)
      .post(`/api/v1/tours/`)
      .send(newTour)
      .expect(200);

    expect(res.body.success).to.be.true;
    expect(res.body.message).to.equal('Successfully created');
    expect(res.body.data.title).to.equal(newTour.title);
    expect(res.body.data.city).to.equal(newTour.city);
    expect(res.body.data.address).to.equal(newTour.address);
    expect(res.body.data.distance).to.equal(newTour.distance);
    expect(res.body.data.desc).to.equal(newTour.desc);
    expect(res.body.data.price).to.equal(newTour.price);
    expect(res.body.data.maxGroupSize).to.equal(newTour.maxGroupSize);
  });

  it('should create a new user', async function () {
    const newUser = {
      username: 'test3441user',
      email: 'testuser443@1example.com',
      password: 'testpass1word'
    };

    const res = await request(app)
      .post(`/api/v1/users/`)
      .send(newUser)
      .expect(200);

    expect(res.body.success).to.be.true;
    expect(res.body.message).to.equal('Successfully created');
    expect(res.body.data.username).to.equal(newUser.username);
    expect(res.body.data.email).to.equal(newUser.email);
    expect(res.body.data.password).to.equal(newUser.password);
  });

});

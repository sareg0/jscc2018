import test from "ava";
import request from "supertest";
import app from "../app";

test("Get list of meetups", async t => {
  const meetupToCreate = {
    name: "Testing Session",
    location: "unu GmbH",
    attendees: []
  };

  const creation = await request(app)
    .post("/meetup")
    .send(meetupToCreate);

  const res = await request(app).get("/meetup/all");

  t.is(res.status, 200);
  t.true(Array.isArray(res.body), "Body should be an array");
  t.true(res.body.length > 0);
});

test("Create new meetup", async t => {
  t.plan(4);
  const meetupToCreate = {
    name: "Testing Session",
    location: "unu GmbH",
    attendees: []
  };

  const res = await request(app)
    .post("/meetup")
    .send(meetupToCreate);

  t.is(res.status, 200);
  t.is(res.body.name, meetupToCreate.name);
  t.is(res.body.location, meetupToCreate.location);
  t.deepEqual(res.body.attendees, meetupToCreate.attendees);
});

test("Fetch a meetup", async t => {
  t.plan(2);
  const meetupToCreate = {
    name: "Testing Session",
    location: "unu GmbH",
    attendees: []
  };

  const meetupCreated = (await request(app)
    .post("/meetup")
    .send(meetupToCreate)).body;

  const fetchRes = await request(app).get(`/meetup/${meetupCreated._id}/json`);

  const meetupFetched = fetchRes.body;

  t.is(fetchRes.status, 200);
  t.deepEqual(meetupFetched, meetupCreated);
});

test("Delete a meetup", async t => {
  t.plan(3);

  const meetupToCreate = {
    name: "Testing Session",
    location: "unu GmbH",
    attendees: []
  };

  const meetup = (await request(app)
    .post("/meetup")
    .send(meetupToCreate)).body;

  const del = await request(app).delete(`/meetup/${meetup._id}`);

  t.is(del.status, 200);
  t.is(del.text, "ok!");

  const fetch = await request(app).get(`/meetup/${meetup._id}/json`);

  t.is(fetch.status, 404);
});

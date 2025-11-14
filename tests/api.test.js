const api = require('../backend/api');
const events = require('../backend/events');

test('events handler sends the full events array', () => {
  const res = { json: jest.fn() };
  api.events({}, res);
  expect(res.json).toHaveBeenCalledWith(events);
});

test('event handler sends the event at index from req.param.eventId', () => {
  const res = { json: jest.fn() };
  const req = { param: { eventId: 1 } }; // api.js uses req.param.eventId
  api.event(req, res);
  expect(res.json).toHaveBeenCalledWith(events[1]);
});

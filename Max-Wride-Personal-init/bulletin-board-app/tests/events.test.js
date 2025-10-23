const events = require('../backend/events');

test('events exports an array of 3 events', () => {
  expect(Array.isArray(events)).toBe(true);
  expect(events).toHaveLength(3);
});

test('first event has id, title and date properties', () => {
  expect(events[0]).toHaveProperty('id');
  expect(events[0]).toHaveProperty('title');
  expect(events[0]).toHaveProperty('date');
});

test('contains the "Docker Workshop" event with expected details', () => {
  const ev = events.find(e => e.title === 'Docker Workshop');
  expect(ev).toBeDefined();
  expect(ev.id).toBe(1);
  expect(ev.detail).toBe('Linuxing in London ');
});
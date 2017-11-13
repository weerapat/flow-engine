import FlowStore from '../FlowStore';

describe('Flow logic', () => {
  const flow = new FlowStore();

  test('flow has initial rules after creation', () => {
    expect(flow.store.rules).toHaveLength(3);
  });

  test('add new rule', () => {
    expect(flow.addRule({
      title: 'New rule',
      body: `function (obj) {
        return obj.pet === 'boo' && obj.size === 2;
      }`
    })).toHaveLength(4);
  });

  test('remove rule', () => {
    expect(flow.removeRule({
      id: 2,
      title: 'Rule 2',
      body: `function (obj) {
        return obj.pet === 'cat' && obj.size === 12;
      }`,
      true_id: null,
      false_id: 3
    })).toHaveLength(3);
  });

  test('flow execution', () => {
    let results = flow.executeFlow({
      pet: 'dog',
      size: 10
    });

    expect(results).toHaveLength(4);
    expect(results[0].status).toEqual('passed');
    expect(results[1].status).toEqual('failed');
    expect(results[2].status).toEqual('failed');
    expect(results[results.length - 1].title).toEqual('End');
  });
});

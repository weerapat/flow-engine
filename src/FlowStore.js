let currentRuleId = 3;

class FlowStore
{
  constructor() {
    /**
     * @property
     * @type {Array} rules
     */
    this.rules = [
      {
        id: 1,
        title: 'Rule 1',
        body: '',
        true_id: 2,
        false_id: 3
      },
      {
        id: 2,
        title: 'Rule 2',
        body: '',
        true_id: null,
        false_id: null
      },
      {
        id: 3,
        title: 'Rule 3',
        body: '',
        true_id: null,
        false_id: null
      }
    ];
  }

  getRules() {
    return this.rules;
  }

  addRule() {
    this.rules.push({
      id: ++currentRuleId,
      title: 'Rule 3',
      body: '',
      true_id: null,
      false_id: null
    });

    return this.rules;
  }

  removeRule(rule) {
    // @todo before delete check if this rule has relation with another rule first.
    return this.rules.splice(this.rules.indexOf(rule), 1);
  }
}

export default FlowStore;


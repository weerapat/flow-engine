// @Todo add doc block comments
// Extract store layer if possible
class FlowStore
{
  constructor() {
    this.lastRuleId = 3;

    /**
     * @property
     * @type {Array} store
     */
    this.store = {
      nextRuleId : this.getNextRuleId(),
      rules : [
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
      ]
    };
  }

  getRules() {
    return this.store.rules;
  }

  getNextRuleId() {
    return this.lastRuleId + 1;
  }

  addRule(rule) {
    const newRule = {
      id: this.getNextRuleId(),
      title: rule.title,
      body: rule.body,
      true_id: !!rule.true_id ? rule.true_id : null,
      false_id: !!rule.false_id ? rule.false_id : null
    };

    this.store.rules.push(newRule);
    this.lastRuleId = this.lastRuleId + 1;

    return this.store.rules;
  }

  removeRule(rule) {
    // @todo before delete check if this rule has relation with another rule first.
    this.store.rules.splice(this.store.rules.indexOf(rule), 1);

    return this.store.rules;
  }
  executeObject(obj) {
    let rule = this.store.rules[0];
    let results = [{
      title: rule.title,
      status: rule.body(obj) ? 'passed' : 'failed'
    }];
    let nextRule = rule.body(obj) ? rule.true_id : rule.false_id;
    while (nextRule) {
      results.push({
        title: nextRule.title,
        status: nextRule.body(obj) ? 'passed' : 'failed'
      });
      nextRule = nextRule.body(obj) ? nextRule.true_id : nextRule.false_id;
    }
    results.push({
      title: 'End'
    });
    return results;
  }
}

export default FlowStore;


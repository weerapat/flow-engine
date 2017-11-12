// @Todo Extract store layer if possible
class FlowStore
{
  constructor() {
    this.lastRuleId = 3;
    this.store = this.initialStoreData();
  }

  /**
   * @returns {Array}
   */
  getRules() {
    return this.store.rules;
  }

  /**
   * @param id
   *
   * @returns {*}
   */
  getRuleById(id) {
    if (!id) {
      return null;
    }

    return this.store.rules.filter((rule) => rule.id === Number(id))[0];
  }

  /**
   * @returns {Number}
   */
  getNextRuleId() {
    return this.lastRuleId + 1;
  }

  /**
   * @param rule
   *
   * @returns {Array}
   */
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

  /**
   * @param rule
   *
   * @returns {Array}
   */
  removeRule(rule) {
    // @todo before delete check if this rule has relation with another rule first.
    this.store.rules.splice(this.store.rules.indexOf(rule), 1);

    return this.store.rules;
  }

  /**
   * @param obj
   *
   * @returns {*[]}
   */
  executeFlow(obj) {
    let rule = Object.assign({}, this.store.rules[0]);

    // Convert Body string to function
    rule.body = eval(`(${rule.body})`);

    let results = [{
      title: rule.title,
      status: rule.body(obj) ? 'passed' : 'failed'
    }];

    let nextRuleId = rule.body(obj) ? rule.true_id : rule.false_id;

    while (nextRuleId !== null) {
      rule = Object.assign({}, this.getRuleById(nextRuleId));
      rule.body = eval(`(${rule.body})`);

      results.push({
        title: rule.title,
        status: rule.body(obj) ? 'passed' : 'failed'
      });

      nextRuleId = rule.body(obj) ? rule.true_id : rule.false_id;
    }

    results.push({
      title: 'End'
    });

    return results;
  }

  /**
   * Use for increasing test and development speed
   *
   * @returns {{nextRuleId: *, rules: *[]}}
   */
  initialStoreData() {
    return {
      nextRuleId : this.getNextRuleId(),
      rules : [
        {
          id: 1,
          title: 'Rule 1',
          body: `function (obj) {
            return obj.color === 'blue' && obj.size === 10;
          }`,
          true_id: 2,
          false_id: 3
        },
        {
          id: 2,
          title: 'Rule 2',
          body: `function (obj) {
            return obj.color === 'blue' && obj.size === 12;
          }`,
          true_id: null,
          false_id: null
        },
        {
          id: 3,
          title: 'Rule 3',
          body: `function (obj) {
            return obj.color === 'yellow' && obj.size === 12;
          }`,
          true_id: null,
          false_id: null
        }
      ]
    };
  }
}

export default FlowStore;

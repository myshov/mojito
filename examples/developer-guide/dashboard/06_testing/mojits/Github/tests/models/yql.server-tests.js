YUI.add('StatsModelYQL-tests', function(Y, NAME) {

  var suite = new YUITest.TestSuite(NAME),
      model = null,
      A = YUITest.Assert;
  suite.add(new YUITest.TestCase({

    name: 'StatsModelYQL user tests',
    setUp: function() {
      model = Y.mojito.models.StatsModelYQL;
    },
    tearDown: function() {
      model = null;
    },
    'test mojit model': function() {
      var cfg = { color: 'red' };
      A.isNotNull(model);
      A.isFunction(model.init);
      model.init(cfg);
      A.areSame(cfg, model.config);
      A.isFunction(model.getData);
      model.getData({}, function(data) {
        A.isObject(data);
        return data;
      });
    }
  }));
  YUITest.TestRunner.add(suite);
}, '0.0.1', {requires: ['mojito-test', 'StatsModelYQL']});

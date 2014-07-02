listOfStuff = { label: 'Oh hai!', list: ['A','B','C'] };

Router.map(function () {
  this.route('hello',{ path: '/', data: listOfStuff });
});

if (Meteor.isClient) {

  Template.hello.greeting = function () {
    return "Welcome to testUI.";
  };

  Template.hello.listItem = function () {
    return this;
  };

  Template.hello.listItemLabel = function () {
    return UI._parentData(1).label;
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  // Meteor.startup(function () {
  //   UI.insert(UI.renderWithData(Template.hello, listOfStuff), document.body);
  // });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

if (Meteor.isClient) {

  listOfStuff = ['A','B','C'];

  Template.hello.greeting = function () {
    return "Welcome to testUI.";
  };

  Template.hello.listItem = function () {
    console.log("Item:", this, UI._parentData(1));
    return this;
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Meteor.startup(function () {
    UI.insert(UI.renderWithData(Template.hello, { list: listOfStuff }), document.body);
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

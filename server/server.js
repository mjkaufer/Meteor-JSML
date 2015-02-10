var jsml = Meteor.npmRequire('node-jsml');

Meteor.methods({
    "compile":function(data){
        return jsml.toJSML(data);
    }
})

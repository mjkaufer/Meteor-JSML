document.title = "Online JSML Compiler"

var compile = function(){
    Meteor.call("compile",$('#in').val(),function(e,r){console.log(r); $('#out').val(r)})
}

Template.fields.rendered = function(){
    $('#in').focus();
}

Template.fields.events({
    "click #compile":function(){
        compile();
    }
});



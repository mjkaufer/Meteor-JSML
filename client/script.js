document.title = "Online JSML Compiler"

var compile = function(){
    Meteor.call("compile",$('#in').val(),function(e,r){console.log(r); $('#out').val(r)})
}

$('#compile').click(function(){
    compile();
});
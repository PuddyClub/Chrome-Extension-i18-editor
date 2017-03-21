// Code made by Jackie Dreasond
// http://jackiedreasond.deviantart.com/
// https://jackiedreasond.tumblr.com/

// Free to use

// Copyright Jackie Dreasond


function startsystempx(){
	
var languagecode = "";

function openfile(obj) {
$("#listfile").empty();

for(var prop in obj) {
if(obj.hasOwnProperty(prop)){

if(prop == "SPECIALMENU"){

//$("#listfile").append($("<div>", {class: "panel panel-default"}).append($("<table>", {id: prop, class: "form-group table listinfo"}).append(
//$("<tr>").append(
//$("<td>").append($("<span>").text(obj[prop])),
//$("<td>").append()
//),
//$("<br>")
//)))

}

else{

obj[prop]["message"] = obj[prop]["message"].replace(/\\n/g, "\n").replace(/\\"/g, "\"").replace(/\\'/g, "\'");

$("#listfile").append($("<div>", {class: "panel panel-default"}).append($("<table>", {id: prop, class: "form-group table listinfo"}).append(
$("<tr>").append(
$("<td>").append($("<span>").text(prop)).prepend($("<strong>").text("ID: ")),
$("<td>").append()
),
$("<tr>").append(
$("<td>").append($("<strong>").text("message: ")),
$("<td>").append($("<textarea>", {id: "message", idtblx: prop}).val(obj[prop]["message"]).change(function(){
languagecode[$(this).attr("idtblx")]["message"] = $(this).val();
}))
),
$("<tr>").append(
$("<td>").append($("<strong>").text("description: ")),
$("<td>").append($("<input>", {type: "text", id: "description", idtblx: prop}).val(obj[prop]["description"]).change(function(){
languagecode[$(this).attr("idtblx")]["description"] = $(this).val();
}))
),
$("<br>")
)))

}

}}

}


function openfilesub(obj) {

for(var prop in obj) {
if(obj.hasOwnProperty(prop)){

if(prop == "SPECIALMENU"){}

else{
obj[prop]["message"] = obj[prop]["message"].replace(/\\n/g, "\n").replace(/\\"/g, "\"").replace(/\\'/g, "\'");

$("#"+prop+" #message").val(obj[prop]["message"]).trigger("change");
$("#"+prop+" #description").val(obj[prop]["description"]).trigger("change");

}

}}

}








function leitorarquivo(e, type) {
if(e.target.files > 0){return}
var file = e.target.files[0];
if (!file) {
return;
}
var reader = new FileReader();
reader.onload = function(e) {
var contents = e.target.result;
contents = contents.replace(/http:\/\//g, 'HTTPPXSKEew423').replace(/https:\/\//g, 'HTTPPXSKEew421').replace(/\/\//g, '"SPECIALMENU": "').replace(/\\\\/g, '",').replace(/HTTPPXSKEew423/g, 'http://').replace(/HTTPPXSKEew421/g, 'https://');

if(type == "principal"){
languagecode = JSON.parse(contents);
languagecode["SPECIALMENU"] = null;
openfile(languagecode);
$("#file1").val("");
}
else if(type == "secundario"){
openfilesub(JSON.parse(contents));
$("#file2").val("");
}

};
reader.readAsText(file);
}

document.getElementById('file1').addEventListener('change', function(e){leitorarquivo(e, "principal")}, false);
document.getElementById('file2').addEventListener('change', function(e){leitorarquivo(e, "secundario")}, false);


$("#getcode").click(function(){

var newjsonfilelang = JSON.stringify(languagecode);

$("#codegenerator").text(newjsonfilelang.replace(/\}\,\"/g, "},\n\"").replace(/\"SPECIALMENU\"\:null\,/g, "").replace(/\,\"description\":\"\"/g, ""));
});

}

startsystempx();
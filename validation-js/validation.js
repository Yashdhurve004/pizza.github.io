//////////////////////////////////////////// [CONTACTUS FORM] ///////////////////////////////////////////////
function validateform(){

var name=document.myform.name.value;
var email=document.myform.email.value;
var subject=document.myform.subject.value;
var message=document.myform.message.value;

	// Name validation
	if (name==""){
		alert("Please Enter Name");
	return false;
}
	if(name.length<2){
		alert("Please Enter more than One Character");
	return false;
}
	if(!isNaN(name)){
		alert("Please Enter only Alphabates")
		return false;
}
/////////////// EMAIL
if (email==""){
	alert("Please Enter Email");
	return false;
}
if (email.indexOf('@')<=0){
	alert("Invalid Position of @ ");
	return false;
}
if (email.charAt(email.length-4)!='.'){ 				// yash@gmail.com
	alert("Invalid Position of '.' ");
	return false;
}	
	// Subject validation
if (subject==""){
	alert("Please Enter subject");
	return false;
	}
	// message validation
if (message==""){
	alert("Please Enter message");
	return false;
	}else{
	alert("Summitted Successfully ****** Thanks for Visiting Us ******");
}
}
//////////////////////////////////////////// [SIGNUP FORM] ///////////////////////////////////////////////

function signupform(){

var fname=document.mysignupform.fname.value;
var lname=document.mysignupform.lname.value;
var phone=document.mysignupform.phone.value;
var email=document.mysignupform.email.value;
var pass=document.mysignupform.pass.value;
var repass=document.mysignupform.repass.value;

//////////////// fname
if (fname==""){
	alert("Please Enter First Name");
	return false;
}
if(fname.length<2){
	alert("Please Enter more than One Character");
	return false;
}
if(!isNaN(fname)){
	alert("Please Enter only Alphabates")
	return false;
}
//////////////// lname
if (lname=="") {
	alert("Please Enter Last Name");
	return false;
}
if(lname.length<2){
	alert("Please Enter more than One Character");
	return false;
}
if(!isNaN(lname)){
	alert("Please Enter only Alphabates");
	return false;
}
//////////// PHONE
if (phone=="") {
	alert("Please Enter only Mobile.no.");
	return false;
}
if(isNaN(phone)){
	alert("Please Enter only numbers");
	return false;
}
if (phone.length>10) {
	alert("Minimum 10 numbers");
	return false;
}
if (phone.length<10) {
	alert("Maximum 10 numbers");
	return false;
}
/////////////// EMAIL
if (email==""){
	alert("Please Enter Email");
	return false;
}
if (email.indexOf('@')<=0){
	alert("Invalid Position of @ ");
	return false;
}
if (email.charAt(email.length-4)!='.'){ 				// yash@gmail.com
	alert("Invalid Position of '.' ");
	return false;
}
//////////////// PASS
if (pass=="") {
	alert("Please Enter Password.");
	return false;
}
if (pass.length<8) {
	alert("Maximum 8 Character.");
	return false;
}
if (pass.search(/[0-9]/)==-1) {
	alert("Atleast 1 number.");
	return false;
}
if (pass.search(/[a-z]/)==-1) {
	alert("Atleast 1 lowercase.");
	return false;
}
if (pass.search(/[A-Z]/)==-1) {
	alert("Atleast 1 Uppercase.");
	return false;
}
if (pass.search(/[!\@\#\$\%\^\&\*\(\)\_\+\=]/)==-1) {
	alert("Atleast 1 Symbole.");
	return false;
}
///////////////// Re-Pass
if (repass=="") {
	alert("Please re-enter Password.");
	return false;
}
if (repass!==pass) {
	alert(" Password Didn't Match.");
	return false;
}else{
	alert("Summitted Successfully ****** Thanks for Visiting Us ******");
}
}
//////////////////////////////////////////// BOOKING FORM ///////////////////////////////////////////////

function bookform(){
	
var name=document.mybookform.name.value;
var Surname=document.mybookform.Surname.value;
var mobile=document.mybookform.mobile.value;
var date=document.mybookform.date.value;
var seats=document.mybookform.seats.value;

//////////////// name
if (name==""){
	alert("Please Enter First Name");
	return false;
}
if(name.length<2){
	alert("Please Enter more than One Character");
	return false;
}
if(!isNaN(name)){
	alert("Please Enter only Alphabates")
	return false;
}
//////////////// Surname
if (Surname=="") {
	alert("Please Enter Surname");
	return false;
}
if(Surname.length<2){
	alert("Please Enter more than One Character");
	return false;
}
if(!isNaN(Surname)){
	alert("Please Enter only Alphabates");
	return false;
}
//////////// Mobile Number
if (mobile=="") {
	alert("Please Enter only Mobile.no.");
	return false;
}
if(isNaN(mobile)){
	alert("Please Enter only numbers");
	return false;
}
if (mobile.length>10) {
	alert("Minimum 10 numbers");
	return false;
}
if (mobile.length<10) {
	alert("Maximum 10 numbers");
	return false;
}
//////////// Date
if (date=="") {
	alert("Please Enter Date.");
	return false;
}
//////////// Seats
if (seats==""){
	alert("Please Enter Seats");
	return false;
}
if(isNaN(seats)){
	alert("Please Enter only numbers");
	return false;
}
if (seats.length>1) {
	alert("Only 1 digits");
	return false;
}
if (seats.search(/[1-6]/)==-1) {
	alert("only 6 seats is avaliable on 1 table.");
	return false;
}else{
	alert("Summitted Successfully ****** Thanks for Visiting Us ******");
}
}
//////////////////////////////////////////// LOGIN FORM ///////////////////////////////////////////////

function loginform(){
	
var email=document.myloginform.email.value;
var pass=document.myloginform.pass.value;

/////////////// EMAIL
if (email==""){
	alert("Please Enter Email");
	return false;
}
if (email.indexOf('@')<=0){
	alert("Invalid Position of @ ");
	return false;
}
if (email.charAt(email.length-4)!='.'){ 				// yash@gmail.com
	alert("Invalid Position of '.' ");
	return false;
}
//////////////// PASS
if (pass=="") {
	alert("Please Enter Password.");
	return false;
}
if (pass.length<8) {
	alert("Maximum 8 Character.");
	return false;
}
if (pass.search(/[0-9]/)==-1) {
	alert("Atleast 1 number.");
	return false;
}
if (pass.search(/[a-z]/)==-1) {
	alert("Atleast 1 lowercase.");
	return false;
}
if (pass.search(/[A-Z]/)==-1) {
	alert("Atleast 1 Uppercase.");
	return false;
}
if (pass.search(/[!\@\#\$\%\^\&\*\(\)\_\+\=]/)==-1) {
	alert("Atleast 1 Symbole.");
	return false;
}else{
	alert("Summitted Successfully ****** Thanks for Visiting Us ******");
}
}
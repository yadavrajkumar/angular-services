app.config(["AppName",function(AppName){

	console.log("This is before change in config  :"+AppName)
	AppName="Angular service new value"
	console.log("This is   after change in config :"+AppName)
}])



app.run(["AppName","AppVersion",function(AppName,AppVersion){

	console.log("This is run :"+AppName)
	console.log("This is run AppVersion old value :"+AppVersion)
	AppVersion="1.2.3.4"
	console.log("This is run  AppVersion new value:"+AppVersion)
}])


app.provider("customProvider",function(){
	var obj={}
obj.firstName="raj";
obj.lastName="Hyd";
obj.getName=function(){

	return this.firstName + " " +this.lastName;
}
this.$get=function(){
	return obj;
}

})

/*app.config(["myProviderProvider",function(myProvider){

console.log(myProvider)
console.log("config-myProvider"+myProvider.$get())
console.log("config-myProvider"+myProvider.$get().getName)

}])*/
app.service("CustomerService",function(){

	this.getCustomerDetails=function(){

          return "This will return getCustomerDetails !!"
	}
})


app.factory("CustomFactory",function(){

return "This is my factory service"

})
app
.constant("AppName","Angular service");
app.value("AppVersion","1.0.0.0");
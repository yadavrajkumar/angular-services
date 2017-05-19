var app=angular.module("myApp",[]);

/*app.provider("customProvider",function(){
	var obj={}
obj.firstName="raj";
obj.lastName="Hyd";
obj.getName=function(){

	return this.firstName + " " +this.lastNamel;
}
this.$get=function(){
	return obj;
}

})


app.service("CustomerService",function(){

	this.getCustomerDetails=function(){

          return "This will return getCustomerDetails !!"
	}
})



app.factory("")

app.run(["CustomerService",function(CustomerService){

//console.log(CustomerService)*/
//console.log("my run-Service"+"  "+CustomerService.getCustomerDetails())
//console.log("config-CustomerService"+CustomerService.$get().getName)
//}])
app.
controller("myController",
	["$scope",
	"customProvider",
	"CustomerService",
	"CustomFactory",
	"AppName",
	"AppVersion",	
	function($scope,customProvider,CustomerService,CustomFactory,AppName,AppVersion){

	$scope.message="Hello Raj";	
	console.log("myController-ProviderService"+ "  "+customProvider.firstName)
	console.log("myController-ProviderService"+ "  "+customProvider.getName())
	console.log("myController-Service"+CustomerService.getCustomerDetails())
	$scope.customerMessage=CustomerService.getCustomerDetails();
	$scope.customFactoryMessage=CustomFactory;
console.log(AppName)

	

}])
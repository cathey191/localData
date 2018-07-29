// // js data
// var data = [
// 	{
// 		name: 'person1'
// 	},
// 	{
// 		name: 'person2'
// 	}
// ];
//
// console.log(data);
//
//
// // json data
// var jsonData = [
// 	{
// 		"name": "person1"
// 	},
// 	{
// 		"name": "person2"
// 	}
// ];
//
// console.log(jsonData);
//
// // turning js to json
// data = JSON.stringify(data);
//
// console.log(data);
//
// // new user
// var newUser = {
// 	name: 'person name',
// 	username: 'username',
// 	password: 'password',
// 	email: 'email'
// }
//
// newUser = JSON.stringify(newUser);
// // then send to the database
//
// JSON.parse(variable);

// getting JSON using pure JS
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
	// readyState
	// 0 - request was not initialized
	// 1 - server connection estabished
	// 2 - request recieved
	// 3 - processing the request
	// 4 - request has finished and the data/response is ready
	//
	// status
	// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
	// 200 - OK
	// 403 - Forbidden / need to log in
	// 404 - Not found

	if (this.status == 403) {
		console.log('Forbidden, cannot access information');
		return;
	} else if (this.status == 404) {
		console.log('Error, file not found');
		return;
	}

	if (this.status == 200 && this.readyState == 4) {
		console.log(this.responseText);
		var data = JSON.parse(this.responseText);
		console.log(data);
	}
};

xhttp.open('GET', 'data/data.json', true);
xhttp.send();

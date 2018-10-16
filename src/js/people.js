const fetch_people_api = 'http://localhost:8080/api/v1/people';


 function fetchLoggedInPeopleFromApi() {
  return new Promise(function(resolve, reject) {
    fetch(fetch_people_api, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      var data = response.json();
      console.log('completed the fetch',data);
      resolve(data);
    });
  });
}

export function getLoggedInPeople() {
  return new Promise(function(resolve,reject){
    fetchLoggedInPeopleFromApi().then(function(data){
      console.log('the data got is ',data);
      var item ={
        'people' :[]
      };
      for(var i in data){
        var person = data[i];
        item.people.push({
          "email": person.email,
          "given_name": person.givenName,
          "family_name": person.familyName,
          "phone_number": person.phone
        });
      }
      console.log('from logged ',item);
      resolve(item);
    });
  });

}

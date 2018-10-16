const fetch_people_api = 'http://localhost:8080/api/v1/people';


export function getLoggedInPeople(){
  //  fetchLoggedInPeopleFromApi()
  // .then(function(peopleList){
  // //  var item = JSON.parse(peopleList);
  //   console.log('person list ' + peopleList);
  //   var people=['ssf','sdfsd'];
  //   for(var i in peopleList){
  //     var person = peopleList[i];
  //     var personStr = JSON.stringify(person);
  //     console.log('person '  + personStr);
  //   people.push({
  //       "given_name": person.givenName,
  //       "family_name": person.familyName,
  //       "email": person.email,
  //       "phone": person.phone
  //     });
  //   }
  //   console.log('return itme')
  //   console.log(JSON.stringify(people));
  //   return people;
  // });


  // let peopleList = getSomePeople();
  //
  // console.log('people list is ' + peopleList);
  // for(var i in peopleList){
  //   console.log(i);
  // }
  // return peopleList;

  Promise.resolve(getSomePeople).then((people)=>{
    var item = JSON.stringify(people);
    console.log(item);
  });

}

export async function getSomePeople(){
  console.log('from some people');
  try{
    const resp = await fetch(fetch_people_api);
    return resp;
  }catch(err){
    console.log(err);
  }
}

export function fetchLoggedInPeopleFromApi() {
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

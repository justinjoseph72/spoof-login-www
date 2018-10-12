const post_api = 'http://localhost:8080/api/v1/profile/attributes';
const token_api = 'http://localhost:8080/api/v1/token';

export function postDataFunc(data){
var postData = createPostData(data);
  console.log(JSON.stringify(postData));
  fetch(post_api,{
    headers: {
            "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(postData)
  })
  .then(function(response) {
    return response.json();
  //  doLoginToConnection();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    doLoginToConnection();
  });
}

function doLoginToConnection(){
  fetch(token_api,{
    headers: {
            "Content-Type": "application/json",
        }
  })
  .then(function(response){ return response.json(); })
  .then(function(item){
    var loginUrl = item.loginUrl;
    console.log('the login url is ' + loginUrl);
    window.open(loginUrl,'_blank');
  });

}

function createPostData(inputData){
  var data = JSON.parse(inputData);
  var postData={
    'attributes':{
      'family_name': data.familyName,
      'given_names': data.givenName,
      'email_address': data.emailId,
      'phone_number': data.phone,
      'selfie': 'person.png'
    },
    'rememberMeId': data.emailId
  };
  return postData;
}

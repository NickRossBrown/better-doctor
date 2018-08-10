export class Doctor {

  constructor() {

  }

  getDoctor(name) {

    return new Promise((resolve, reject) => {

      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&user_key=${process.env.apiKey}`
      request.onload = function() {
        if(request.status == 200) {
          resolve(request.response);
        } else {
          reject(request.statusText);
        }
      }

      request.open("GET", url);
      request.send();

    });
  }


}

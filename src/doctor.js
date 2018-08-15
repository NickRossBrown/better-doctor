export class Doctor {

  constructor() {

  }

  getDoctors(search) {
    return new Promise((resolve, reject) => {
      let location = "45.5122%2C-122.6587%2C100"
      console.log(process.env.apiKey)
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${location}&name=${search}&user_key=${process.env.apiKey}`

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

  findDoctor(doctorID) {
    return new Promise((resolve, reject) => {
      console.log(doctorID)
      let request = new XMLHttpRequest();
      let api_key = process.env.apiKey
      let doctor_uid = doctorID
      let url = `https://api.betterdoctor.com/2016-03-01/doctors/${doctor_uid}?user_key=${api_key}`;

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

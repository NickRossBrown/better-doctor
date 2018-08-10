import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './doctor.js';

$(document).ready(function() {



  $("#userInput").submit((event) => {
    event.preventDefault();
    let doctor = $("#doctorName").val();
    console.log(doctor)
    let getDoc = new Doctor ();
    let doc = getDoc.getDoctor(doctor);
    console.log(doc)

    doc.then( (result) => {
      console.log(result);
      let docs = JSON.parse(result);
      console.log(docs.meta)
      console.log(docs.data)
      console.log(docs.data[0].profile)
      console.log(docs.data[0].profile.first_name)
      console.log(docs.data[0].profile.last_name)
    })
    doc.then((results) => {
      let doctors = JSON.parse(results);
      for (let x in doctors.data) {
        console.log(x)
        console.log(doctors.data[x].profile.first_name)
        console.log(doctors.data[x].profile.last_name)
        $("#doctorTable").append(`<tr>
          <td>${doctors.data[x].profile.first_name}</td>
          <td>${doctors.data[x].profile.last_name}</td>
        </tr>`)
      }
    })
    // let newDocs = JSON.parse(doc)
    //
    // console.log(newDocs)
  })

  // $("#userInput").submit(function(event) {
  //   console.log("hello")
  //   event.preventDefault();
  // });


});

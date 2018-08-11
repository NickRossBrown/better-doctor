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
      let docs = JSON.parse(result);
      if (docs.meta.total===0) {
        $(".results").append(`<p>No Search Results</p>`)
      } else if (docs.meta.total > 0) {
        $(".results").append(`<p>${docs.meta.total} Results</p>`)
      }
      // console.log(docs.data[0].profile)
      // console.log(docs.data[0].profile.first_name)
      // console.log(docs.data[0].profile.last_name)
    })
    doc.then((results) => {
      let doctors = JSON.parse(results);
      console.log(doctors)
      for (let x in doctors.data) {

        console.log(doctors.data[x].practices[0].phones[0].number)


        $("#doctorTable").append(`<tr>
          <td>${doctors.data[x].profile.first_name}</td>
          <td>${doctors.data[x].profile.last_name}</td>
          <td>${doctors.data[x].profile.last_name}</td>
          <td>${doctors.data[x].practices[0].phones[0].number}</td>
        </tr>`)
      }
    })
    let newDocs = JSON.parse(doc)

    console.log(newDocs)
  })




});

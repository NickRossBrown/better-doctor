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

    })
    doc.then((results) => {
      let doctors = JSON.parse(results);
      console.log(doctors)
      for (let x in doctors.data) {
        $("#doctorTable").append(`<tr>
          <td class="clickable" id="doctors.data[x].uid">${doctors.data[x].profile.first_name} ${doctors.data[x].profile.last_name}</td>
          <td>${doctors.data[x].profile.last_name}</td>
          <td>${doctors.data[x].practices[0].phones[0].number}</td>
        </tr>`)
      }
    })

    $(".clickable").each(function() {
      $(this).click(function() {
        console.log("clicked")

      });
    });

  })




});

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
    let doc = getDoc.getDoctors(doctor);
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
          <td class="clickable" id="${doctors.data[x].uid}">${doctors.data[x].profile.first_name} ${doctors.data[x].profile.last_name}</td>
          <td>${doctors.data[x].profile.last_name}</td>
          <td>${doctors.data[x].practices[0].phones[0].number}</td>
        </tr>`)
      }

      $(".clickable").each(function() {
        $(this).click(function() {
          console.log("clicked")
          findDoc(this.id);


        });
      });


    })

    function findDoc(docID) {
      let getDoctor = new Doctor () ;
      let promise = getDoctor.findDoctor(docID)

      promise.then (newDoctor => {
        let doctor = JSON.parse(newDoctor);
        $(".doctorSearch").append(`<h1>${doctor.data.profile.first_name}${doctor.data.profile.last_name}</h1>`)
        $(".doctorSearch").append(`<h3>Specialties</h3>`)
        for (let i in doctor.data.specialties) {
          $(".doctorSearch").append(`<p>${doctor.data.specialties[i].name}</p>`)
        }
        $(".doctorSearch").append(`<h3>Practices</h3>`)
        for (let i in doctor.data.practices) {
          $(".doctorSearch").append(`<hr /><p>accepts new patients: (${doctor.data.practices[i].accepts_new_patients})</p>`)
          $(".doctorSearch").append(`<p>phone: ${doctor.data.practices[i].phones[0].number}</p>`)
          $(".doctorSearch").append(`<p>address:
            ${doctor.data.practices[i].visit_address.street}
            ${doctor.data.practices[i].visit_address.city}
            ${doctor.data.practices[i].visit_address.state}
            ${doctor.data.practices[i].visit_address.zip}
            </p>`)
        }


        console.log(doctor)
      })
    }

    // $(".clickable").each(function() {
    //   $(this).click(function() {
    //     console.log("clicked")
    //     findDoctor(this.id)
    //
    //   });
    // });

  })




});

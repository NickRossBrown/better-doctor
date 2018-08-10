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
      console.log(result)
      console.log(result.data)
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

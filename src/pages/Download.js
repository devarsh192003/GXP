import React from "react";
import { useForm } from "react-hook-form";
import "./download.css";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const handleSubmit = (event) => {
  var raw = JSON.stringify({
    name: document.getElementById("name").value,
    ph_number: document.getElementById("phone").value,
    org: document.getElementById("org").value,
    mail: document.getElementById("email").value,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  event.preventDefault();
  fetch("https://eager-gold-seal.cyclic.app/", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      fetch("GXPbrochure.pdf").then((response) => {
        response.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "GXPbrochure.pdf";
          alink.click();
        });
      });
    })
    .catch((error) => console.log("error", error));
};

const Download = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (

    <>
    
    <div class="download-title">DOWNLOAD COMPANY'S BROCHURE</div>
      <div className="form-container">
        <div class="form">
         
          <div class="download-subtitle">Fill Your Details</div>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div class="input-container ic1">
              <input
                id="name"
                type="text"
                required
                class="input"
                placeholder=" "
              ></input>
              {errors.name && (
                <span className="errorMessage">{errors.name.message}</span>
              )}
              <div class="cut cut-short"></div>
              <label for="firstname" class="placeholder">
                Name
              </label>
            </div>
            <div class="input-container ic2">
              <input
                id="phone"
                type="tel"
                name="subject"
                pattern="[0-9]{10}"
                required
                class="input"
                placeholder=" "
              ></input>
              {errors.subject && (
                <span className="errorMessage">{errors.subject.message}</span>
              )}
              <div class="cut cut-short"></div>
              <label for="lastname" class="placeholder">
                Phone
              </label>
            </div>
            <div class="input-container ic2">
              <input
                id="org"
                type="text"
                name="organization"
                required
                className="input"
                placeholder=" "
              ></input>
              {errors.message && (
                <span className="errorMessage">Please enter a message</span>
              )}
              <div class="cut"></div>
              <label for="lastname" class="placeholder">
                Organisation Name
              </label>
            </div>
            <div class="input-container ic2">
              <input
                id="email"
                type="email"
                name="email"
                required
                class="input"
                placeholder=" "
              ></input>
              {errors.email && (
                <span className="errorMessage">
                  Please enter a valid email address
                </span>
              )}
              <div class="cut cut-short"></div>
              <label for="email" class="placeholder">
                Email
              </label>
            </div>
            <div className="submit-container">
              <button type="submit" class="buttonDownload">
                download
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Download;



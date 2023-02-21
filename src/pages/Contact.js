import React from "react";
import Data from "../Data1.json";

function Contact() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/Contact.png'} alt="LOADING" className='flyer' />
      <br/>
      <div className="contact_title">
      </div>
      <div className="Contents">
        <p>
          {Data.data.contact.SubTitle}
          <br />
          {Data.data.contact.Address1}
          <br />
          {Data.data.contact.Address2}
          <br />
          {Data.data.contact.Address3}
          <br />
          {Data.data.contact.Address4}
          <br />
          {Data.data.contact.Address5}
          <br />
          {Data.data.contact.Website}
          <br />
          {Data.data.contact.Email}
          <br />
          {Data.data.contact.Mobile}
        </p>
      </div>
      <br />
      <br />
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443.63353897595744!2d73.30328001640072!3d22.413894033099012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fd30bffc86083%3A0x3c785934721564e3!2sNILKANTH%20INDUSTRIAL%20PARK%201!5e0!3m2!1sen!2sin!4v1676347495236!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{
          border: 0,
          allowfullscreen: "true",
          loading: "lazy",
          referrerpolicy: "no-referrer-when-downgrade",
        }}
      ></iframe>
    </div>
  );
}

export default Contact;

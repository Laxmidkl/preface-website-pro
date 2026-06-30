import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <section className=" mb-16">
        <div className="w-10/12 h-[350px] relative m-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.939848958246!2d83.42509497370752!3d27.688253926336518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687a308b3c151%3A0xafc73be1f9fc428!2sPreface%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1781864704261!5m2!1sen!2snp"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Preface Technology Pvt.Ltd"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default GoogleMap;

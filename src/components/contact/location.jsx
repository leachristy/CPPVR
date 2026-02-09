import React from 'react';

export const Location = () => {
  return (
    <>
      <p className="font-rubik db-textcolor display-5 fw-bold mt-4 mb-4 text-center">
        Find us on Campus
      </p>

      <div className="d-flex justify-content-center mb-4">
        <iframe
          title="CPP Computer Science Department"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1128.8439320710422!2d-117.82559640182318!3d34.05801450199229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32eae02400001%3A0x23ad97f87c7698b3!2sCollege%20of%20Science%20Building%208!5e0!3m2!1sen!2sus!4v1770544242632!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0, maxWidth: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

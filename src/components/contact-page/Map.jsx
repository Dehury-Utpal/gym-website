function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4372.133436951413!2d85.80426628415223!3d20.350901385101082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e064769e73%3A0x9288172f3a98c7a4!2sSilicon%20University!5e0!3m2!1sen!2sin!4v1746720276678!5m2!1sen!2sin"
      width="600"
      height="450"
     // style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-96 w-full shadow-xl grayscale-[70%]"
    ></iframe>
  );
}

export default Map;

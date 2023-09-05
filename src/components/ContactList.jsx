function ContactList() {
    const handleLinkClick = (e) => {
      e.preventDefault();
      window.location.href = "mailto:juanbc06@gmail.com";
    };
  
    return (
      <li id="contacto" className="  bg-indigo-400 px-2 rounded py-1 ml-10 font-medium">
        <a href="#" className="text-white" onClick={handleLinkClick}>
          Get In Touch
        </a>
      </li>
    );
  }
  export default ContactList;
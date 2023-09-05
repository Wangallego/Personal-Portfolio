function ContactList() {
  
    
    const emailAddress = 'juanbc06@gmail.com'; 
  
    return (
      <li id="contacto" className="  bg-indigo-400 px-2 rounded py-1  font-medium">
        <a  href={`mailto:${emailAddress}`} className="text-white" >
          Get In Touch
        </a>
      </li>
    );
  }
  export default ContactList;
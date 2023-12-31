import twitter from '../assets/twitter.svg';
import gitHub from '../assets/gitHub.svg';
import linkedin from '../assets/linkedin.svg';




function Footer() {
  return (
<footer className="bg-black h-24 flex text-white justify-center items-center px-6 md:px-12 fixed bottom-0 w-full mt-22">
  <div>
    <ul className="flex justify-center items-center space-x-6">
    <li className="flex space-x-2 items-center">
      <a href="https://twitter.com/home" target="_blank" rel='noreferrer'>
        <img src={twitter} alt="" className="bg-white rounded-full p-1 w-[1.8rem]" />
      </a>
      <a href="https://twitter.com/home" target="_blank" className="text-white" rel='noreferrer'>Twitter</a>
    </li>
    <li className="flex space-x-2 items-center">
      <a href="https://github.com/Wangallego" target="_blank" rel='noreferrer'>
        <img src={gitHub} alt="" className="bg-white rounded-full p-1 w-[1.8rem]" />
      </a>
      <a href="https://github.com/Wangallego" target="_blank" className="text-white " rel='noreferrer'>GitHub</a>
    </li>
    <li className="flex space-x-2 items-center">
      <a href="https://www.linkedin.com/in/juan-basoa-37bab0253/" target="_blank" rel='noreferrer'>
        <img src={linkedin} alt="" className="bg-white rounded-full p-1 w-[1.8rem]" />
      </a>
      <a href="https://www.linkedin.com/in/juan-basoa-37bab0253/" target="_blank" className="text-white" rel='noreferrer'>LinkedIn</a>
    </li>
  </ul>
</div>

    </footer>
  );
}

export default Footer;

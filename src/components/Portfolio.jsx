import React, { useState } from 'react';
import toDo from '../assets/toDo.png';
import notes from '../assets/notes.png';
import gitHub from '../assets/gitHub.svg';
import web from '../assets/web.svg';
import tresEnRaya from '../assets/TresEnraya.png';


// Objeto que contiene los recursos de cada artículo
const articles = [
    {
      title: "To Do Clon",
      subtitle: "ToDo Microsoft",
      description:" Me sumergí en una experiencia en la que pude explorar a fondo las capacidades de Tailwind CSS y JavaScript vanilla. Esta aplicación es una parte esencial de mi flujo de trabajo diario, y sentía la necesidad de hacer algunos ajustes. ",
      image: toDo,
      linkGit: "https://github.com/Wangallego/Clon-Microsof-todo",
      linkWeb: "https://todo-clon-microsoft.netlify.app/"
    },
    {
      title: "Notas Privadas",
      subtitle: "Un lugar para compartir notas privadas",
      description: "La aplicación Notas Privadas te permite crear y compartir notas privadas de forma segura. Cada nota se encripta y solo se puede abrir una vez por el destinatario. Es una manera segura y privada de comunicarte y compartir información confidencial.",      
      image: notes,
      linkGit: "https://github.com/Wangallego/Notas-Privadas",
      linkWeb: ""
    },
    {
      title: "Tres En Raya",
      subtitle: "Tres en Raya en React",
      description: "Una practica para poner en uso y entender el useState, la componetización y los hooks de React.",
      image: tresEnRaya,
      linkGit: "https://github.com/Wangallego/REACT-TresEnRaya",
      linkWeb: "https://3-en-raya-wan.netlify.app"
    }
  ];
  
  // Componente Article que renderiza un artículo
  function ArticleSection({ title, subtitle, description, image,linkGit,linkWeb }) {

    const [isTextHidden, setIsTextHidden] = useState(true);

    return (
      <article id="portfolio" className="grid grid-cols-1 w-[80%] md:grid-cols-2 gap-6 md:gap-10 mt-12 mb-[6rem] rounded-lg p-6 md:p-12 border shadow-2xl bg-gradient-to-br from-blue-200 via-indigo-100 to-slate-300 mx-auto text-center hover:scale-100 transition transform duration-700">
 

     <div className="relative overflow-hidden object-fill rounded-lg" >
      <img
      src={image}
      alt=""
      className="w-full md:w-[40rem] rounded-lg transition transform duration-300 object-fill hover:scale-110"
      />
    </div>

        <div className="mr-0 md:mr-16 space-y-4 flex flex-col justify-center">
          <h3 className="hidden md:inline-block md:text-4xl font-black text-transparent bg-indigo-500 bg-clip-text rounded-md text-center md:mb-[6rem]">{title}</h3>
          <h4 className="text-xl font-bold text-center md:text-left text-transparent bg-gradient-to-br from-indigo-400 via-blue-400 to-indgo-500 bg-clip-text rounded-md mb-1">{subtitle}</h4>
          <button className="text-blue-500 font-semibold hover:underline cursor-pointer md:hidden" id={`toggleText${title}`} onClick={() => setIsTextHidden(!isTextHidden)}> {isTextHidden ? 'Mostrar texto' : 'Ocultar texto'}</button>
          <div
          id={`accordionText${title}`}
          className={`md:max-h-full ${isTextHidden ? 'max-h-0' : 'max-h-full'} overflow-hidden transition-max-height duration-300 ease-in-out text-left text-[2ch]`}
        >
          <p>{description}</p>
          </div>
          
        <div className='flex justify-start items-center gap-12 bg-teal-300 p-4 rounded-full max-w-fit mx-auto'>
          <a href={linkGit} target="_blank" className='hover:scale-110 transition transform duration-300' rel='noreferrer' >
            <img src={gitHub} alt="" className="bg-white rounded-full p-1 w-[2.5rem] " />
          </a>
          <a href={linkWeb} 
          target="_blank" className='hover:scale-110 transition transform duration-300' rel='noreferrer'>
            <img src={web} alt="" className="bg-white rounded-full p-1 w-[2.5rem]" />
          </a>
        </div>
        
        </div>
      </article>
    );
  }
  
  // Componente principal que renderiza todos los artículos
  function Portfolio() {
    return (
      <div>
        <h2 className="text-2xl mx-[8rem] md:text-6xl font-bold text-center text-transparent bg-gradient-to-tr from-indigo-600 to-indgo-500 bg-clip-text">Portfolio & Experiencia</h2>
        {articles.map((article, index) => (
          <ArticleSection key={index} {...article} />
          
        ))}
      </div>
    );
  }
export default Portfolio;  
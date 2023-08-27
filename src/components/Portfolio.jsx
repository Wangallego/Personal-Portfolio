import React, { useState } from 'react';
import toDo from '../assets/toDo.png';


// Objeto que contiene los recursos de cada artículo
const articles = [
    {
      title: "To Do Clon",
      subtitle: "ToDo Microsoft",
      description: "Disfruté mucho de una práctica en la que pude familiarizarme con Tailwind CSS. Además, es una aplicación que utilizo con frecuencia y deseaba realizar algunos ajustes. Por ejemplo, la barra de navegación. Entiendo que el estilo de Microsoft debe ser más sobrio, pero considero que se vería más agradable visualmente.",
      image: toDo
    },
    {
      title: "LSU TAF",
      subtitle: "LSU Football Opscase study",
      description: "Red Six Media approached me to develop an interactive and smooth front-end experience for the LSU - Football Operations Facility Expansion. The project required solutions to produce a website that matched the detailed designs and interactivity concepts provided by Red Six Media whilst remaining fast to use across a wide range of devices.",
      image: toDo
    },
    {
      title: "CSS3 Foundations case",
      subtitle: "CSS3 Foundations case study",
      description: "I was the designer and front-end developer for the initial Pet Plate website in 2015 and worked closely with the company as it grew over a period of 5 years, eventually becoming Lead Front-end Developer. By early 2020, Pet Plate had successfully raised a total investment fund of $13 million dollars.",
      image: toDo
    }
  ];
  
  // Componente Article que renderiza un artículo
  function ArticleSection({ title, subtitle, description, image }) {

    const [isTextHidden, setIsTextHidden] = useState(true);

    return (
      <article className="grid grid-cols-1 w-[80%] md:grid-cols-2 gap-6 md:gap-10 mt-12 mb-[6rem] rounded-lg p-6 md:p-12 border shadow-2xl bg-gradient-to-br from-blue-200 via-indigo-100 to-slate-300 mx-auto text-center hover:scale-100 transition transform duration-700">
 

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
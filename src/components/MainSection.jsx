import PropTypes from 'prop-types';
import landingPageImage from '../assets/landing-page-d.png';
import checklistImage from '../assets/checklist-5.png';
import personalDataImage from '../assets/personal-data-d.png';

function MainSection() {
  return (
    <main className="mx-[6rem] md:mx-[8rem] mt- mb-6 ">
      <div className="flex flex-col justify-center items-center space-y-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold animate__animated animate__zoomInDown">
          <span className="bg-indigo-400 text-transparent bg-clip-text">
            Desarrollo Front-end
          </span>
        </h2>

        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-xl mx-auto">
          ¡Hola! Soy Juan Basoa, un apasionado del{' '}
          <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text rounded-md">
            desarrollo web front-end
          </span>
          . Estoy en constante búsqueda de conocimiento y mejora.
        </p>
      </div>

      <div className="animate__animated animate__fadeInRight flex flex-col md:flex-col lg:flex-row justify-center gap-12 items-center p-6 mx-12 mb-8 mt-4">
        <FeatureCard
          imgSrc={landingPageImage}
          title="Diseño Web Responsivo"
          description="Una de mis principales fortalezas es crear sitios web altamente receptivos y adaptables a dispositivos. Mi objetivo es brindar experiencias excepcionales en cualquier dispositivo."
        />
        <FeatureCard
          imgSrc={checklistImage}
          title="Explorador Front-end"
          description="Enfoque en desarrollo front-end, exploración en programación del lado del servidor con tecnologías como Python y Flask. Manejo SQL, MariaDB y HeidiSQL, trabajo con Postman en manipulación y creación de API REST."
        />
        <FeatureCard
          imgSrc={personalDataImage}
          title="Apasionado Audiovisual"
          description="Apasionado del cine y la música, siempre aprendiendo más en estos temas. Mi pasión por el aprendizaje constante es una de mis mayores fortalezas."
        />
      </div>
    </main>
  );
}

function FeatureCard({ imgSrc, title, description }) {
  return (
    <div className="w-[20rem] md:w-[36rem] h-[24rem] md:h-[28rem] flex flex-col items-center rounded-lg px-3 shadow-xl border-0 transition transform duration-700 gap-3  md:overflow-hidden bg-gradient-to-br from-blue-300 via-indigo-100 to-slate-300">
      <img src={imgSrc} alt="img" className="w-[15rem] md:w-[20rem] pt-0 md:pt-2" />
      <h3 className=" font-medium text-2xl mt-0 md:mt-2 text-center text-transparent bg-gradient-to-tr from-indigo-500 to-indigo-400 bg-clip-text">
        {title}
      </h3>
      <p className=" text-gray-600 pb-6">{description}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MainSection;

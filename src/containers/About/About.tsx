const About = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col text-center text-4xl">
        <h1 className="font-bold">Muradil Koychubekov</h1>
        <h4 className="font-normal">Frontend Developer</h4>
      </div>
      <div className="mt-3">
        <p>В мир IT я начал свой путь в 17 лет, еще находясь в школе. Мои первые шаги в программировании были сделаны с
          использованием таких языков, как PascalABC, C++ и Python 3. Сейчас я студент Кыргызского Российского
          Славянского Университета на факультете естественно-технических наук, где обучаюсь на специальности "Инженер
          инфокоммуникационных технологий и систем связи" (4 курс). На пути к своей профессиональной реализации я также
          посещаю курсы по программированию в "AttractorSchool" и активно работаю над улучшением своего английского
          языка, на данный момент мой уровен A2.</p>
      </div>
      <div className="grid grid-cols-3 gap-x-2 mt-5">
        <div className="col-span-2">
          <h4 className="text-2xl">Основной стек</h4>
          <p>В моем опыте также присутствует работа в области верстки, где я занимался созданием веб-страниц с
            использованием HTML и CSS. Кроме того, я активно применял препроцессор Sass для повышения эффективности и
            управляемости стилей. Этот опыт в верстке и использование Sass позволили мне не только улучшить
            пользовательский интерфейс проектов, но и оптимизировать процесс разработки. В моем опыте также включен опыт
            работы с адаптивной версткой. Я успешно создавал веб-страницы, которые корректно отображаются на различных
            устройствах, начиная от мобильных телефонов и планшетов до настольных компьютеров. Применял медиа-запросы,
            гибкие блоки и технологии, такие как Flexbox и Grid, для создания удобного и привлекательного
            пользовательского интерфейса на всех типах устройств.</p>
          <p><strong>JavaScript: </strong>
            В ходе обучения на курсах "AttractorSchool" я активно применяю язык программирования JavaScript для создания
            динамичных веб-приложений. Мои проекты на этом языке охватывают как основы, так и более продвинутые
            концепции, что позволяет мне уверенно применять полученные знания в разработке интерактивных веб-проектов.
          </p>
          <p>
            <strong>React: </strong>
            В рамках тех же курсов я активно изучаю и успешно применяю библиотеку React. Мой опыт фокусируется на
            создании компонентов и построении интерфейсов, что обеспечивает практическое применение знаний. Разрабатывая
            проекты с использованием React, я углубляю свои навыки и стремлюсь к более высокому уровню компетентности в
            разработке пользовательских интерфейсов.</p>
          <p>
            <strong>TypeScript: </strong>
            В ходе текущего обучения я успешно внедряю TypeScript в мой стек технологий. Использование TypeScript
            улучшает читаемость кода и обеспечивает более надежную разработку. Полученные знания в TypeScript я успешно
            применяю для создания структурированных и надежных веб-приложений, что соответствует моим карьерным амбициям
            в области информационных технологий.
          </p>
          <p>Tекст еще в разработке...</p>
        </div>
        <div className="col-span-1">
          <h4 className="text-2xl">My Skills</h4>
          <div className="grid grid-cols-5 items-start gap-2 mt-2">
            <img className="w-full"
                 src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white" alt="React"/>
            <img className="w-full"
                 src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"
                 alt="React"/>
            <img className="w-full"
                 src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"
                 alt="React"/>
            <img className="w-full"
                 src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white" alt="React"/>
            <img className="w-full" src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white"
                 alt="React"/>
            <img className="w-full" src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white"
                 alt="React"/>
            <img className="w-full" src="https://img.shields.io/badge/SASS-CC6699?style=flat&logo=sass&logoColor=white"
                 alt="React"/>
            <img className="w-full"
                 src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
                 alt="React"/>
            <img className="w-full"
                 src="https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white"
                 alt="React"/>
            <img className="w-full" src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white"
                 alt="React"/>
            <img className="w-full"
                 src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="React"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
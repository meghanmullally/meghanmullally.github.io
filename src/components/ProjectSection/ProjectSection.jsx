import React, { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectSection.module.css';
import clickyGameImg from '../../assets/images/projects/sailor-moon-clickyGame.png';
import jewelGameImg from '../../assets/images/projects/jewel-game.png';
import burgerImg from '../../assets/images/projects/burger.png';
import friendFinderImg from '../../assets/images/projects/friend-finder-img.png';
import gifTasticImg from '../../assets/images/projects/gifTastic.png';
import project1LmnImg from '../../assets/images/projects/project1-lmn.png';
import project1_2LmnImg from '../../assets/images/projects/project1-2.0.png';
import lmnNewsImg from '../../assets/images/projects/lmn-news.png';
import weatherAppImg from '../../assets/images/projects/weather-app-img.png';
import cafeImg from '../../assets/images/projects/cafe-img.png';
import pokeImg from '../../assets/images/projects/pokeImg.png';

function ProjectSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Bamazon',
      category: 'Homework',
      imgSrc: 'https://github.com/meghanmullally/Bamazon/raw/master/assets/images/customer.png?raw=true',
      githubLink: 'https://github.com/meghanmullally/Bamazon',
      description: 'This is an Amazon-like storefront created with MySQL and NodeJS. The app takes orders from customers and depletes stock accordingly. It also tracks product sales across departments and summarizes the highest-grossing departments.',
    },
    {
      id: 2,
      title: 'Clicky Game',
      category: 'Homework',
      imgSrc: clickyGameImg,
      githubLink: 'https://github.com/meghanmullally/clickyGame',
      liveLink: 'https://meghanmullally.github.io/clickyGame/',
      description: 'Click on any image to earn a point, but don\'t click on the same picture more than once. Click all 12 to win!',
    },
    {
      id: 3,
      title: 'Crystal Collector',
      category: 'Homework',
      imgSrc: jewelGameImg,
      githubLink: 'https://github.com/meghanmullally/unit-4-game',
      liveLink: 'https://meghanmullally.github.io/unit-4-game/',
      description: 'The user is given a random number when they click play. The user clicks on the 4 different crystals to try and match the random number. If the values go over, they lose; if they match, they win!',
    },
    {
      id: 4,
      title: 'Eat the Burger',
      category: 'Homework',
      imgSrc: burgerImg,
      githubLink: 'https://github.com/meghanmullally/Eat-Da-Burger',
      liveLink: 'https://yummmyyyburger.herokuapp.com/',
      description: 'Eat-Da-Burger! is a restaurant app that lets users input burger names to eat. Users can devour burgers, moving them from one side of the page to another.',
    },
    {
      id: 5,
      title: 'Friend-Finder',
      category: 'Homework',
      imgSrc: friendFinderImg,
      githubLink: 'https://github.com/meghanmullally/Friend-Finder',
      liveLink: 'https://mmfriendfinder.herokuapp.com/',
      description: 'Friend-Finder is similar to a dating app but helps users find their best friend! Users complete a survey, and the app compares answers to match them with others.',
    },
    {
      id: 6,
      title: 'Gif Generator',
      category: 'Homework',
      imgSrc: gifTasticImg,
      githubLink: 'https://github.com/meghanmullally/GifTastic',
      liveLink: 'https://meghanmullally.github.io/GifTastic/',
      description: 'Click on buttons to generate gifs based on the button text. Gifs have ratings displayed above them. Users can click on a gif to animate it.',
    },
    {
      id: 7,
      title: 'LIRI',
      category: 'Homework',
      imgSrc: 'https://github.com/meghanmullally/LIRI/blob/master/assets/image/LIRI.png?raw=true',
      githubLink: 'https://github.com/meghanmullally/LIRI',
      description: 'LIRI is a Language Interpretation and Recognition Interface. It is similar to Siri but is used via the command line to take in parameters and give back data.',
    },
    {
      id: 8,
      title: 'Project 1 LMN Travel',
      category: 'Projects',
      imgSrc: project1LmnImg,
      githubLink: 'https://github.com/meghanmullally/lmn',
      liveLink: 'https://meghanmullally.github.io/lmn/home',
      description: 'User inputs a place they want to visit, and the app shows flight details, cheapest flights, location images, and travel guide videos.',
    },
    {
      id: 9,
      title: 'Project 1: 2.0 LMN Travel',
      category: 'Projects',
      imgSrc: project1_2LmnImg,
      githubLink: 'https://github.com/meghanmullally/travel-lmn',
      liveLink: 'https://travel-lmn.herokuapp.com/',
      description: 'An improved version of LMN Travel with additional features and a new design.',
    },
    {
      id: 10,
      title: 'Project 3 Learn More News',
      category: 'Projects',
      imgSrc: lmnNewsImg,
      githubLink: 'https://github.com/viaduct12/project-3',
      liveLink: 'https://viaduct12.github.io/project-3/discover',
      description: 'A website that provides a wide range of news outlets and topics to discover. Users can find news on selected categories.',
    },
    {
      id: 11,
      title: 'Pokémon App',
      category: 'Recent',
      imgSrc: pokeImg,
      githubLink: 'https://github.com/meghanmullally/pokemon',
      liveLink: 'https://poketrainercentral.netlify.app/',
      description: 'After a break of 2.5 years, I decided to get back into coding with a project centered around Pokémon. This application is built using React.js, JavaScript, Redux, and Material UI. The goal of this project is to reacquaint myself with coding and pick up new skills, for example on Redux.',
    },
    {
      id: 12,
      title: 'Meghan\'s Cafe',
      category: 'Recent',
      imgSrc: cafeImg,
      githubLink: 'https://github.com/meghanmullally/cafe',
      liveLink: 'https://www.codedex.io/@meghansm/build/meghans-cafe',
      description: 'Welcome to Meghan\'s Cafe! This project showcases a simple restaurant menu with an order form. It\'s a part of the final project for the HTML course on Codédex.',
    },
    {id: 13,
      title: 'Weather App',
      category: 'Recent',
      imgSrc: weatherAppImg,
      githubLink: 'https://github.com/meghanmullally/weather',
      liveLink: 'https://weather-bice-theta.vercel.app/',
      description: 'The Weather App displays the current weather of a searched city along with a 5-day forecast.It\'s a part of the final project for the Javascript course on Codédex.',
    },
  ];

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <section className={styles.projectSection} id="projects">
      <h2>My Projects</h2>
      <div>
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('Recent')}>Recent</button>
        <button onClick={() => setSelectedCategory('Homework')}>Homework</button>
        <button onClick={() => setSelectedCategory('Projects')}>Projects</button>
      </div>
      <div className={styles.projectList}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
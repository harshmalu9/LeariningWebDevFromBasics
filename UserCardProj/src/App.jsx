import React from 'react';
import UserInfoCard from './components/UserInfoCard';

const App = () => {
  const users = [
    {
      name: 'Aarav Sharma',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      description:
        'Tech enthusiast sharing daily coding tips and project ideas.',
      likesCount: 1240,
      followersCount: 980,
      viewsCount: 15200,
    },
    {
      name: 'Riya Mehta',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      description:
        'UI/UX designer focused on clean interfaces and smooth experiences.',
      likesCount: 2310,
      followersCount: 1870,
      viewsCount: 26800,
    },
    {
      name: 'Kabir Verma',
      image: 'https://randomuser.me/api/portraits/men/56.jpg',
      description: 'Full-stack developer building scalable web applications.',
      likesCount: 980,
      followersCount: 760,
      viewsCount: 11900,
    },
    {
      name: 'Ananya Iyer',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      description:
        'Content creator exploring tech, productivity, and learning.',
      likesCount: 3120,
      followersCount: 2450,
      viewsCount: 40100,
    },
    {
      name: 'Rohan Kulkarni',
      image: 'https://randomuser.me/api/portraits/men/71.jpg',
      description: 'Backend engineer passionate about APIs and databases.',
      likesCount: 860,
      followersCount: 640,
      viewsCount: 9800,
    },
    {
      name: 'Sneha Patil',
      image: 'https://randomuser.me/api/portraits/women/25.jpg',
      description:
        'Aspiring data scientist sharing beginner-friendly insights.',
      likesCount: 1740,
      followersCount: 1320,
      viewsCount: 21300,
    },
    {
      name: 'Aditya Rao',
      image: 'https://randomuser.me/api/portraits/men/18.jpg',
      description:
        'Mobile app developer working with iOS and Android platforms.',
      likesCount: 1450,
      followersCount: 1100,
      viewsCount: 18750,
    },
    {
      name: 'Neha Kapoor',
      image: 'https://randomuser.me/api/portraits/women/52.jpg',
      description: 'Tech blogger simplifying complex topics for beginners.',
      likesCount: 2890,
      followersCount: 2210,
      viewsCount: 35600,
    },
    {
      name: 'Vikram Singh',
      image: 'https://randomuser.me/api/portraits/men/84.jpg',
      description: 'DevOps learner automating workflows and deployments.',
      likesCount: 720,
      followersCount: 540,
      viewsCount: 8600,
    },
    {
      name: 'Pooja Nair',
      image: 'https://randomuser.me/api/portraits/women/90.jpg',
      description: 'Frontend developer crafting responsive and accessible UIs.',
      likesCount: 1980,
      followersCount: 1590,
      viewsCount: 24400,
    },
  ];

  return (
    <UserInfoCard />
  );
};

export default App;

import ProfilePic from '../assets/profile_pic.jpg';
import PostPic from '../assets/post_pic.jpg';
import PostPic2 from '../assets/post_pic2.png';
import PostPic3 from '../assets/post_pic3.png';

const feedMock = [
  {
    id: 1,
    user: {
      username: 'mariagabriela',
      profilePicture: ProfilePic,
    },
    midia: PostPic,
    likes: 14523,
    description: "Essa foi uma das melhores viagens da minha vida",
    comments: [
      { username: 'joaogabriel', text: 'Que paisagem linda!' },
      { username: 'joanamoreira', text: 'Muito lindo, Mari!' },
      { username: 'victorgabriel', text: 'Maravilhoso' },
    ],
  },
  {
    id: 2,
    user: {
      username: 'luizasilva',
      profilePicture: ProfilePic,
    },
    midia: PostPic2,
    likes: 8650,
    description: "Dia incrível na praia!",
    comments: [
      { username: 'mariagabriela', text: 'Que delícia de dia!' },
      { username: 'victorgabriel', text: 'Top demais!' },
    ],
  },
  {
    id: 3,
    user: {
      username: 'paulohenrique',
      profilePicture: ProfilePic,
    },
    midia: PostPic3,
    likes: 9235,
    description: "Explorando a cidade hoje.",
    comments: [
      { username: 'mariagabriela', text: 'Aproveite, Paulo!' },
      { username: 'luizasilva', text: 'Adoro esse lugar!' },
    ],
  }
];

export default feedMock;
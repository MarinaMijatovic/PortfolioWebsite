// dayjs
import dayjs from 'dayjs';
// lib
import { createPost } from 'utility/createBlogPost';
// type
import { BlogPost } from 'types/blogPostType';

const blogPosts: BlogPost[] = [
  createPost({
    category: ['photography'],
    date: dayjs().subtract(6, 'week'),
    id: 'custom-software-development',
    image: {
      alt: 'Custom software development',
      height: 2232,
      likes: 98,
      src: '/posts/softwaredevelopment.jpg',
      width: 1920,
    },
    filename: 'custom-software-development',
    title: 'Custom software development',
  }),
  createPost({
    category: ['design'],
    date: dayjs().subtract(3, 'week'),
    id: 'website-maintenance',
    image: {
      alt: 'website maintenance',
      height: 2400,
      likes: 126,
      src: '/posts/websitedevelopment.jpg',
      width: 1920,
    },
    filename: 'website-maintenance',
    title: 'Website maintenance',
  }),
  createPost({
    category: ['design'],
    date: dayjs().subtract(6, 'day'),
    id: 'tutoring',
    image: {
      alt: 'tutoring',
      height: 2396,
      likes: 102,
      src: '/posts/person holding ballpoint pen writing on white paper.jpg',
      width: 1920,
    },
    filename: 'tutoring',
    title: 'Tutoring',
  }),
  createPost({
    category: ['photography'],
    date: dayjs().subtract(2, 'week'),
    id: 'website-development',
    image: {
      alt: 'water droplets on glass window',
      height: 2880,
      likes: 77,
      src: '/posts/tutoring.jpg',
      width: 1920,
    },
    filename: 'website-development',
    title: `Website development`,
  }),
];

export default blogPosts;

import { Post, Snippet } from '@/type/type';

// 더미 데이터
export const DUMMYposts: Post[] = [
  {
    date: '2024.08.31',
    title: '방학부터 개강 하루 전까지 있었던 일들',
    category: '일상',
    excerpt: '방학을 보내며 있었던 일들을 되돌아보는 시간',
    id: '1',
    image: '/png/beulping.png',
  },
  {
    date: '2024.09.15',
    title: '추석 연휴에 핀토스를 하고있는 나를 보며',
    category: '일상',
    excerpt: '추석 연휴에 핀토스를 하고있는 나를 보며',
    id: '2',
    image: '/png/beulping.png',
  },
  {
    date: '2024.09.16',
    title: '그들이 온다아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ',
    id: '3',
    category: '일상',
    excerpt: '그들이 온다.',
    image: '/png/beulping.png',
  },
  {
    date: '2023.09.20',
    title: '유연한 변화를 위해 필요한 것은 무엇일까?',
    category: '일상',
    excerpt: '유연한 변화를 위해 필요한 것은 무엇일까?',
    id: '4',
    image: '/png/beulping.png',
  },
  {
    id: '5',
    title: '리액트 훅스 완벽 가이드',
    excerpt: '리액트 훅스의 모든 것을 알아봅니다.',
    date: '2023-10-15',
    category: 'FE',
    image: '/png/beulping.png',
  },
  {
    id: '6',
    title: '운영체제의 프로세스 관리',
    excerpt: '프로세스 관리 기법에 대해 살펴봅니다.',
    date: '2023-10-10',
    category: '운영체제',
    image: '/png/beulping.png',
  },
  {
    id: '7',
    title: '네트워크 기초: TCP/IP 프로토콜',
    excerpt: 'TCP/IP 프로토콜의 동작 원리를 설명합니다.',
    date: '2023-10-05',
    category: 'CS',
    image: '/png/beulping.png',
  },
  {
    id: '8',
    title: 'JavaScript 비동기 프로그래밍',
    excerpt: 'Promise와 async/await에 대해 알아봅니다.',
    date: '2023-09-30',
    category: 'FE',
    image: '/png/beulping.png',
  },
  {
    id: '9',
    title: '메모리 관리와 가상 메모리',
    excerpt: '운영체제의 메모리 관리 기법을 소개합니다.',
    date: '2023-09-25',
    category: '운영체제',
    image: '/png/beulping.png',
  },
  {
    id: '10',
    title: '알고리즘 기초: 정렬 알고리즘',
    excerpt: '다양한 정렬 알고리즘의 원리와 성능을 비교합니다.',
    date: '2023-09-20',
    category: 'CS',
    image: '/png/beulping.png',
  },
];

// 더미 스니펫
export const DUMMYsnippets: Snippet[] = [
  {
    id: 1,
    title: 'React useEffect 클린업',
    tags: ['React', 'Hooks'],
    date: '2023-10-15',
  },
  {
    id: 2,
    title: 'JavaScript 배열 복사',
    tags: ['JavaScript', 'Array'],
    date: '2023-10-14',
  },
  {
    id: 3,
    title: 'Git 브랜치 삭제',
    tags: ['Git'],
    date: '2023-10-13',
  },
  {
    id: 4,
    title: 'CSS Flexbox 중앙 정렬',
    tags: ['CSS', 'Flexbox'],
    date: '2023-10-12',
  },
  {
    id: 5,
    title: 'Python 리스트 컴프리헨션',
    tags: ['Python'],
    date: '2023-10-11',
  },
];

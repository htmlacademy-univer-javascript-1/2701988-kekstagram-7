const PICTURES_COUNT = 25;
const LikesRange = {
  MIN: 15,
  MAX: 200,
};
const DESCRIPTIONS = [
  'Красивый закат на море.',
  'Утренний кофе перед работой.',
  'Мой кот снова занял моё кресло.',
  'Выходные в горах!',
  'Отличный день для прогулки по городу.',
];

/* ДЛЯ КОММЕНТАРИЕВ */
const AvatarRange = {
  MIN: 1,
  MAX: 6,
};
const MessagesCount = {
  MIN: 1,
  MAX: 2,
};
const CommentsRange = {
  MIN: 0,
  MAX: 30,
};

const NAMES_AUTHORS = ['Артём', 'Мария', 'Иван', 'Григорий', 'Глеб', 'Яна'];
const MESSAGE_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. ',
  'Моя бабушка случайно чихнула c фотоаппаратом в руках и у неё получилась фотография лучше. ',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. ',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?! '
];
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let commentId = 1;
const createComment = () => {
  const messageCount = getRandomInt(MessagesCount.MIN, MessagesCount.MAX);
  const message = Array.from({length: messageCount}, () =>
    MESSAGE_TEXT[getRandomInt(0, MESSAGE_TEXT.length - 1)]).join(' ');
  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomInt(AvatarRange.MIN, AvatarRange.MAX)}.svg`,
    message: message ,
    name: NAMES_AUTHORS[getRandomInt(0, NAMES_AUTHORS.length - 1)]
  };
};

const createPhoto = function (index) {
  const id = index + 1;
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInt(LikesRange.MIN, LikesRange.MAX),
    comments: Array.from({ length: getRandomInt(CommentsRange.MIN, CommentsRange.MAX) }, createComment),
  };
};

const result = Array.from({ length: PICTURES_COUNT },(_,index)=> createPhoto(index));


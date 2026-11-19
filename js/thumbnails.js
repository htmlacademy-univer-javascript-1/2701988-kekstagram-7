const picturesContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content
  .querySelector('.picture');

const createThumbnail = (picture) => {
  const { url, description, likes, comments } = picture;
  const pictureElement = thumbnailTemplate.cloneNode(true);
  const pictureImage = pictureElement.querySelector('img');

  pictureImage.src = url;
  pictureImage.alt = description;

  const pictureLikes = pictureElement.querySelector('.picture__likes');
  pictureLikes.textContent = likes;

  const pictureComments = pictureElement.querySelector('.picture__comments');
  pictureComments.textContent = comments.length;

  return pictureElement;
};

const renderThumbnails = function (pictures) {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createThumbnail(picture);
    fragment.append(pictureElement);
  });
  picturesContainer.append(fragment);
};


export { renderThumbnails };

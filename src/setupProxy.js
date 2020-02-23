const bodyParser = require('body-parser');
const jsonParseMiddleware = bodyParser.json();

let imagesMock = [
  {
    id: 1,
    title: 'Rocket',
    layout: 'horizontal',
    src: 'https://localmarketingdone4u.com/wp-content/uploads/postthumb-3-600x400.png',
  },
  {
    id: 2,
    title: 'Light Bulb',
    layout: 'horizontal',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzDtvrjmh8IM0MQDV9CiyTyjZPa_IboZbEvY4uSnOy-5S12wEU',
  },
  {
    id: 3,
    title: 'Hipster',
    layout: 'vertical',
    src: 'https://s3.amazonaws.com/tasmeemme.project.mi.thumbnails/resize_805x9000/526/421526.png',
  },
  {
    id: 4,
    title: 'The Contract',
    layout: 'horizontal',
    src: 'https://fistro.cz/wp-content/uploads/2019/04/postthumb-1-600x400.png',
  },
  {
    id: 5,
    title: 'Target',
    layout: 'horizontal',
    src: 'https://carib.digital/wp-content/uploads/2015/09/google-discounts.png',
  },
  {
    id: 6,
    title: 'Trophy',
    layout: 'horizontal',
    src: 'https://kayshowconcept.com/wp-content/uploads/postthumb-5-600x400.png',
  },
  {
    id: 7,
    title: 'Fishing',
    layout: 'vertical',
    src: 'https://designest.org/wp-content/uploads/2015/07/fisherman.jpg',
  },
  {
    id: 8,
    title: 'Twitter Bird',
    layout: 'vertical',
    src: 'https://dvqlxo2m2q99q.cloudfront.net/000_clients/1059534/page/1059534bCdQAZda.png',
  },
  {
    id: 9,
    title: 'Earth',
    layout: 'horizontal',
    src: 'https://carib.digital/wp-content/uploads/2015/09/use-of-images.png',
  },
  {
    id: 10,
    title: 'Penguin',
    layout: 'vertical',
    src: 'https://www.urbanarts.com.br/imagens/produtos/013670/0/Ampliada/pinguim-flat.jpg',
  },
  {
    id: 11,
    title: 'Rocket',
    layout: 'horizontal',
    src: 'https://localmarketingdone4u.com/wp-content/uploads/postthumb-3-600x400.png',
  },
  {
    id: 13,
    title: 'Hipster',
    layout: 'vertical',
    src: 'https://s3.amazonaws.com/tasmeemme.project.mi.thumbnails/resize_805x9000/526/421526.png',
  },
  {
    id: 12,
    title: 'Light Bulb',
    layout: 'horizontal',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzDtvrjmh8IM0MQDV9CiyTyjZPa_IboZbEvY4uSnOy-5S12wEU',
  },
  {
    id: 14,
    title: 'The Contract',
    layout: 'horizontal',
    src: 'https://fistro.cz/wp-content/uploads/2019/04/postthumb-1-600x400.png',
  },
  {
    id: 15,
    title: 'Target',
    layout: 'horizontal',
    src: 'https://carib.digital/wp-content/uploads/2015/09/google-discounts.png',
  },
  {
    id: 16,
    title: 'Trophy',
    layout: 'horizontal',
    src: 'https://kayshowconcept.com/wp-content/uploads/postthumb-5-600x400.png',
  },
  {
    id: 17,
    title: 'Fishing',
    layout: 'vertical',
    src: 'https://designest.org/wp-content/uploads/2015/07/fisherman.jpg',
  },
  {
    id: 18,
    title: 'Twitter Bird',
    layout: 'vertical',
    src: 'https://dvqlxo2m2q99q.cloudfront.net/000_clients/1059534/page/1059534bCdQAZda.png',
  },
  {
    id: 19,
    title: 'Earth',
    layout: 'horizontal',
    src: 'https://carib.digital/wp-content/uploads/2015/09/use-of-images.png',
  },
  {
    id: 20,
    title: 'Penguin',
    layout: 'vertical',
    src: 'https://www.urbanarts.com.br/imagens/produtos/013670/0/Ampliada/pinguim-flat.jpg',
  },
];

module.exports = function(app) {
  app.get('/api/image/list', (req, res) => {
    return res.json(imagesMock);
  });
  app.patch('/api/image', jsonParseMiddleware, (req, res) => {
    const { id, title } = req.body;
    const imageIndex = imagesMock.findIndex(im => im.id === id);

    if (imageIndex === -1) {
      return res.send(404);
    }

    if (!title) {
      return res.status(400).send({ title: 'Required' });
    }

    imagesMock[imageIndex].title = title;

    return res.json(imagesMock[imageIndex]);
  });
  app.delete('/api/image/:id', (req, res) => {
    const { id } = req.params;

    imagesMock = imagesMock.filter(image => image.id !== id);

    return res.sendStatus(200);
  });
};

const bodyParser = require('body-parser');
const jsonParseMiddleware = bodyParser.json();

let imagesMock = [
  {
    id: 1,
    title: 'Cloudinary Logo',
    src:
      'https://ps.w.org/cloudinary-image-management-and-manipulation-in-the-cloud-cdn/assets/icon-256x256.png?rev=1555615',
  },
  {
    id: 2,
    title: 'Netflix Logo',
    src:
      'data:image/png;base64,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',
  },
  {
    id: 3,
    title: 'Fb Logo',
    src: 'https://imgclf.112.ua/original/2019/09/05/400667.png?timestamp=1567658113',
  },
  {
    id: 4,
    title: 'Google Logo',
    src: 'https://prm.ua/wp-content/uploads/2018/04/featured-1.png',
  },
  {
    id: 5,
    title: 'Amazon Logo',
    src: 'https://hi-tech.ua/wp-content/uploads/2019/06/Amazon-logo.jpg',
  },
  {
    id: 6,
    title: 'Codete Logo',
    src: 'https://crossweb.pl/job/wp-content/uploads/2019/10/profil-firmy3.png',
  },
  {
    id: 7,
    title: 'Tesla Logo',
    src: 'https://blog.comfy.ua/wp-content/uploads/2019/04/CHto-oznachaet-logotip-Tesla-1.jpg',
  },
  {
    id: 8,
    title: 'Microsoft Logo',
    src: 'https://www.elcore.ua/wp-content/uploads/2018/07/Microsoft-Logo.png',
  },
  {
    id: 9,
    title: 'IBM Logo',
    src:
      'https://cryptohamster.org/wp-content/uploads/2020/01/1480_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy85ZDkxYmMzOGIxZmE3ODAyMTIzNTJmMjIxMWQyMGMyMC5qcGc.jpg',
  },
  {
    id: 10,
    title: 'Apple Logo',
    src:
      'data:image/jpeg;base64,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',
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
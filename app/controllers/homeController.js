// const model = require('../models/{modelName}')

const Jimp = require("jimp");

class homeController {
  index(req, res) {
    res.render("page/home", {
      layout: "layout/index",
    });
  }

  renderJimp = (url, format) => {
    return Jimp.read(url)
      .then((image) => {
        const newFilename = url.split('/')[2].split('.')[0] + "." + format;
        return image.writeAsync("public/convert/" + newFilename)
          .then(() => newFilename);
      })
      .catch((err) => {
        throw err; // Melemparkan error untuk ditangkap di metode pemanggil
      });
  }

  post = async (req, res) => {
    try {
      let result;

      if (!req.file) {
        result = await this.renderJimp(req.body.url, req.body.format);
      } else if (req.file) {
        result = await this.renderJimp("public/uploads/" + req.file.filename, req.body.format);
      }

      res.download("public/convert/" + result);

    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  }

}
module.exports = new homeController();
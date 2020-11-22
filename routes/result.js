const express = require("express");
const router = express();
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const tf = require("@tensorflow/tfjs-node");
var cors = require("cors");
const fs = require("fs");
const jpeg = require("jpeg-js");

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

router.post("/diabetes", (req, res) => {
  model = undefined;

  const data = {
    pregnancies: req.body.pregnancies,
    glucose: req.body.glucose,
    bloodpressure: req.body.bloodpressure,
    skinthickness: req.body.skinthickness,
    insulin: req.body.insulin,
    bmi: req.body.bmi,
    dpf: req.body.dpf,
    age: req.body.age,
  };
  a = parseInt(data["pregnancies"]);
  b = parseInt(data["glucose"]);
  c = parseInt(data["bloodpressure"]);
  d = parseInt(data["skinthickness"]);
  e = parseInt(data["insulin"]);
  f = parseInt(data["bmi"]);
  g = parseInt(data["dpf"]);
  h = parseInt(data["age"]);
  async function loadmodel() {
    const xs = tf.tensor2d([a, b, c, d, e, f, g, h], [1, 8]);
    model = await tf.loadLayersModel("file://dl_models/diabetes/model.json");
    console.log("Model Loaded");
    const result = model.predict(xs).dataSync();
    return result;
  }

  loadmodel().then((value) => {
    return res.json({ result: value[0] });
  });
});

router.post("/liver", (req, res) => {
  model = undefined;

  a = parseInt(req.body.age);
  b = parseInt(req.body.gender);
  c = parseInt(req.body.total_bilirubin);
  d = parseInt(req.body.direct_bilirubin);
  e = parseInt(req.body.alkaline_phosphotase);
  f = parseInt(req.body.alamine_aminotransferase);
  g = parseInt(req.body.aspartate_aminotransferase);
  h = parseInt(req.body.total_protiens);
  i = parseInt(req.body.albumin);
  j = parseInt(req.body.agr);
  async function loadmodel() {
    const xs = tf.tensor2d([a, b, c, d, e, f, g, h, i, j], [1, 10]);
    model = await tf.loadLayersModel("file://dl_models/liver/model.json");
    console.log("Model Loaded");
    const result = model.predict(xs).dataSync();
    return result;
  }

  loadmodel().then((value) => {
    return res.json({ result: value[0] });
  });
});

router.post("/diabetes", (req, res) => {
  model = undefined;

  const data = {
    pregnancies: req.body.pregnancies,
    glucose: req.body.glucose,
    bloodpressure: req.body.bloodpressure,
    skinthickness: req.body.skinthickness,
    insulin: req.body.insulin,
    bmi: req.body.bmi,
    dpf: req.body.dpf,
    age: req.body.age,
  };
  a = parseInt(data["pregnancies"]);
  b = parseInt(data["glucose"]);
  c = parseInt(data["bloodpressure"]);
  d = parseInt(data["skinthickness"]);
  e = parseInt(data["insulin"]);
  f = parseInt(data["bmi"]);
  g = parseInt(data["dpf"]);
  h = parseInt(data["age"]);
  async function loadmodel() {
    const xs = tf.tensor2d([a, b, c, d, e, f, g, h], [1, 8]);
    model = await tf.loadLayersModel("file://dl_models/diabetes/model.json");
    console.log("Model Loaded");
    const result = model.predict(xs).dataSync();
    return result;
  }

  loadmodel().then((value) => {
    return res.json({ result: value[0] });
  });
});

router.post("/liver", (req, res) => {
  model = undefined;

  a = parseInt(req.body.age);
  b = parseInt(req.body.gender);
  c = parseInt(req.body.total_bilirubin);
  d = parseInt(req.body.direct_bilirubin);
  e = parseInt(req.body.alkaline_phosphotase);
  f = parseInt(req.body.alamine_aminotransferase);
  g = parseInt(req.body.aspartate_aminotransferase);
  h = parseInt(req.body.total_protiens);
  i = parseInt(req.body.albumin);
  j = parseInt(req.body.agr);
  async function loadmodel() {
    const xs = tf.tensor2d([a, b, c, d, e, f, g, h, i, j], [1, 10]);
    model = await tf.loadLayersModel("file://dl_models/liver/model.json");
    console.log("Model Loaded");
    const result = model.predict(xs).dataSync();
    return result;
  }

  loadmodel().then((value) => {
    return res.json({ result: value[0] });
  });
});

router.post("/kidney", (req, res) => {
  model = undefined;

  a = parseInt(req.body.blood_glucose_random);
  b = parseInt(req.body.sugar);
  c = parseInt(req.body.red_blood_cell_count);
  d = parseInt(req.body.blood_urea);
  e = parseInt(req.body.serum_creatinine);
  f = parseInt(req.body.diabetes_mellitus);
  g = parseInt(req.body.pus_cell);
  h = parseInt(req.body.anemia);
  i = parseInt(req.body.albumin);
  j = parseInt(req.body.blood_pressure);
  k = parseInt(req.body.red_blood_cells);
  l = parseInt(req.body.age);
  m = parseInt(req.body.coronary_artery_disease);
  n = parseInt(req.body.specific_gravity);
  o = parseInt(req.body.sodium);
  p = parseInt(req.body.appetite);
  q = parseInt(req.body.white_blood_cell_count);
  r = parseInt(req.body.packed_cell_volume);
  s = parseInt(req.body.pedal_edema);
  t = parseInt(req.body.potassium);
  u = parseInt(req.body.pus_cell_clumps);
  v = parseInt(req.body.hemoglobin);
  w = parseInt(req.body.hypertension);
  x = parseInt(req.body.bacteria);
  async function loadmodel() {
    const xs = tf.tensor2d(
      [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x],
      [1, 24]
    );
    model = await tf.loadLayersModel("file://dl_models/kidney/model.json");
    console.log("Model Loaded");
    const result = model.predict(xs).dataSync();
    return result;
  }

  loadmodel().then((value) => {
    return res.json({ result: value[0] });
  });
});

router.post("/heart", (req, res) => {
  model = undefined;

  a = parseInt(req.body.cp);
  b = parseInt(req.body.slope);
  c = parseInt(req.body.restecg);
  d = parseInt(req.body.thalach);
  async function loadmodel() {
    const xs = tf.tensor2d([a, b, c, d], [1, 4]);
    model = await tf.loadLayersModel("file://dl_models/heart/model.json");
    console.log("Model Loaded");
    const result = model.predict(xs).dataSync();
    return result;
  }

  loadmodel().then((value) => {
    return res.json({ result: value[0] });
  });
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage }).single("file");

const readImage = (path) => {
  const buf = fs.readFileSync(path);
  const pixels = jpeg.decode(buf, true);
  return pixels;
};

const imageByteArray = (image, numChannels) => {
  const pixels = image.data;
  const numPixels = image.width * image.height;
  const values = new Int32Array(numPixels * numChannels);

  for (let i = 0; i < numPixels; i++) {
    for (let channel = 0; channel < numChannels; ++channel) {
      values[i * numChannels + channel] = pixels[i * 4 + channel];
    }
  }

  return values;
};

const imageToInput = (image, numChannels) => {
  const values = imageByteArray(image, numChannels);
  const outShape = [image.height, image.width, numChannels];
  const input = tf.tensor3d(values, outShape, "int32");

  return input;
};

router.post("/malaria", (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    console.log(req.file);
    const image = readImage(`public/${req.file.filename}`);
    const input = imageToInput(image, 3);
    console.log(input);
    async function loadmodel(input) {
      const xs = input.expandDims((axis = 0));
      model = await tf.loadLayersModel("file://dl_models/malaria/model.json");
      console.log("Model Loaded");
      const result = model.predict(xs).dataSync();
      return result;
    }

    loadmodel(input).then((value) => {
      return res.json({ result: value[0] });
    });
  });
});

router.post("/covid", (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    const image = readImage(`public/${req.file.filename}`);
    const input = imageToInput(image, 3);
    async function loadmodel(input) {
      const xs = input.expandDims((axis = 0));
      model = await tf.loadLayersModel("file://dl_models/covid/model.json");
      console.log("Model Loaded");
      const result = model.predict(xs).dataSync();
      return result;
    }

    loadmodel(input).then((value) => {
      return res.json({ result: value[0] });
    });
  });
});

module.exports = router;

const express = require("express");
const Download = require("../model/downloadModel");
const downloadRouter = express.Router();
// const checkToken = require("../AuthToken/checkAuth");

// post all data
downloadRouter.post("/", async (req, res) => {
  await Download.findOne({ name: req.body.name }).exec((err, data) => {
    if (data) {
      console.log("This has already been saved");
    } else {
      const newData = new Download(req.body);
      newData.save(req.body, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            error: "There is server side error",
          });
        } else {
          res.status(200).json({
            message: "Add data successfully",
          });
        }
      });
    }
  });
});
// router.post("/example", (req, res, next) => {
//   var query = req.body.title; //Extract title from input form
//   Example.findOne({ title: query }, function (err, example) {
//     if (err) console.log(err);
//     if (example) {
//       console.log("This has already been saved");
//     } else {
//       var example = new Example(req.body);
//       example.save(function (err, example) {
//         if (err) console.log(err);
//         console.log("New example created");
//         res.redirect(`/`);
//       });
//     }
//   });
// });
// get all data
downloadRouter.get("/data", async (req, res) => {
  await Download.find({}).exec((err, data) => {
    if (err) {
      res.status(500).json({
        error: "the server side error",
      });
    } else {
      res.status(200).json({
        result: data,
        message: "data get succesfully",
      });
    }
  });
});

// get single item
// downloadRouter.get("/:name", checkToken, async (req, res) => {
//   await Download.find({ name: req.params.name }).exec((err, data) => {
//     if (err) {
//       res.status(500).json({
//         error: "the server side error",
//       });
//     } else {
//       res.status(200).json({
//         result: data,
//         message: "data get succesfully",
//       });
//     }
//   });
// });

// //update download field on database
// downloadRouter.put("/:name", checkToken, async (req, res) => {
//   await Download.find({ name: req.params.name }).exec((err, data) => {
//     console.log(req.params.name);
//     Download.updateOne(
//       { name: req.params.name },

//       {
//         $set: {
//           download:
//             data[0].download == req.body.download ||
//             data[0].download > req.body.download
//               ? data[0].download + 1
//               : data[0].download,
//         },
//       },
//       (err) => {
//         if (err) {
//           res.status(500).json({
//             error: "the server side error",
//           });
//         } else {
//           res.status(200).json({
//             message: "data update succesfully",
//           });
//         }
//       }
//     ).clone();
//   });
// });

// downloadRouter.put("/update/:name", async (req, res) => {
//   Download.updateOne(
//     { name: req.params.name },

//     {
//       $set: {
//         download:
//           req.body.download > 10000
//             ? req.body.download + 1000
//             : req.body.download + 500,
//       },
//     },
//     (err) => {
//       if (err) {
//         res.status(500).json({
//           error: "the server side error",
//         });
//       } else {
//         res.status(200).json({
//           message: "data update succesfully",
//         });
//       }
//     }
//   ).clone();
// });

// add download field
// downloadRouter.patch("/update", async (req, res) => {
//   await Download.updateMany(
//     {},
//     {
//       $set: { name: req.body.name },
//     },
//     (err) => {
//       if (err) {
//         res.status(500).json({
//           error: "the server side error",
//         });
//       } else {
//         res.status(200).json({
//           message: "data update succesfully",
//         });
//       }
//     }
//   ).clone();
// });
// downloadRouter.get("/delete/:name", (req, res) => {
//   console.log(req.params.name);
//   Download.deleteMany({ name: req.params.name }, function (err, data) {
//     if (!err) {
//       console.log(data);

//       console.log("member successfully deleted");
//     } else {
//       console.log("error");
//     }
//   });
//   res.redirect("/");
// });
module.exports = downloadRouter;

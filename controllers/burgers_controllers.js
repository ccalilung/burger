var express = require('express')
var burger = require("../models/burger")
var router = express.Router();



// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        var obj = {
            burgerEd: data
        }
        // console.log(obj)

        res.render("index", obj);
    });
})

router.post("/api/burgers", function (req, res) {
    // console.log(req.body)
    burger.insert("burgers", ["burger_name"], [req.body.burgerName], function (response) {

    })
    res.redirect("/")
})


router.post("/api/burgers", function (req, res) {
    // console.log(req.body)
    burger.update("burgers", "devoured", req.body.devoured, function (response) {

    })
    res.redirect("/")
})






//   router.post("/api/cats", function(req, res) {
//
//cat.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });
//   router.get("/", function(req, res) {
//     cat.all(function(data) {
//       var hbsObject = {
//         cats: data
//       };
//       console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
//   });


// Export routes for server.js to use.
module.exports = router;
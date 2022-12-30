const express = require("express");

const router = express.Router();

const userData = require("../Models/dataSchema");



// router.post("/itchi", async (req, res) => {
//     try {
//         const insertData = new userData(req.body);

//         const getData = await insertData.save();
//         res.status(201).json(getData);
//     } catch (err) {
//         console.log("Error");
//         res.status(404).json(err);
//     }

// });


// router.get("/itchi", async (req, res) => {
//     try {
//         const getData = await userData.find();
//         res.status(201).send(getData);
//     } catch (err) {
//         res.status(404).send(err);
//     }
// });

// router.get("/itchi/:id", async (req, res) => {
//     try {
//         const getId = req.params.id;
//         const getData = await userData.findOne({ _id: getId });
//         res.status(201).send(getData);
//     } catch (err) {
//         res.status(404).send(err);
//     }
// });

// router.get("/itchi/:firstName", async (req, res) => {
//     try {
//         const getFirstName = req.params.firstName;
//         const getData = await userData.findOne({ firstName: getFirstName });
//         res.status(201).send(getData);
//     } catch (err) {
//         res.status(404).send(err);
//     }

// });



// router.patch("/itchi/:id", async (req, res) => {
//     try {
//         const getId = req.params.id;
//         const getData = await userData.findByIdAndUpdate(getId, req.body, {
//             new: true,
//         });
//         res.status(201).send(getData);


//     } catch (err) {
//         res.status(404).send(err);
//     }

// })


// router.patch("/itchi/:firstName", async (req, res) => {
//     try {
//         const getFirstName = req.params.firstName;
//         const getData = await userData.findOneAndUpdate({ firstName: getFirstName }, req.body, {
//             new: true,
//         });
//         res.status(201).send(getData);

//     } catch (err) {
//         res.status(404).send(err);
//     }

// });


// router.delete("/itchi/:id", async (req, res) => {
//     try {
//         const getId = req.params.id;
//         const getData = await userData.findByIdAndDelete(getId);
//         res.status(201).send(getData);
//     } catch (err) {
//         res.status(404).send(err);
//     }

// });


// router.delete("/itchi/:firstName", async (req, res)=>{
//     try{
//         const getFirstName = req.params.firstName;
//         const getData = await userData.findOneAndDelete({firstName: getFirstName});
//         res.status(201).send(getData);
//     }catch(err){
//         res.status(404).send(err);
//     }

// })

module.exports = router;
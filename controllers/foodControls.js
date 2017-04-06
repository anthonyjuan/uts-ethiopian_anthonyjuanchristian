const Food = require('../models/food')

module.exports = {
  getData: (req, res) => {
    Food.find((err,results) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(results)
      }
    })
  },
  getOneData: (req,res) => {
    Food.findOne({_id:req.params.id},(err,result) =>{
      if(err) {
        res.send(err.message)
      } else {
        res.send(result)
      }
    })
  },
  createData: (req,res) => {
    console.log(req.body);
    let newFood = new Food({
      name: req.body.name,
      price: req.body.price,
      exp_date: req.body.expired
    })
    newFood.save((err,result) => {
      if(err) {
        res.send(err.message)
      } else {
        res.send(result)
        // res.send(`data ${result.name} berhasil ditambahkan`)
      }
    })
  },
  updateData: (req, res) => {
    Food.update({_id:req.params.id},{
      name: req.body.name,
      price: req.body.price,
      exp_date: req.body.expired
    }, (err,success) => {
      if(err) {
        res.send(err)
      } else {
        res.send(success)
      }
    })
  },
  removeData: (req, res) => {
    Food.findByIdAndRemove(req.params.id, (err,success) => {
      if(err) {
        res.send(err)
      } else {
        res.send(success)
      }
    })
  }
};
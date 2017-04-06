const Restaurant = require('../models/restaurant')

module.exports = {
  getData: (req, res) => {
    Restaurant.find()
              .populate('menu')
              .exec((err,results) => {
                if (err) {
                  res.send(err.message)
                } else {
                  res.send(results)
                }
              })
  },
  getOneData: (req,res) => {
    Restaurant.findOne({_id:req.params.id})
              .populate('menu')
              .exec((err,result) =>{
                if(err) {
                  res.send(err.message)
                } else {
                  res.send(result)
                }
              })
  },
  createData: (req,res) => {
    console.log(req.body);
    let newRestaurant = new Restaurant({
      name: req.body.name,
      owner: req.body.owner,
      address: req.body.address,
      open_status: req.body.status
    })
    newRestaurant.save((err,result) => {
      if(err) {
        res.send(err.message)
      } else {
        res.send(result)
        // res.send(`data ${result.name} berhasil ditambahkan`)
      }
    })
  },
  updateData: (req, res) => {
    Restaurant.update({_id:req.params.id},{
      name: req.body.name,
      owner: req.body.owner,
      address: req.body.address,
      open_status: req.body.status
    }, (err,success) => {
      if(err) {
        res.send(err)
      } else {
        res.send(success)
      }
    })
  },
  removeData: (req, res) => {
    Restaurant.findByIdAndRemove(req.params.id, (err,success) => {
      if(err) {
        res.send(err)
      } else {
        res.send(success)
      }
    })
  },
  insertMenu:(req, res) => {
    Restaurant.findOne({_id:req.body.restaurant}, (err,result) => {
      if(err) {
        res.send(err)
      } else if (result) {
        console.log('result ada');
        Restaurant.findByIdAndUpdate(
          result._id,
          {$push: {menu: req.body.food}},
          {safe: true, upsert: true, new : true},
          (err, success) => {
            if(err) {
              res.send(err)
            } else {
              res.send('data berhasil diupdate')
            }
          }
        )
      } else {
        res.send('restaurant tidak ditemukan');
      }
    })
  }
};
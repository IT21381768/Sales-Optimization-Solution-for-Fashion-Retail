const express = require('express');
const Carts = require('../Model/Cart')

const router = express();

//add to Cart


router.post('/cart/add',(req,res)=>{

    let newCart = new Carts(req.body);

    newCart.save((err)=>{
          if(err){
              return res.status(400).json({
                  error:err
              });
          }
          return res.status(200).json({
              success:"Cart Added Successfully"
          });

    });
});


//get carts

router.get('/carts',(req,res) =>{
    Carts.find().exec((err,Carts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCarts:Carts
        });
    });

});

//get specific cart

router.get("/cart/:id",(req,res) =>{
    let cartId = req.params.id;

    Carts.findById(cartId,(err,carts) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            carts
        });
    });
});

//update cart

router.put('/cart/update/:id',(req,res)=>{
    Carts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,posts)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    )
});

//delete cart

router.delete('/cart/delete/:id',(req,res)=>{
    Carts.findByIdAndRemove(req.params.id).exec((err,deletedCart)=>{
        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Succesfully Deleted",deletedCart
        });
    });
});

module.exports = router;
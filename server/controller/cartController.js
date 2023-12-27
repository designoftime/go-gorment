const Cart = require("../models/Cart");

const addToCart = async (req,res) => {
    try {
        
        const user = req.user;
        const cart = await Cart.findOne({user: user._id});
                
        if(!cart){
            const newCart = new Cart({user, carts: req.body.cart});
            await newCart.save();
        }
        else{
            cart.carts.push(req.body.cart);
            await cart.save();
        }
        
        res
        .status(200)
        .send({ ok: true, message: `Item Added in Cart Succesfully` });

    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
}

const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;

    await Cart.updateOne(
      { user: user._id },
      {
        $pull: { carts: { _id: id } },
      }
    );

    return res.status(200).json({
      message: `Cart item Deleted Successfully !`,
      ok: true,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateCartQuantity = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const { newQuantity } = req.body;

    await Cart.updateOne(
      {
        user: user._id,
        "carts._id": id,
      },
      {
        $set: {
          "carts.$.quantity": newQuantity,
        },
      }
    );

    return res.status(200).json({
      message: `Cart Quantity Updated Successfully !`,
      ok: true,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getCartByUserId = async (req,res) => {
    try {
       
        const cart = await Cart.findOne({user: req.user._id});
        return res.status(200).json({
            carts: cart.carts,
            success: true,
            message: "Cart Fetched Successfully !!"
        });
        
    } catch (err) {
        res.status(500).send({
            message: err.message,
        });
    }
}

module.exports = {
    addToCart,
    getCartByUserId,
    updateCartQuantity,
    deleteCart
}
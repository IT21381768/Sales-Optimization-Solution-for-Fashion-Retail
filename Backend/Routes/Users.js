const router = require("express").Router();
const { User, validate } = require("../Model/User");
const bcrypt = require("bcryptjs")

router.post("/",async(req,res)=>{
    try{
        const { error } = validate(req.body);
        if(error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email:req.body.email });
        if(user)
            return res.status(409).send({ message: "User with given email already exists"})

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password,salt);

        await new User({ ...req.body, password:hashPassword }).save();
        res.status(201).send({ message:"User created successfully"});
    }catch(error){
        res.status(500).send({ message: error.message });
    }
})

// Route to fetch user profile
router.get("/profile", async (req, res) => {
    try {
      // Assuming you have authentication middleware to get the current user
      const user = req.user;
  
      if (!user) {
        return res.status(401).send({ message: "Unauthorized" });
      }
  
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

  
module.exports = router;
const Pet = require("../model/Pet");

// all pets
const pet_all = async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
      } catch (error) {
        res.json({ message: error });
      }
};


const pet_details = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.petId);
        res.json(pet);
      } catch (error) {
        res.json({ message: error });
      }
};


const pet_create = async (req, res) => {
    const pet = new Pet({
        name: req.body.name,
        owner: req.body.owner,
        age: req.body.age,
        gender: req.body.gender,
        type:req.body.type
      });
    
      try {
        const savedPet = await pet.save();
        res.send(savedPet);
      } catch (error) {
        res.status(400).send(error);
      }
};


const pet_update = async (req, res) => {
    try {
        const pet = {
          name: req.body.name,
          owner: req.body.owner,
          age: req.body.age,
          gender: req.body.gender,
          type:req.body.type
        };
    
        const updatedPet = await Pet.findByIdAndUpdate(
          { _id: req.params.petId },
          pet
        );
        res.json(updatedPet);
      } catch (error) {
        res.json({ message: error });
      }
};

const pet_delete = async (req, res) => {
    try {
        const removePet = await Pet.findByIdAndDelete(req.params.petId);
        res.json(removePet);
      } catch (error) {
        res.json({ message: error });
      }
};
// const pet_delall = async (req, res) => {
//   try {
//       const pets = await Pet.Delete();
//       res.json(pets);
//     } catch (error) {
//       res.json({ message: error });
//     }
// };

module.exports = {
    pet_all, 
    pet_details, 
    pet_create, 
    pet_update, 
    pet_delete,
    // pet_delall
  }
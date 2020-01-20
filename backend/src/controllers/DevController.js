const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringasArray')

// Metodos de controller: index, show, store, update, destroy

module.exports = {
  async index (request, response) {
    const devs = await Dev.find()

    return response.json(devs)
  },

  async store (request, response) {
    const { github_username, techs, latitude, longitude } = request.body

    let dev = await Dev.findOne( { github_username });

    if (!dev){
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    
      const { name = login, avatar_url, bio  } = apiResponse.data
    
      const techsArray = parseStringAsArray(techs)
    
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      }
    
      dev = await Dev.create({ 
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      })
      // console.log(name, avatar_url, bio, github_username) 
    }
    return response.json(dev)
<<<<<<< HEAD
  },

  async update(request, response) {

    //Mandar um PV para o Vini me explicar como ele fez o update
    //https://github.com/vinifraga/omnistack10

    const { id } = request.params;
    const data = request.body;
    

    console.log(id)

  },
=======
  }
}
//   async update(request, response) {
//       const devs = await Dev.find()
  
//       return response.json(devs)
//   },
>>>>>>> cd82bff0d21ecd229a1ebb3b9bd08b94a50ec7f9

//   async destroy() {
//     //excluir um dev da aplicação
//   }
//
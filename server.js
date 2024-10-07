const express = require('express')
// const cors = require('cors')

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
const app = express()
const PORT = process.env.PORT || 3001
// Your Code Here

// Your Code Ends Here
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})

//homepage route
app.get("/", (req, res) => {
  res.send("Welcome to my page!");
});

// // today page route
// app.get("/today", (req, res) => {
//   res.send({
//     modnay: true,
//     tuesday: false,
//     wednesday: false,
//   });
// });

// // meal page route
// app.get("/meals", (req, res) => {
//   res.send({
//     breakfast: "eggs and bacon",
//     secondBreakfast: null,
//     lunch: "noodles",
//     diinner: "lasagna with caesar salad",
//     dessert: [
//       "leftover brownies",
//       "chocolate icecream",
//       "tiramisu",
//       "those ball things Aline posted up",
//     ],
//     totalCaloriesConsumed: 3000,
//   });
// });

app.get("/favpirote-food", (req, res) => {
  res.send("Sushi");
});

app.get("/favpirote-movie", (req, res) => {
  res.send("Lala Land");
});

app.get("/contact", (req, res) => {
  res.send({
    Email: "jessetang57@hotmail.com",
  });
});

app.get("/about-me", (req, res) => {
  res.send({
    Name: "Jessica",
    Age: 31,
    Location: "Vancouver",
  });
});

app.get("/movies", (req, res) => {
  res.send([
    {
      MovieName: "Harry Potter and the Philosopher's Stone",
      ReleaseDate: "November 11, 2001",
      DurationInMiniutes: 152,
    },
    {
      MovieName: "Harry Potter and the Chamber of Secrets",
      ReleaseDate: "November 15, 2002",
      DurationInMiniutes: 161,
    },
    {
      MovieName: "Harry Potter and the Prisoner of Azkaban",
      ReleaseDate: "November 15, 2004",
      DurationInMiniutes: 142,
    },
  ]);
});



app.get('/message/:id', (request, response) => {
    console.log(`Getting a message with the id of ${request.params.id}`)
    response.send({ msg: `Message with an id of ${request.params.id} found` })
  })
  


  app.get("/find",(req,res)=>{
        res.send({
                msg: `${req.query.name} is ${req.query.age} years old`
            })
          })
        
        
          app.get(
                '/middleware',
                (request, response, next) => {
                      console.log('this is middleware')
                      next()
                    },
                    (req, res) => {
                          res.send('response completed')
    }
  )


  
  
  
  app.get('/dogs', (req,res)=>{
      res.send('Toy Poodle')
    })

app.get('/cats/:catName', (req,res)=>{
    res.send({catName: "Puddles"})
})



app.get('/cats/:catName', (req, res) => {
    console.log(`Getting a message with the id of ${request.params.catName}`)
    res.send({ msg: `The cat's name is ${request.params.catName}` })
  })

  app.post('/towns', (req, res)=>{
    res.send({msg: `Your hometown is ${req.params.id}`})
  })

  








    //Make a catch route that sends an error for any wrong address
    ///Needs to be at the bottom
                        
                        app.get("/*",
                          (req, res) => {
                            res.send("404 - File not found");
                          });
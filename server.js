


const express = require("express")
const app = express()
const port = 3000;

// database source
const todoList = [
    {
      id: 1,
      title: "Buy groceries",
      description: "Milk, eggs, bread, and vegetables",
      completed: false,
    },

    {
      id: 2,
      title: "Finish homework",
      description: "Complete the math assignment",
      completed: true,
    },
    {
      id: 3,
      title: "Go for a jog",
      description: "5 kilometers in the neighborhood",
      completed: false,
    },
    {
      id: 4,
      title: "Read a book",
      description: "Chapter 7 of 'The Catcher in the Rye'",
      completed: false,
    },
    {
      id: 5,
      title: "Call grandma",
      description: "Wish her a sweet happy birthday",
      completed: false,
    },
    {
      id: 6,
      title: "Pay bills",
      description: "Electricity, water, and internet bills",
      completed: true,
    },
    {
      id: 7,
      title: "Plan vacation",
      description: "Research destinations and book flights",
      completed: false,
    },
    {
      id: 8,
      title: "Attend dentist appointment",
      description: "Get a dental checkup at 2:00 PM",
      completed: false,
    },
    {
      id: 9,
      title: "Write a blog post",
      description: "Topic: 'Tips for Time Management'",
      completed: false,
    },
    {
      id: 10,
      title: "Fix leaking faucet",
      description: "Buy parts and repair the bathroom faucet",
      completed: false,
    },
    {
      id: 11,
      title: "Exercise at the gym",
      description: "Cardio and weightlifting session",
      completed: false,
    },
    {
      id: 12,
      title: "Learn a new recipe",
      description: "Try making homemade pizza",
      completed: false,
    },
    {
      id: 13,
      title: "Call best friend",
      description: "Catch up on life and make weekend plans",
      completed: false,
    },
    {
      id: 14,
      title: "Plant flowers in the garden",
      description: "Tulips and daffodils in the backyard",
      completed: false,
    },
    {
      id: 15,
      title: "Organize the closet",
      description: "Sort and declutter clothes and shoes",
      completed: false,
    },
    {
      id: 16,
      title: "Watch a documentary",
      description: "Learn about space exploration",
      completed: false,
    },
    {
      id: 17,
      title: "Start a new book",
      description: "Begin reading 'The Hobbit'",
      completed: false,
    },
    {
      id: 18,
      title: "Visit the art gallery",
      description: "Explore the latest exhibit",
      completed: false,
    },
    {
      id: 19,
      title: "Plan a picnic",
      description: "Select a scenic location and pack a picnic basket",
      completed: false,
    },
    {
      id: 20,
      title: "Write a thank-you note",
      description: "Express gratitude to a colleague",
      completed: false,
    },
    {
      id: 21,
      title: "Repair the bicycle",
      description: "Inflate tires and oil the chain",
      completed: false,
    },
    {
      id: 22,
      title: "Bake chocolate chip cookies",
      description: "Follow a family recipe",
      completed: false,
    },
    {
      id: 23,
      title: "Visit the farmer's market",
      description: "Buy fresh produce and artisanal goods",
      completed: false,
    },
    {
      id: 24,
      title: "Create a budget",
      description: "Track income and expenses for the month",
      completed: true,
    },
    {
      id: 25,
      title: "Volunteer at the local shelter",
      description: "Help feed and care for rescue animals",
      completed: false,
    },
    {
      id: 26,
      title: "Learn a new language",
      description: "Practice basic phrases in Spanish",
      completed: false,
    },
    {
      id: 27,
      title: "Plan a movie night",
      description: "Pick a film and prepare popcorn",
      completed: false,
    },
    {
      id: 28,
      title: "Write a journal entry",
      description: "Reflect on the day's experiences",
      completed: false,
    },
    {
      id: 29,
      title: "Take a photography walk",
      description: "Capture interesting scenes in the city",
      completed: false,
    },
    {
      id: 30,
      title: "Learn a new instrument",
      description: "Start practicing the guitar",
      completed: false,
    },
  ];
  // End of database


  // Endpoint begins here
  app.get("/", (request, response) => {
    response.status(200).json(todoList);
  })

  app.get("/todos", (request, response) => {
      response.send(200).json(todoList);
  });

  app.get("/todoList/:id", (request, response) => {
      response
      .status(200)
      .json({ data: todoList.find((todo) => todo.id === request.params.id) });
  });

  app.post("/todoList", (request, response) => {
    todoList.push(request.body);
    response.status(201).json({ msg: "Todo created successfully" });
  });

  app.put("/todoList/:id", (request, response) => {
    const todo = todoList.find((todo) => todo.id === request.params.id);
    if (todo) {
      const { title, desc, completed } = request.body;
      todo.title = title;
      todo.desc = desc;
      todo.completed = completed;
      response.status(200).json({ msg: "Todo updated sucessfully" });
      return;
    }
    response.status(404).json({ msg: "Todo not found" });
  })

  app.delete("/todoList/:id", (request, response) => {
    const todoIndex = todoList.findIndex((todo) => (todo.id = request.params.id));
    if (todoIndex) {
      todoList.splice(todoIndex, 1);
      response.status(200).json({ msg: "Todo deleted successfully" });
    }
    response.status(404).json({ msg: "Todo not found" });
  });

  //This Endppoint ends here


// App listens to incoming requests here
app.listen(port, () => {
  console.log(`server running on at http://localhost:${port}`);
});
  
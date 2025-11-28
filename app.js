//   https://chatgpt.com/c/691117cf-2ec4-8320-8a06-9d54187b0a9b

const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send({ "message": "Habit Tracker API is running" })
});

let habits = ["drink water","code for 1hr"]
let nextId = 1;
habits=habits.map(hab => ({ id: nextId++, name: hab, completed: false }))

app.get('/habits',(req,res)=>{
    res.send(habits);
})

app.post('/habits',(req,res)=>{
   let name = req.body.name;
   let newHabit={ id: nextId++, name: name, completed: false }
    habits.push(newHabit)
    res.json({
        'msg':'done adding new habit'
    })
})

app.put('/habits/:id/complete',(req,res) =>{
    let completedID = Number(req.params.id);
    let found = habits.find(x=> x.id === completedID);
    if (!found) return res.status(404).json({ msg: 'habit not found' });
    else{
        found.completed = true;
        res.json(found);
    }
})

app.delete('/habits/:id', (req, res) => {
    const id = Number(req.params.id);
    const idx = habits.findIndex(h => h.id === id);
    if (idx === -1) {
        return res.status(404).json({ msg: 'habit not found' });
    }
    habits.splice(idx, 1);
    res.json({ msg: "habit deleted" });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

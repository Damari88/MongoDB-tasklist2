const express = require ("express");
const app = express(app);
const PORT = 4001;
const data = require("./data.js"); 

let ListaTareas = [
    {id: "1", nombre: "React", estado: "realizada", fechaeEntrega:20/10, module:2},
    {id: "2", nombre: "JS", estado: "en proceso", fechaeEntrega:14/6, module:1},
    {id: "3", nombre: "CSS", estado: "terminada", fechaeEntrega:20/11, module:3},
    {id: "4", nombre: "Ingles", estado: "terminada", fechaeEntrega:25/10, module:4},
    {id: "3", nombre: "Math", estado: "en proceso", fechaeEntrega:21/12, module:5},
    {id: "6", nombre: "Nodejs",  estado:"terminada",fechaEntrega: 15/10, modulo: 6}
];

app.use(express.json());

app.get("/ListaTareas",(req,res) => {
    res.status(200).json(ListaTareas)
});

app.get("/ListaTareas/:id",(req,res) => {
    const idListaTareas = req.parans.id;
    const Tareas = ListaTareas.find((iten)  => iten.id === idListaTareas);
    if(!ListaTareas){
        return res.status(404).send("<h1>Tarea no encontrada</h1>")
    }
    res.status(200).json(ListaTareas);
});


app.post("/ListaTareas",(req,res) => {
    const idListaTareas = req.body;
    //console.log(ListaTareas);
    ListaTareas.puch(ListaTareas);
     res.status(201).json({mensaje: "se agrego una tarea"});
});


app.put("/ListaTareas/:id", (req, res) => {
    const idListaTareas = req.params.id;
    const TareasIndex = ListaTareas.findIndex((iten) => iten.id === idListaTareas);
    console.log(TareasIndex)

    if(TareasIndex === 1){
        return res.status(404).send("<h1>Tarea no encontrada</h1>")
    }
     
    const nuevaTarea = req.body
    ListaTareas[TareasIndex] = { ...ListaTareas[TareasIndex], ...nuevaTarea};

     req.json(ListaTareas [TareasIndex]);
})




app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`);
  });
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Grupo-19:grupo19@cursadanodejs.ls9ii.mongodb.net/Node-js"
  )
  .then(() => console.log("Conexion exitosa a MongoDB"))
  .catch((error) => console.error("Error al conectar a MongoDB", error));

const supeherorSchema = new mongoose.Schema(
  {
    nombreSuperheroe: { type: String, require: true },
    nombreReal: { type: String, require: true },
    nombreSociedad: String,
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: "Desconocido" },
    debilidad: String,
    poder: [String],
    habilidadEspecial: String,
    aliado: [String],
    enemigo: [String],
    createdAt: { type: Date, default: Date.now },
    creador: String,
  },
  { collection: "Grupo-19" }
);

const SuperHero = mongoose.model("SuperHero", supeherorSchema);

async function insertSuperHero() {

  const hero = new SuperHero({
    nombreSuperheroe: 'Wolverine',
    nombreReal: 'Logan',
    nombreSociedad: 'Mutante',
    edad: 197,
    planetaOrigen: 'Tierra',
    debilidad: 'Magnetismo',
    poder: [
      'Factor Sanacion',
      'Garras de adamantium',
      'Fuerza sobrehumana',
      'Sentidos mejorados'
    ],
    habilidadEspecial: 'Esqueleto de adamantium',
    aliado: ['Spiderman', 'Capitan America'],
    enemigo: ['Magneto'],
    creador: 'Emiliano Olivera Herrera'
  });

  await hero.save();
  console.log('Superhéroe insertado:', hero);
}

insertSuperHero();

/* async function updateSuperHero(nombreSuperheroe) {
    const result = await SuperHero.updateOne(
        { nombreSuperheroe: nombreSuperheroe },
        { $set: { edad: 33 } } 
    );
    console.log('Resultado de la actualización:', result);
}

updateSuperHero('Wolverine'); */


/* async function deleteSuperHero(nombreSuperheroe) {
    const result = await SuperHero.deleteOne({ nombreSuperheroe: nombreSuperheroe });
    console.log('Superhéroe eliminado:', result);
}

deleteSuperHero('Wolverine'); */


/* async function findSuperHeroes() {
    const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
    console.log('Superhéroes encontrados', heroes);
}

findSuperHeroes(); */
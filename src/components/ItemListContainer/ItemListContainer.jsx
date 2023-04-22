import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

//Consulta los productos de la base de datos y se los envia a ItemList
/* const BDD = [
  {"item":1494086, "id": "1494086M", "category": "bicicletas", "type": "MTB", "categoryId": 1, "brand": "Kona", "model": "Honzo SE", "color": "brown", "size": "M", "wheelSize":29, "price":1499, "stock":10, "img": "/img/catalogue/kona-honzo-se-charcoal-turquoise-2.jpg", "description": "La Honzo fue la primera bicicleta rígida de baja altura y preparada para el trail. Su geometría progresiva sería revisada a lo largo de los años, pero su actitud lúdica no ha cambiado nada. Es la 29er que no se siente como una 29er, la amiga de confianza que siempre está lista para la fiesta y que te acompañará en las buenas y en las malas."},
  {"item":1704293, "id": "1704293M", "category": "bicicletas", "type": "MTB", "categoryId": 1, "brand": "Serious", "model": "Rockville", "color": "green", "size": "M", "wheelSize":27.5, "price":419, "stock":8, "img": "/img/catalogue/serious-rockville-275-green-blue-2.jpg", "description": "La deportiva Rockville en la versión de 27,5 es una verdadera recomendación para iniciarse o cambiar a una bicicleta de montaña. El ligero cuadro de aluminio no sólo tiene un equipamiento equilibrado que ofrece la comodidad necesaria para el inicio, sino que también se adorna con un diseño acertado, deportivo y a la vez intemporal. La Rockville es una bicicleta de montaña para el ocio y el día a día que no sólo destaca por su favorable relación precio/prestaciones, sino que también convence por su calidad y confort a largo plazo e impresiona por su versatilidad tanto en el uso off-road como en la ciudad."},
  {"item":1704296, "id": "1704296M", "category": "bicicletas", "type": "MTB", "categoryId": 1, "brand": "Serious", "model": "Rockville", "color": "orange", "size": "M", "wheelSize":27.5, "price":419, "stock":0, "img": "/img/catalogue/serious-rockville-275-race-fire-2.jpg", "description": "La deportiva Rockville en la versión de 27,5 es una verdadera recomendación para iniciarse o cambiar a una bicicleta de montaña. El ligero cuadro de aluminio no sólo tiene un equipamiento equilibrado que ofrece la comodidad necesaria para el inicio, sino que también se adorna con un diseño acertado, deportivo y a la vez intemporal. La Rockville es una bicicleta de montaña para el ocio y el día a día que no sólo destaca por su favorable relación precio/prestaciones, sino que también convence por su calidad y confort a largo plazo e impresiona por su versatilidad tanto en el uso off-road como en la ciudad."},
  {"item":1287883, "id": "1287883M", "category": "bicicletas", "type": "MTB", "categoryId": 1, "brand": "GT Bicycles", "model": "Avalanche Expert", "color": "black", "size": "M", "wheelSize":29, "price":1299, "stock":5, "img": "/img/catalogue/gt-bicycles-avalanche-expert-satin-black-7.jpg", "description": "Para el aspirante a ciclista de montaña que quiere una conducción de confianza, el modelo superior de GT Avalanche cuenta con una horquilla de suspensión RockShox Recon RL y una transmisión SRAM SX de 12 velocidades que le ofrece un gran comienzo que se adaptará a sus habilidades.El marco de aleación ligera completamente rediseñado proporciona un nuevo estilo y elegancia, el tendido de cables internos asegura una apariencia clara y los nuevos asientos flotantes proporcionan flexibilidad y comodidad adicionales."},
  {"item":1491677, "id": "1491677M", "category": "bicicletas", "type": "MTB", "categoryId": 1, "brand": "Orbea", "model": "Laufey H10", "color": "grey", "size": "M", "wheelSize":29, "price":1899, "stock":2, "img": "/img/catalogue/orbea-laufey-h10-raw-aluminum-1.jpg", "description": "Con la Laufey, Orbea presenta su bicicleta más versátil y dinámica. Esta bicicleta no está hecha para un tipo específico de ciclista, esta bicicleta es una garantía de diversión para todos los que aman el ciclismo de montaña. Es una moto trail en busca de nuevos terrenos de caza. Puede ser tu primera o tu nueva moto, es adecuada tanto para principiantes como para pilotos experimentados. Tiene un precio justo y asequible, pero causa impresión en cualquier colección exclusiva. El Laufey allana el camino a la diversión."},
  {"item":1506545, "id": "1506545M", "category": "bicicletas", "type": "MTB", "categoryId": 1, "brand": "Marin", "model": "Bobcat Trail 3", "color": "blue", "size": "M", "wheelSize":29, "price":799, "stock":10, "img": "/img/catalogue/marin-bobcat-trail-3-blue-11.jpg", "description": "La Bobcat Trail es una bicicleta de alto rendimiento con una geometría moderna para su uso en senderos singletrack. Con el mejor cuadro de su categoría y unas características sólidas, la Bobcat Trail es una buena opción para el principiante relajado en el ciclismo de montaña, y no hará un agujero demasiado profundo en su cartera."},
  {"item":1287745, "id": "1287745M", "category": "bicicletas", "type": "MTB", "categoryId": 1, "brand": "Cannondale", "model": "Trail 8", "color": "black", "size": "M", "wheelSize":29, "price":699, "stock":9, "img": "/img/catalogue/cannondale-trail-8-grey-2.jpg", "description": "Acérquese. Una bicicleta de montaña construida para mejorar tu juego y encender tu pasión por el camino. Diseñado para las montañas y listo para cualquier cosa."},
  {"item":1674170, "id": "1674170M", "category": "bicicletas", "type": "MTB", "categoryId": 1, "brand": "Polygon", "model": "Cascade 4", "color": "green", "size": "M", "wheelSize":27.5, "price":639, "stock":2, "img": "/img/catalogue/polygon-cascade-4-green-2.jpg", "description": "La Cascade 4 se ha desarrollado como una bicicleta versátil para los ciclistas que buscan una bicicleta para ir al trabajo durante la semana y planear paseos de ocio el fin de semana. La Cascade consta de un cuadro ligero y robusto con una geometría moderna para una mayor comodidad de conducción. El equipamiento de los componentes incluye: Ruedas de 27,5 para una menor resistencia a la rodadura, una horquilla de suspensión con 100 mm de recorrido para suavizar los baches cuando se circula por caminos de fuego, y frenos de disco para mantener el control del piloto. El nuevo Cascade 4 es un compañero fiable para la vida cotidiana y el deporte."},
  {"item":1057403, "id": "1057403M", "category": "bicicletas", "type": "Gravel-CX", "categoryId": 2, "brand": "Marin", "model": "Lombard 1", "color": "grey", "size": "M", "wheelSize":29, "price":1199, "stock":5, "img": "/img/catalogue/marin-lombard-1-satin-reflective-charcoal-2.jpg", "description": "La Lombard es su compañera estable y divertida en el duro tráfico diario de la ciudad. Las cubiertas de gran volumen, los componentes extremadamente duraderos y los gráficos reflectantes le ayudan a mantenerse seguro en la jungla urbana. "},
  {"item":1716263, "id": "1716263M", "category": "bicicletas", "type": "Gravel-CX", "categoryId": 2, "brand": "Serious", "model": "Gravix Pro 650B", "color": "black", "size": "M", "wheelSize":27.5, "price":1589, "stock":5, "img": "/img/catalogue/serious-gravix-pro-650b-olive-7.jpg", "description": "En la última edición de la bicicleta de grava Serious Gravix Pro, Serious se pone realmente serio como marca de rendimiento consciente del precio. Las bicicletas de grava están fuera de su infancia. Cada vez son más los aficionados a las bicicletas de carreras y los ciclistas de montaña que descubren la versatilidad de los corredores para hacer kilómetros en carreteras asfaltadas y no asfaltadas."},
  {"item":1736117, "id": "1736117M", "category": "bicicletas", "type": "Gravel-CX", "categoryId": 2, "brand": "Rondo", "model": "Ruut ST 1 Gravel Plus", "color": "green", "size": "M", "wheelSize":28, "price":2999, "stock":7, "img": "/img/catalogue/rondo-ruut-st-1-gravel-plus-green-black-1.jpg", "description": "Una bici para dentro y fuera de la carretera. Para distancias largas y sprints rápidos. No hay temporada baja, se viaja y se entrena cuando y donde se quiere, lejos del tráfico y el smog. La RUUT es la primera bicicleta de grava del mundo con ajuste de geometría variable."},
  {"item":2023158, "id": "2023158M", "category": "bicicletas", "type": "Gravel-CX", "categoryId": 2, "brand": "Ridley Bikes", "model": "Kanzo Apex HDB", "color": "red", "size": "M", "wheelSize":28, "price":1798, "stock":9, "img": "/img/catalogue/ridley-bikes-kanzo-a-apex-1.jpg", "description": "Gravel es el nuevo vecino en el barrio y está creciendo rápidamente en popularidad. ¿Hay mejor combinación que explorar y montar en bicicleta? Ridley hace una bicicleta que hace una excelente combinación. ¿Una coincidencia? No según Ridley. Con esta bicicleta gravel, puedes abordar cualquier terreno a tu propio ritmo."},
  {"item":1849105, "id": "1849105M", "category": "bicicletas", "type": "Road", "categoryId": 3, "brand": "Cube", "model": "Attain Pro", "color": "grey", "size": "M", "wheelSize":28, "price":1149, "stock":3, "img": "/img/catalogue/cube-attain-pro-silvernorange-1.jpg", "description": "Apenas hay frenos que deceleren y detengan una bici de forma más uniforme, segura y controlada que los frenos de disco, incluso en condiciones de humedad. Por eso CUBE también ha equipado a la Attain Pro con un fiable sistema de frenos de disco mecánicos TRP, así como con cambios Sora 2x9 de Shimano de funcionamiento suave. El resultado: un control preciso de la velocidad en cualquier tiempo y condición."},
  {"item":2023107, "id": "2023107M", "category": "bicicletas", "type": "Road", "categoryId": 3, "brand": "Ridley Bikes", "model": "Fenix SLA Disc 105", "color": "black", "size": "M", "wheelSize":28, "price":2159, "stock":0, "img": "/img/catalogue/ridley-bikes-fenix-sla-disc-105.jpg", "description": "Con esta bicicleta de carretera polivalente Fenix SLA Disc, tienes una bicicleta de carreras con un rendimiento cómodo y con capacidad de respuesta que se desliza sobre adoquines, ¡a un precio asequible! Muy pocas bicicletas de carretera de aluminio incluyen tantas características tecnológicas de alta gama como la Fenix SLA Disc. Se beneficia de un tubo diagonal en forma de diamante, un triángulo trasero sólido y una horquilla recta, todas las características de la Fenix SLiC diseñadas para combinar comodidad y potencia."},
  {"item":1674203, "id": "1674203M", "category": "bicicletas", "type": "Road", "categoryId": 3, "brand": "Polygon", "model": "Strattos S5", "color": "white", "size": "M", "wheelSize":28, "price":1299, "stock":5, "img": "/img/catalogue/polygon-strattos-s5-white-2.jpg", "description": "El nuevo Strattos define una nueva forma de experimentar la carretera. El cuadro de aluminio y la horquilla de carbono convierten a la Strattos en tu mejor amiga, siempre lista para rodar contigo, ya sea para recorrer el campo con los amigos o para dar una vuelta a la manzana descargando adrenalina."}
] */



const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()

  //OPCION CON PROMESA
  /* useEffect(() => {
      const promesa = () => new Promise((resolve, reject) => {
        if (true) {
          resolve(BDD)
        }
        reject(`No posee los permisos necesarios`)
      })
  
      promesa()
        .then(productos => {
          const productosDisponibles = productos.filter(prod => prod.stock > 0)
          setProductos(productosDisponibles)
  
          //const items = <ItemList productos={productosDisponibles}/> // Envio los productos consultados
          //setProductos(items)
        }
        )
        .catch(error => console.error(error))
    }, []) */


  //OPCION CON FETCH
  useEffect(() => {

    if (categoryId) { //Consulto si me ingresaron un parametro en la URL
      fetch('../json/catalogue.json')
        .then(response => response.json())
        .then(productos => {
          const productosDisponibles = productos.filter(prod => prod.stock > 0).filter(prod => prod.categoryId === parseInt(categoryId))
          setProductos(productosDisponibles)
        })
    } else {
      fetch('./json/catalogue.json')
        .then(response => response.json())
        .then(productos => {
          const productosDisponibles = productos.filter(prod => prod.stock > 0)
          setProductos(productosDisponibles)
        })
    }


  }, [categoryId])



  return (
    <div id='itemListContainer'>
      <div className='row d-flex justify-content-around'>
        {<ItemList productos={productos} />}
      </div>
    </div>
  );
}

export default ItemListContainer;

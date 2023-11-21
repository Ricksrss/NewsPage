import Noticia from "../../../components/Noticia";

const noticias = [
  {
    id: 1,
    img: "http://via.placeholder.com/150",
    texto: "Texto da <b>noticia 1</b>",
  },
  {
    id: 2,
    img: "http://via.placeholder.com/150",
    texto: "Texto da <b>noticia 2</b>",
  },
  {
    id: 3,
    img: "http://via.placeholder.com/150",
    texto: "Texto da <b>noticia 3</b>",
  },
];

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      {noticias.map((noticia) => (
        <Noticia key={noticia.id} noticia={noticia} />
      ))}
    </div>
  );
};

export default HomePage;

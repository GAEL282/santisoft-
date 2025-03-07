import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";

const Trainings = () => {
  return (
    <>
      <Header />
      <div className="content">
        <h1>Our Trainings</h1>
        <div className="card-container">
          <Card image="/assets/training1.png" title="Web Development" description="Learn modern web technologies." />
          <Card image="/assets/training2.png" title="Graphic Design" description="Master Photoshop and Illustrator." />
          <Card image="/assets/training3.png" title="Digital Marketing" description="Become an online marketing expert." />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trainings;

import "./topics.css"; // Make sure to create this CSS file

const topics = [
  { title: "learn more about our product ", img: "images/download.jpeg" },
  { title: "what product do we have to offer ", img: "images/download.jpeg" },
  { title: "where to get and how to use our products ", img: "images/download.jpeg" },
  { title: "learn more about our product ", img: "images/images.png" },
  { title: "what product do we have to offer", img: "images/images.png" },
  { title: "where to get and how to use our products", img: "images/images.png" },
  { title: "what product do we have to offer", img: "images/type.jpg" },
  { title: "what product do we have to offer", img: "images/type.jpg" },
  { title: "where to get and how to use our products", img: "images/type.jpg  " },
];

const TopicsSection = () => {
  return (
    <div className="topics-section">
      <p>Thanks to the European leader in </p>
      <p>distance learning</p>
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div key={index} className="topic-card" style={{ backgroundImage: `url(${topic.img})` }}>
            <div className="topic-overlay">
              <p>{topic.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsSection;

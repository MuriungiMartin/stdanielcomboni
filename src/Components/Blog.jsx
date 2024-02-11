import { useState, useEffect } from "react";

const Blog = () => {
  // const articles = [
  //     {
  //       id: 1,
  //       title: 'The Importance of the Sacraments',
  //       content: 'Explore the significance of the sacraments in the Roman Catholic Church.',
  //       imgSrc: "./1.jpg",
  //     },
  //     {
  //       id: 2,
  //       title: 'Pope Francis: A Modern Shepherd',
  //       content: 'Learn about the life and teachings of Pope Francis, the current Pope.',
  //       imgSrc: "./2.jpeg",
  //     },
  //     {
  //       id: 3,
  //       title: 'Catholic Liturgical Calendar Explained',
  //       content: 'Discover the liturgical seasons and celebrations in the Catholic Church.',
  //       imgSrc: "./3.jpeg",
  //     },
  //     {
  //       id: 4,
  //       title: 'The Role of Saints in Catholic Faith',
  //       content: 'Delve into the veneration of saints and their importance in Catholicism.',
  //       imgSrc: "./4.jpeg",
  //     },
  //     {
  //       id: 5,
  //       title: 'Vatican City: Heart of the Catholic Church',
  //       content: 'Explore the history and significance of Vatican City, the smallest independent state in the world.',
  //       imgSrc: "./5.jpg",
  //     },
  //     {
  //       id: 6,
  //       title: 'Catholic Social Teaching Principles',
  //       content: 'Understand the principles of Catholic Social Teaching and their impact on social justice.',
  //       imgSrc: "./6.jpg",
  //     },
  //     {
  //       id: 7,
  //       title: 'The Eucharist: Source and Summit of Catholic Life',
  //       content: 'Reflect on the central role of the Eucharist in Catholic worship and spirituality.',
  //       imgSrc: "./4.jpeg",
  //     },
  //     {
  //       id: 8,
  //       title: 'Mary, Mother of Jesus: A Marian Devotion',
  //       content: 'Learn about the significance of Mary, the mother of Jesus, in Catholic devotion.',
  //       imgSrc: "./5.jpg",
  //     },
  //     {
  //       id: 9,
  //       title: 'Catholic Education: Nurturing Faith and Knowledge',
  //       content: 'Explore the importance of Catholic education in fostering both faith and knowledge. Catholic education is a large part of the Catholic Church\'s mission to evangelize and teach the faith. Catholic schools are a vital part of the Church\'s efforts to achieve this mission. The Catholic Church is the largest non-governmental provider of education and health care in the world. In the United States, there are over 6,000 Catholic schools, educating over 1.8 million students. In addition, there are over 200 Catholic colleges and universities in the United States, educating over 800,000 students. Catholic education is a large part of the Catholic Church\'s mission to evangelize and teach the faith. Catholic schools are a vital part of the Church\'s efforts to achieve this mission. The Catholic Church is the largest non-governmental provider of education and health care in the world. In the United States, there are over 6,000 Catholic schools, educating over 1.8 million students.',
  //       imgSrc: "./6.jpg",
  //     },
  //   ];

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  // Sort articles in descending order by id
  const sortedArticles = [...articles].sort((a, b) => b.id - a.id);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedArticles, setExpandedArticles] = useState([]);

  const toggleArticle = (id) => {
    const isExpanded = expandedArticles.includes(id);
    if (isExpanded) {
      setExpandedArticles(
        expandedArticles.filter((articleId) => articleId !== id)
      );
    } else {
      setExpandedArticles([...expandedArticles, id]);
    }
  };
  // Get the current set of articles to display
  const displayedArticles = sortedArticles.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <div className="container mx-auto lg:pt-16 md:pt-8 sm:pt-16">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 lg:pt-16 md:pt-8 sm:pt-16">
          Read Our Articles
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-16">
        {displayedArticles.map((article) => (
          <div key={article.id} className="bg-white p-4 shadow-md">
            <div className="flex justify-center pb-8">
              <img /* src={article.imgSrc} */ src="./4.jpeg" alt="Article" className="h-40 w-fit" />
            </div>
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            {expandedArticles.includes(article.id) ? (
              <p>{article.content}</p>
            ) : (
              <p>{article.content.substring(0, 100)}...</p> // Display only the first 100 characters
            )}
            <button onClick={() => toggleArticle(article.id)}>
              {expandedArticles.includes(article.id)
                ? "Show Less"
                : "Read More"}
            </button>
          </div>
        ))}
      </div>
      <div className="p-4">
        {sortedArticles.length > 0 && (
          <div className="flex justify-between mb-4">
            {currentIndex > 0 && (
              <button
                className="bg-gradient-to-br  from-purple-600  to-purple-200 hover:bg-gradient-to-bl hover:from-purple-200  hover:to-purple-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setCurrentIndex(currentIndex - 3)}
              >
                Previous
              </button>
            )}
            {currentIndex < sortedArticles.length - 3 && (
              <button
                className="bg-gradient-to-br  from-purple-600 to-purple-200 hover:from-purple-200  hover:to-purple-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setCurrentIndex(currentIndex + 3)}
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;

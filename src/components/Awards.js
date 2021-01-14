import { useState } from "react";
const Home = () => {
  // set state hook
  const [award, setAward] = useState("Award");
  const [categories, setCategories] = useState([]);

  // functions which set the state of variable to new value
  const handleClickEffectiveness = () => {
    setAward("WARC Effectiveness Awards");
    setCategories([
      "Customer Experience",
      "Collaboration & Culture",
      "Sustained Growth",
      "Instant Impact",
      "Brand Purpose",
      "Business-to-Business",
    ]);
  };
  const handleClickMena = () => {
    setAward("WARC Prize for MENA Strategy");
    setCategories(["None"]);
  };
  const handleClickAsia = () => {
    setAward("WARC Prize for Asian Strategy");
    setCategories(["None"]);
  };
  const handleClickMedia = () => {
    setAward("WARC Media Awards");
    setCategories([
      "Effective Channel Integration",
      "Effective Content Strategy",
      "Effective Social Strategy",
      "Best Use of Partnerships & Sponsorships",
    ]);
  };

  // const handleClickAgain = (name, e) => {
  //     console.log("hello there " + name, e.target)
  // }

  return (
    <div className="awards">
      <h2>{award}</h2>
      <ul>
        {categories.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
      <button onClick={handleClickEffectiveness}>Effectiveness</button>
      <button onClick={handleClickMena}>MENA</button>
      <button onClick={handleClickAsia}>Asia</button>
      <button onClick={handleClickMedia}>Media</button>
      {/* <button onClick={(e) => handleClickAgain('Aron', e)}> Click me again</button> */}
    </div>
  );
};

export default Home;

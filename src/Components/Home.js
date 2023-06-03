import React from "react";
import women_gym_home from "../Image/gym_home.png";
import men_gym_home from "../Image/men_gym_home.png";
import moment from "moment";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";
import ExtraExercises from "./Extra";

function Home() {
  document.title = "The GYM Daily Exercise";
  const currentDay = moment().format("dddd");

  const renderComponentByDay = () => {
    switch (currentDay) {
      case "Monday":
        return <Monday />;
      case "Tuesday":
        return <Tuesday />;
      case "Wednesday":
        return <Wednesday />;
      case "Thursday":
        return <Thursday />;
      case "Friday":
        return <Friday />;
      case "Saturday":
        return <Saturday />;
      case "Sunday":
        return <Sunday />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="home_page">
        <img src={women_gym_home} alt="Women at gym" />
        <img src={men_gym_home} alt="Men at gym" />
      </div>
      {renderComponentByDay()}
      <React.Fragment>
        <ExtraExercises />
      </React.Fragment>
    </>
  );
}

export default Home;

import React, { Component, useEffect, useState } from "react";
import "../images/cv2.png";
import Upload from "./costumupload";
import Upload1 from "./fileupload";
import PrevEdu from "./preview_componets/prewiev_edu";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { secondsToMilliseconds } from "date-fns";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const styles = {
  logo: {
    width: 66,
    height: 58,
  },
  bigBox: {
    backgroundColor: "rgb(44, 46, 46)",
  },
  h1: {
    fontSize: "15px",
    alignSelf: "center",
    alignItems: "center",
  },
  edu: {
    fontSize: "15px",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 100,
  },
};
const EducationFactory = (level, institiution, inroll, year, major) => {
  return {
    level: level,
    institution: institiution,
    inroll: inroll,
    year: year,
    major: major,
    id: uniqid(),
  };
};
const EmploymentFactory = (company, position, start, end) => {
  return {
    company: company,
    position: position,
    start: start,
    end: end,
    id: uniqid(),
  };
};
const LanguageFactory = (language, level) => {
  return {
    language: language,
    level: level,
    id: uniqid(),
  };
};
const submitted = new Event("submitted");
const submitted2 = new Event("submitted2");
const submitted3 = new Event("submitted3");
const Preview = (props) => {
  // const [logo, setLogo]=useState();
  // const [personal, setPersonal]=useState();
  // const [ education, setEducation]=useState();
  // const [ employment, setEmployment]=useState();
  // const [projects, serProjects]=useState();
  // const const [Languages, serLanguages]=useState(); [volounteer, serVolounteer]=useState();

  const [education, setEducation] = useState([]);
  const [employment, setEmployment] = useState([]);
  const [languages, setLanguage] = useState([]);
  const [logo, setLogo] = useState("./cv1.png");

  //     const WhenSubmitted=()=>{
  //         console.log(education);
  //         const newObj=EducationFactory(props.level, props.institiution, props.inroll, props.year, props.major);
  //         setEducation(prevState => {
  //             return  [...prevState, newObj  ]
  //           });
  //           console.log(education);
  //     }

  //    useEffect(()=>{
  //        setSubmitE(true);
  //    },[props.submitted])
  useEffect(() => {
    setLogo(props.style);
  }, [props.style]);
  useEffect(() => {
    console.log(education);
    const newObj = EducationFactory(
      props.level,
      props.institiution,
      props.inroll,
      props.year,
      props.major
    );

    if (newObj.level === undefined) {
      console.log("1");
    }
    //    if(education.length>0 && newObj.major===education[education.length-1].major){
    //        console.log('2')
    //    }
    else {
      if (
        education.length > 0 &&
        newObj.major === education[education.length - 1].major
      ) {
        console.log("2");
      } else {
        setEducation((prevState) => {
          return [...prevState, newObj];
        });
      }
    }

    document.dispatchEvent(submitted);
    console.log(education);
  }, [props.submitted]);
  useEffect(() => {
    const newObj = LanguageFactory(props.language, props.lang_level);

    if (newObj.level === undefined) {
      console.log("1");
    } else {
      if (
        languages.length > 0 &&
        newObj.language === languages[languages.length - 1].language
      ) {
        console.log("2");
      } else {
        setLanguage((prevState) => {
          return [...prevState, newObj];
        });
      }
    }

    document.dispatchEvent(submitted3);
  }, [props.submitted3]);

  const handleChange = () => {
    props.whenSubmitted(false);
  };
  const handleChange2 = () => {
    props.whenSubmitted2(false);
  };
  const handleChange3 = () => {
    props.whenSubmitted3(false);
  };
  document.addEventListener("submitted", handleChange);
  document.addEventListener("submitted2", handleChange2);
  document.addEventListener("submitted3", handleChange3);

  useEffect(() => {
    const newEmpl = EmploymentFactory(
      props.company,
      props.position,
      props.date_start,
      props.date_end
    );
    if (newEmpl.company === undefined) {
      console.log(1);
    } else {
      if (
        employment.length > 0 &&
        newEmpl.company === employment[employment.length - 1].company &&
        newEmpl.position === employment[employment.length - 1].position
      ) {
        console.log(2);
      } else {
        setEmployment((prevState) => {
          return [...prevState, newEmpl];
        });
      }
    }
    document.dispatchEvent(submitted2);
    console.log(employment);
  }, [props.submitted2]);
  const Delete = (ev) => {
    console.log(education);
    const found = education.findIndex((edu) => edu.id == ev.target.id);
    if (found !== -1) {
      setEducation(education.filter((element) => element.id !== ev.target.id));
    }
    const found2 = employment.findIndex((edu) => edu.id == ev.target.id);
    if (found2 !== -1) {
      setEmployment(
        employment.filter((element) => element.id !== ev.target.id)
      );
    }
    const found3 = languages.findIndex((edu) => edu.id == ev.target.id);
    if (found3 !== -1) {
      setLanguage(languages.filter((element) => element.id !== ev.target.id));
    }
    console.log(education);
  };
  Component.defaultProps = {};

  return (
    <div className="preview-box" style={styles.bigBox} id="box">
      <div className="white-box">
        <nav className="prev-header">
          <Upload1 />
          <div className="prev-header-small">
            <img
              style={styles.logo}
              src={process.env.PUBLIC_URL + `/${props.style}`}
              crossOrigin="anonymous"
            />
            <div className="personal">
              <h2 name="name">
                {props.name} {props.surname}
              </h2>
              <h2 name="email">{props.email}</h2>
              <h2 name="number">{props.number}</h2>
              <h2 name="city">{props.city}</h2>
            </div>
          </div>
        </nav>
        <h1 style={styles.edu}> Education </h1>
        <div className="prev-item">
          {education.map((obj) => {
            return (
              <div className="div-item" key={obj.id}>
                <h2 className="div-heading" name="edu-level">
                  {obj.level}
                </h2>
                <h2 name="institiution">{obj.institution}</h2>
                <h2 name="major">{obj.major}</h2>
                <h2 className="date" name="year">
                  {obj.inroll} - {obj.year}
                </h2>

                <img
                  className="del-icon"
                  id={obj.id}
                  onClick={Delete}
                  style={styles.icon}
                  src={process.env.PUBLIC_URL + "./trash.svg"}
                />
              </div>
            );
          })}

          <PrevEdu
            level={props.level}
            institiution={props.institiution}
            inroll={props.inroll}
            year={props.year}
            major={props.major}
          />
        </div>
        <h1 style={styles.h1}> Previous Employment</h1>
        <div className="prev-item">
          {employment.map((obj) => {
            return (
              <div className="div-item" key={obj.id}>
                <h2 className="div-heading">{obj.company}</h2>
                <h2 name="institiution">{obj.position}</h2>
                <h2 className="date">
                  {obj.start} - {obj.end}
                </h2>

                <FontAwesomeIcon
                  id={obj.id}
                  onClick={Delete}
                  icon="fa-solid fa-circle-trash"
                />
              </div>
            );
          })}
          <div className="div-item">
            <h2 className="div-heading">{props.company}</h2>
            <h2 name="position">{props.position}</h2>
            <h2 className="date">
              {props.date_start} - {props.date_end}
            </h2>
          </div>
        </div>
        <h1 style={styles.h1}> Languages</h1>
        <div className="prev-item">
          {languages.map((obj) => {
            return (
              <div className="div-item" key={obj.id}>
                <h2 className="div-heading">{obj.language}</h2>
                <h2 name="institiution">{obj.level}</h2>
                <button id={obj.id} onClick={Delete}>
                  {" "}
                  DELETE
                </button>
              </div>
            );
          })}
          <div className="div-item">
            <h2 className="div-heading">{props.language}</h2>
            <h2 name="lang_level">{props.lang_level}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preview;

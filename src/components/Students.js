import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Students() {
  const { students, dispatch } = useContext(StudentContext);
  return (
    <div className="mag">
      {students.map((student) => (
        <div className="ex">
          
          <h2>Name: {student.name}</h2>
          <h3>Level: {student.level}</h3>
          <h3>Date: {student.date}</h3>
          <h4>IndexNo: {student.indexNo}</h4>
          <button onClick={() => dispatch({ type: "DELETE", indexNo: student.indexNo }) } >DELETE </button>
           </div>))}
    </div>
  );
}

export default Students;
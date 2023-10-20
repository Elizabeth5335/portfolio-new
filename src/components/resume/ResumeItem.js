import { nanoid } from "nanoid";

export default function ResumeItem(props) {
  return (
    <>
      <div className="resume-item">
        {props.h4 && <h4>{props.h4}</h4>}
        {props.h5 && <h5>{props.h5}</h5>}

        {props.em && (
          <p>
            <em>{props.em}</em>
          </p>
        )}
        {props.list && (
          <div>
            <ul>
              {props.list.map((item) => (
                <li key={nanoid()}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

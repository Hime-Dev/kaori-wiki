import { ReactElement, useState } from "react";
import "./Switch.css";

interface CheckboxProps {
  checkedComponent: (props: {}) => ReactElement;
  uncheckedComponent: (props: {}) => ReactElement;
}

export default function Checkbox(props: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <input checked={checked} type="checkbox" style={{ appearance: "none" }} />
      <div onClick={() => setChecked(!checked)} className="checkbox-button">
        <ToggleState
          trueComponent={<props.checkedComponent />}
          falseComponent={<props.uncheckedComponent />}
          state={checked}
        />
      </div>
    </>
  );
}

interface ToggleStateProps {
  trueComponent: ReactElement;
  falseComponent: ReactElement;
  state: boolean;
}

function ToggleState(props: ToggleStateProps) {
  return (
    <div className="centered-parent">
      <div className="centered-child" style={{ opacity: props.state ? 1 : 0 }}>
        {props.trueComponent}
      </div>
      <div className="centered-child" style={{ opacity: props.state ? 0 : 1 }}>
        {props.falseComponent}
      </div>
    </div>
  );
}

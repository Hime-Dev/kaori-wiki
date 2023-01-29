import { ReactChild, useRef, useState, useEffect } from "react";
import "./ResizableWrapper.css";

interface Coords {
  x: number | undefined;
  y: number | undefined;
}

export default function ResizableWrapper(props: ResizableWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<Coords>({
    x: props.initialWidth,
    y: props.initialHeight,
  });

  useEffect(() => {
    if (!ref.current) return;
    const curNode = ref.current;
    const resizeObserver = new ResizeObserver((entries) =>
      setSize({
        x: Math.round(entries[0].contentRect.width),
        y: Math.round(entries[0].contentRect.height),
      })
    );

    resizeObserver.observe(curNode);

    return () => {
      resizeObserver.unobserve(curNode);
    };
  }, []);

  return (
    <div className="parent-container">
      <div
        ref={ref}
        style={{
          ...props.style,
          width: props.initialWidth,
          height: props.initialHeight,
          overflow: "hidden",
          resize: "both",
        }}
      >
        {props.children}
      </div>
      <div className="text-parent-container">
        <div className="frame-48095822-frame-48095823x">
          <span className="text-style">
            {`${size.x ?? 0} × ${size.y ?? 0}`}
          </span>
        </div>
      </div>
    </div>
  );
}

ResizableWrapper.defaultProps = {
  style: {},
};

interface ResizableWrapperProps {
  style: Object;
  initialWidth?: number;
  initialHeight?: number;
  children: ReactChild;
}

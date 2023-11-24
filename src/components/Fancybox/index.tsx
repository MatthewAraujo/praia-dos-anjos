import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { ComponentProps, ReactNode, useEffect, useRef } from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface FancyBoxProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export function Fancybox({ children, ...props }: FancyBoxProps) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    NativeFancybox.bind(container, "[data-fancybox]");

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return (
    <div {...props} ref={containerRef}>
      {children}
    </div>
  );
}

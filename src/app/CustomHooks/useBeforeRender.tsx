import { useState } from "react";

export default function useBeforeRender(func: () => void) {
  const [run, setRun] = useState(true);

  if (run) {
    func();
    setRun(false);
  }
}

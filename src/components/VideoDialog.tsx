import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import YouTube from "react-youtube";

export default function VideoPopup() {
  const [show, setShow] = useState(false);

  const opts = {
    width: "640",
    height: "390",
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };

  return (
    <div>
      <button onClick={() => setShow(true)}>▶ Play Video</button>
      {show && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setShow(false)}
        >
          <YouTube videoId="M7lc1UVf-VE" opts={opts} />
        </div>
      )}
    </div>
  );
}

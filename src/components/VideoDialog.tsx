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

interface VideoDialogProps {
  trigger?: React.ReactNode;
  videoId?: string;
}

const VideoDialog = ({ trigger, videoId = "-q8ukThQ-ng" }: VideoDialogProps) => {
  const [open, setOpen] = useState(false);
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (<div className="pt-4">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-q8ukThQ-ng"  allow="autoplay; encrypted-media" allowFullScreen style={{ border: 0 }}/>
  </div>     
  );
};

export default VideoDialog;

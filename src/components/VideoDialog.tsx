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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
            Watch Demo
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl w-full" >
        <DialogHeader>
          <DialogTitle>Watch Demo</DialogTitle>
          <DialogDescription>Preview the product demo.</DialogDescription>
        </DialogHeader>
        <div className="pt-4">
          <AspectRatio ratio={16 / 9}>
            <iframe
              src={videoUrl}
              title="Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-md"
            />
          </AspectRatio>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;

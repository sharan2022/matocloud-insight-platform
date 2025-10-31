import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const VideoDialog: React.FC<YouTubeEmbedProps> = ({ videoId, title }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%", // 16:9 aspect ratio
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src={embedUrl}
        title={title || "YouTube video player"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  );
};

export default VideoDialog;

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { AspectRatio } from "@/components/ui/aspect-ratio";

// interface VideoDialogProps {
//   trigger?: React.ReactNode;
//   videoId?: string; // YouTube video id
// }

// const VideoDialog = ({ trigger, videoId = "dQw4w9WgXcQ" }: VideoDialogProps) => {
//   const [open, setOpen] = useState(false);

//   const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         {trigger || (
//           <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
//             Watch Demo
//           </Button>
//         )}
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-3xl w-full">
//         <DialogHeader>
//           <DialogTitle>Watch Demo</DialogTitle>
//           <DialogDescription>Preview the product demo.</DialogDescription>
//         </DialogHeader>

//         <div className="pt-4">
//           <AspectRatio style={{ width: "100%" }}>
//             <iframe
//               src={videoUrl}
//               title="Demo Video"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-full rounded-md"
//             />
//           </AspectRatio>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default VideoDialog;
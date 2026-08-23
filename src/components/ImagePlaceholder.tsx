import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  /** Describe exactly what photo/image should go here, e.g. "Photo of a Sentinel-installed CCTV control room" */
  label: string;
  className?: string;
  /** "box" (default) fills its container as a dashed placeholder. "badge" is a small
   * corner annotation for spots where a full box would break the layout (e.g. a
   * full-bleed hero background that's already covered by a gradient/overlay). */
  variant?: "box" | "badge";
}

/**
 * Stand-in for a real image asset we don't have yet. Renders the "needed" label
 * directly in the UI so it's visible during development and easy to swap out
 * once the real file is supplied - search for ImagePlaceholder to find every
 * pending image across the site.
 */
const ImagePlaceholder = ({ label, className, variant = "box" }: ImagePlaceholderProps) => {
  if (variant === "badge") {
    return (
      <div
        className={cn(
          "absolute z-20 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1.5 text-[11px] font-medium text-white/90",
          className
        )}
      >
        <ImageIcon className="w-3.5 h-3.5 flex-shrink-0" />
        Image needed: {label}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted/40 text-center p-6",
        className
      )}
    >
      <ImageIcon className="w-8 h-8 text-muted-foreground/60" />
      <p className="text-xs font-medium text-muted-foreground max-w-xs">
        Image needed: {label}
      </p>
    </div>
  );
};

export default ImagePlaceholder;

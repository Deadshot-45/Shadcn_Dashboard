import { LoaderIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-16 animate-spin", className)}
      {...props}
    />
  );
}

export function SpinnerCustom() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Spinner />
      <span className="mt-4 animate-pulse">Loading...</span>
    </div>
  );
}
export { Spinner };

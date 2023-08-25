import type { V2_MetaFunction } from "@remix-run/node";
import { cn } from "~/lib/utils";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Swing Strong" },
    { name: "description", content: "Welcome to Swing Strong!" },
  ];
};

export default function Index() {
  return (
    <div className={cn("relative", "flex", "min-h-screen", "flex-col")}>
      <header
        className={cn(
          "sticky",
          "top-0",
          "z-50",
          "w-full",
          "border-b",
          "bg-background/95",
          "backdrop-blur"
        )}
      >
        <div className={cn("container", "flex", "h-14", "items-center")}>
          <div className={cn("mr-4", "hidden", "md:flex")}>
            <a
              href=""
              className={cn(
                "mr-6",
                "text-xl",
                "flex",
                "items-center",
                "space-x-2"
              )}
            >
              <span>💪</span>
              <span className={cn("font-bold", "sm:inline-bloc")}>
                Swing Strong
              </span>
            </a>
          </div>
        </div>
      </header>

      <div className="container">
        <div className={cn("theme-zinc", "w-full")}>
          <section
            className={cn(
              "px-4",
              "pt-8",
              "md:pt-12",
              "pb-4",
              "md:pb-8",
              "lg:pb-1"
            )}
          >
            <h1
              className={cn(
                "text-3xl",
                "font-bold",
                "leading-tight",
                "tracking-tighter",
                "md:text-5xl",
                "lg:leading-[1.1]"
              )}
            >
              Get fit with kettlebells
            </h1>
            <span
              className={cn("text-lg", "text-muted-foreground", "sm:text-x")}
            >
              Learn, track workouts, and gain muscle with kettlebell weight training.
            </span>
          </section>
        </div>
      </div>
    </div>
  );
}

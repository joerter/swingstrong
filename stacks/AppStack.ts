import { RemixSite, StackContext } from "sst/constructs";

export default function AppStack({ stack }: StackContext) {
  const site = new RemixSite(stack, "Site", {
    path: "swingstrong.fitness/",
  });

  stack.addOutputs({
    URL: site.url || "localhost",
  });
}

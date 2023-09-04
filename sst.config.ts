import { SSTConfig } from "sst";
import AppStack from "./stacks/AppStack";

export default {
  config(_input) {
    return {
      name: "swingstrong",
      region: "us-east-2",
      profile: _input.stage === "production" ? "redgreenrefactor-production" : "redgreenrefactor-dev"
    };
  },
  stacks(app) {
    app.stack(AppStack);
  },
} satisfies SSTConfig;

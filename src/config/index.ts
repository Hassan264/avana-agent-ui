import development from "./development";
import production from "./production";
import test from "./test";

export interface Config {
  agentDynamicLevel: {
    port: number;
    endpoint: string;
  };
}

function getConfig(): Config {
  console.log(process.env.NODE_ENV)
  switch (process.env.NODE_ENV) {
    case "production": {
      return production;
    }
    case "test": {
      return test;
    }
    default: {
      return development;
    }
  }
}

const config = getConfig();

export default config;

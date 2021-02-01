import * as T from "tswrap";
import axios, { AxiosRequestConfig } from "axios";
import config from "../../config";

export interface AttributesType {
  name: string;
  creatorId: string;
  description: string;
  status: string;
  upperLevelId: string;
  upperLevelCommission: number;
}

export interface StockistType {
  number: number;
  addingAgents?: boolean;
  purchase?: {
    type: string;
    minimum?: number;
    maximum?: number;
  };
}

export interface AffiliateType {
  number: number;
  commission: {
    type: string;
    basedOn: string;
  };
}

export interface SettingsType {
  stockist?: StockistType;
  affiliate?: AffiliateType;
  dropshipper?: {
    number: number;
  };
}

export interface LevelType {
  attributes: AttributesType;
  settings?: SettingsType
}

export const SubmitLevel = async (data: LevelType) => {
  const axiosRequestConfig: AxiosRequestConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  const response = await T.wrapAxios(
    axios.post(
      `${config.agentDynamicLevel.endpoint}:${config.agentDynamicLevel.port}/api/v1/levels`,
      data,
      axiosRequestConfig
    )
  );

  if (T.isAxiosError(response)) {
    console.log("error:", response.response);
    throw response;
  }
  console.log("response", response.data);
  return response.data;
};

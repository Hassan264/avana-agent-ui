import * as T from 'tswrap'
import axios, { AxiosRequestConfig } from 'axios'
import config from '../../config'

export interface CommissionType {
  data: {
    commissionType: string[]
  }
}

export const getCommissionTypes = async (): Promise<CommissionType> => {
  const axiosRequestConfig: AxiosRequestConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
  }
  
  const response = await T.wrapAxios(axios.get(`${config.agentDynamicLevel.endpoint}:${config.agentDynamicLevel.port}/api/v1/dropdowns/commissions`, axiosRequestConfig))
  
  if (T.isAxiosError(response)) {
    console.log('error', response)
    throw response
  }
  console.log('response', response)
  return response.data as CommissionType
}

export const submitCommission = (CommissionType: string) => {
  console.log(CommissionType)
}


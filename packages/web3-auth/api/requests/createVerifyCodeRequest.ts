import { AxiosRequestConfig } from 'axios'
import { AuthVerifyCodeData } from '../../web3-auth.model'
import { acceptJson } from '../fetch'

export const createVerifyCodeRequest = (apiEndpoint: string, data: AuthVerifyCodeData): AxiosRequestConfig => {
  const { code } = data

  return {
    url: `${apiEndpoint}`,
    method: 'POST',
    headers: { ...acceptJson },
    data: {
      query: `
        mutation VerifyCode($code: String!) {
          verifyCode: verify_code(code: $code) {
            accessToken: access_token
          }
        }
      `,
      variables: {
        code,
      },
    },
  }
}

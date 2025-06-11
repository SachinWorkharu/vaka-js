import { AxiosRequestConfig } from 'axios'
import { AuthWithOtp } from '../../web3-auth.model'
import { acceptJson } from '../fetch'

export const createLoginWithOtpRequest = (apiEndpoint: string, data: AuthWithOtp): AxiosRequestConfig => {
  const { otp, email } = data

  return {
    url: `${apiEndpoint}`,
    method: 'POST',
    headers: { ...acceptJson },
    data: {
      query: `
        mutation LoginOtp($email: String!, $otp: String!) {
          loginOtp: verify_otp(email: $email, otp: $otp) {
            accessToken: access_token, email, stake_address
          }
        }
      `,
      variables: {
        otp,
        email,
      },
    },
  }
}

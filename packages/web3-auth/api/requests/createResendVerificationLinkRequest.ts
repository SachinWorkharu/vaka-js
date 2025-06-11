import { AxiosRequestConfig } from 'axios'
import { AuthResendVerificationLinkData } from '../../web3-auth.model'
import { acceptJson } from '../fetch'

export const createResendVerificationLinkRequest = (
  apiEndpoint: string,
  data: AuthResendVerificationLinkData,
): AxiosRequestConfig => {
  const { email } = data

  return {
    url: `${apiEndpoint}`,
    method: 'POST',
    headers: { ...acceptJson },
    data: {
      query: `
        mutation ResendVerificationLink($email: String!) {
          resendVerificationLink: resend_verification_link(email: $email) {
            status
          }
        }
      `,
      variables: {
        email,
      },
    },
  }
}

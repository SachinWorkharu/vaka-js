import React, { useCallback } from 'react'
import { AuthWithWallet, AuthWithWalletPolicyId } from '@vakaconsulting/common'
import { useWallet } from '@meshsdk/react'
import { Alert, Box, Typography } from '@mui/material'
import { useAuth } from '../../../hooks'
import WalletSignatureForm from '../../Form/forms/WalletSignatureForm'
import { WalletConnector } from '../../Wallet'

function AuthLoginWithWallet() {
  const { connected } = useWallet()
  const { authenticated, loginWithWallet, loginWithWalletPolicyId, error } = useAuth()

  const handleSubmit = useCallback(
    async (data: AuthWithWallet | AuthWithWalletPolicyId) => {
      if ('authType' in data) {
        await loginWithWalletPolicyId(data)
      } else {
        await loginWithWallet(data)
      }
    },
    [loginWithWallet, loginWithWalletPolicyId],
  )

  return (
    <>
      <Box mb={2}>
        <Typography component={'h2'} variant={'h6'} mb={1}>
          Sign in with your dApp Wallet
        </Typography>

        <WalletConnector />

        {connected && (
          <Box mt={5}>
            <WalletSignatureForm onSubmit={handleSubmit} />
          </Box>
        )}
      </Box>

      {authenticated && (
        <Box mt={3}>
          <Alert severity={'success'}>Success!</Alert>
        </Box>
      )}

      {error && (
        <Box mt={3}>
          <Alert severity={'error'}>{error.message}</Alert>
        </Box>
      )}
    </>
  )
}

export default AuthLoginWithWallet

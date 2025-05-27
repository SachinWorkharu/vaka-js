import React from 'react'
import { FieldErrors } from 'react-hook-form'
import { Alert } from '@mui/material'

interface FormErrorNotificationProps {
  errors: FieldErrors
}

function FormErrorsNotification({ errors }: FormErrorNotificationProps) {
  return (
    <Alert severity={'error'} sx={{ mb: 5 }}>
      There are errors in the form. Please correct them before continuing.
      <ul>
        {Object.keys(errors).map((key) => {
          const message = errors?.[key]?.message
          return (
            <li key={key}>
              {typeof message === 'string' || typeof message === 'number'
                ? message
                : message
                ? String(message)
                : 'Unknown error'}
            </li>
          )
        })}
      </ul>
    </Alert>
  )
}

export default FormErrorsNotification

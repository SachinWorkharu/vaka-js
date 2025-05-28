import type { AuthValues } from '@vaka-consulting/common'

export interface LoginFormProps {
  onSubmit: (data: Partial<AuthValues>) => void
}

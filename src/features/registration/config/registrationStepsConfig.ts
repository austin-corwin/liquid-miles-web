import { Confirmation, Payment, Register, Waivers } from '../components/steps'

export enum Steps {
  Register = 'Register',
  Waivers = 'Waivers',
  Pay = 'Pay',
  Confirm = 'Confirmation',
}

export interface RegistrationStep {
  title: string
  path: string
  description?: string
  render: React.FC
}

const registrationStepsConfig: Record<Steps, RegistrationStep> = {
  [Steps.Register]: {
    title: 'Register',
    description: '...',
    path: '/register',
    render: Register,
  },
  [Steps.Waivers]: {
    title: 'Waivers',
    description: '...',
    path: '/register/waivers',
    render: Waivers,
  },
  [Steps.Pay]: {
    title: 'Payment',
    description: '...',
    path: '/register/payment',
    render: Payment,
  },
  [Steps.Confirm]: {
    title: 'Registration Complete',
    description: '',
    path: '/register/confirmation',
    render: Confirmation,
  },
}

export { registrationStepsConfig }

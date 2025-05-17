interface ConfentfulError {
  status: number
  statusText: string
  message: string
  request: unknown
  details: { errors: Record<string, string> }
}

export type { ConfentfulError }

export interface EmailResponse<D = unknown> {
  data: D
  success: boolean
  errors?: unknown | null
}

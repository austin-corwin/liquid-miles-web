export interface ApiResponse<D = unknown> {
  data: D
  success: boolean
  errors?: unknown | null
}

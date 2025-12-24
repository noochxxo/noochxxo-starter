export const MODERATOR_PERMISSIONS = [
  'view_reports',
  'moderate_content',
  'ban_users',
  'delete_content',
  'manage_groups',
  'manage_courses',
  'view_analytics',
  'manage_moderators',
] as const

export type ModeratorPermission = typeof MODERATOR_PERMISSIONS[number]
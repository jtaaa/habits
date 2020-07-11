const colors = {
  primary: '#423EA2',
  link: '#1890ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#e84118',
  heading: '#423EA2',
  text: '#000',
  disabled: '#f5222d',
  border: '#423EA2',
} as const;

export type ThemeColors = typeof colors;

export default colors;

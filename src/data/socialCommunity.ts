import { COLORS } from '@/constants';

// Icon names as strings for mapping
export type IconName = 
  | 'User'
  | 'MessageCircle'
  | 'UserPlus'
  | 'Share2'
  | 'Send'
  | 'Users';

export interface Friend {
  name: string;
  icon: IconName;
  status: 'online' | 'offline';
  streak: number;
}

export interface ChatMessage {
  user: string;
  message: string;
  time: string;
  sent: boolean;
}

export interface InviteMethod {
  label: string;
  icon: IconName;
  color: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: IconName;
  color: string;
}

export const friends: Friend[] = [
  { name: 'Alex', icon: 'User', status: 'online', streak: 12 },
  { name: 'Jordan', icon: 'User', status: 'online', streak: 8 },
  { name: 'Taylor', icon: 'User', status: 'offline', streak: 5 },
  { name: 'Casey', icon: 'User', status: 'online', streak: 15 },
];

export const chatMessages: ChatMessage[] = [
  { user: 'Alex', message: 'Hey! How was your workout today?', time: '10:30 AM', sent: false },
  { user: 'You', message: 'It was great! Just finished a 5K run', time: '10:32 AM', sent: true, icon: 'TrendingUp' },
  { user: 'Alex', message: 'Awesome! I hit the gym this morning', time: '10:35 AM', sent: false, icon: 'Dumbbell' },
  { user: 'You', message: 'Nice! Want to share meal plans?', time: '10:36 AM', sent: true },
];

export const inviteMethods: InviteMethod[] = [
  { label: 'Email', icon: 'Send', color: COLORS.wellness.green },
  { label: 'SMS', icon: 'MessageCircle', color: COLORS.wellness.orange },
  { label: 'Link', icon: 'Share2', color: COLORS.wellness.purple },
  { label: 'Social', icon: 'Users', color: COLORS.wellness.pink },
];

export const stats: Stat[] = [
  { label: 'Friends Invited', value: '8', icon: 'UserPlus', color: COLORS.wellness.purple },
  { label: 'Messages Sent', value: '156', icon: 'MessageCircle', color: COLORS.primary[600] },
];


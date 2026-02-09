'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Users, 
  UserPlus, 
  Share2, 
  Send,
  MoreVertical,
  TrendingUp,
  Sparkles,
  User
} from 'lucide-react';
import { COLORS } from '@/constants';
import { FONTS } from '@/constants';
import useHeaderState from '@/hooks/useHeaderState';
import { friends, chatMessages, inviteMethods, stats, IconName } from '@/data/socialCommunity';

// Icon mapping
const iconMap: Record<IconName, React.ComponentType<any>> = {
  User,
  MessageCircle,
  UserPlus,
  Share2,
  Send,
  Users,
  // Add more icons here if needed
};

const SocialCommunity: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<'chat' | 'invite'>('chat');
  const { isDark } = useHeaderState();

  return (
    <section id="social-community" className="w-full py-16 md:py-20 px-4 md:px-16 relative overflow-hidden" style={{ fontFamily: FONTS.sans }}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontFamily: FONTS.sans }}>
            Connect & Share
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto" style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontFamily: FONTS.sans }}>
            Build your wellness community, share meals, chat with friends, and stay motivated together
          </p>
        </motion.div>

        {/* Feature Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          {[
            { id: 'chat' as const, label: 'Chat', icon: MessageCircle },
            { id: 'invite' as const, label: 'Invite Friends', icon: UserPlus },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFeature === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFeature(tab.id)}
                className="relative px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2"
                style={{
                  fontWeight: FONTS.weights.semibold,
                  backgroundColor: isActive ? COLORS.primary[600] : 'transparent',
                  color: isActive ? COLORS.neutral.white : (isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary),
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary;
                  }
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFeature"
                    className="absolute inset-0 rounded-xl"
                    style={{ backgroundColor: COLORS.primary[600] }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                  />
                )}
                <Icon className="w-5 h-5 relative z-10" style={{ color: isActive ? COLORS.neutral.white : 'inherit' }} />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content Based on Active Tab */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left: Chat / Invite */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {activeFeature === 'chat' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl p-6 shadow-lg h-[500px] flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl" style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes.xl, fontWeight: FONTS.weights.bold }}>Messages</h3>
                  <MoreVertical className="w-5 h-5" style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary }} />
                </div>

                {/* Chat Messages */}
                <div className="flex-1 space-y-4 overflow-y-auto">
                  {chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                          msg.sent ? 'rounded-br-sm' : 'rounded-bl-sm'
                        }`}
                        style={{
                          backgroundColor: msg.sent ? COLORS.primary[600] : (isDark ? `${COLORS.neutral[700]}40` : `${COLORS.neutral[200]}40`),
                          color: msg.sent ? COLORS.neutral.white : (isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain),
                        }}
                      >
                        {!msg.sent && (
                          <div className="mb-1" style={{ color: COLORS.wellness.pink, fontSize: FONTS.sizes.xs, fontWeight: FONTS.weights.semibold }}>
                            {msg.user}
                          </div>
                        )}
                        <p style={{ fontSize: FONTS.sizes.sm }}>{msg.message}</p>
                        <p className="mt-1" style={{ fontSize: FONTS.sizes.xs, 
                          color: msg.sent ? `${COLORS.neutral.white}80` : (isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary)
                        }}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeFeature === 'invite' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl" style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes.xl, fontWeight: FONTS.weights.bold }}>Invite Friends</h3>
                  <UserPlus className="w-5 h-5" style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary }} />
                </div>

                <div className="space-y-4">
                  {/* Invite Methods */}
                  <div className="grid grid-cols-2 gap-4">
                    {inviteMethods.map((method, index) => {
                      const Icon = iconMap[method.icon];
                      return (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-4 rounded-xl shadow-md transition-all duration-300"
                          style={{ backgroundColor: `${method.color}15` }}
                        >
                          <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: method.color }} />
                          <p style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.semibold }}>{method.label}</p>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Referral Link */}
                  <div className="p-4 rounded-xl" style={{ backgroundColor: `${COLORS.primary[600]}10` }}>
                    <p className="mb-2" style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontSize: FONTS.sizes.xs, fontWeight: FONTS.weights.semibold }}>Your Referral Link</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value="wellness.app/invite/abc123"
                        readOnly
                        className="flex-1 px-3 py-2 rounded-lg bg-transparent border"
                        style={{ 
                          borderColor: isDark ? `${COLORS.theme.dark.textMain}10` : `${COLORS.theme.light.textMain}10`,
                          color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain,
                          fontSize: FONTS.sizes.sm
                        }}
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg"
                        style={{ 
                          backgroundColor: COLORS.primary[600],
                          color: COLORS.neutral.white,
                          fontSize: FONTS.sizes.sm,
                          fontWeight: FONTS.weights.semibold
                        }}
                      >
                        Copy
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Stats & Challenges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Friends List */}
            <div className="rounded-xl p-5 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg" style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.bold }}>Friends</h3>
                <span style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontSize: FONTS.sizes.xs }}>{friends.length} online</span>
              </div>
              <div className="space-y-3">
                {friends.map((friend, index) => {
                  const FriendIcon = iconMap[friend.icon];
                  return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${COLORS.primary[600]}15` }}
                        >
                          <FriendIcon className="w-5 h-5" style={{ color: COLORS.primary[600] }} />
                        </div>
                        {friend.status === 'online' && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2"
                            style={{ 
                              backgroundColor: COLORS.wellness.green,
                              borderColor: COLORS.neutral.white 
                            }}
                          />
                        )}
                      </div>
                      <div>
                        <p style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.semibold }}>{friend.name}</p>
                        <p style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontSize: FONTS.sizes.xs }}>{friend.streak} day streak</p>
                      </div>
                    </div>
                    <MessageCircle 
                      className="w-5 h-5 cursor-pointer transition-colors" 
                      style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary }}
                      onMouseEnter={(e) => e.currentTarget.style.color = COLORS.primary.navTextHover}
                      onMouseLeave={(e) => e.currentTarget.style.color = isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary}
                    />
                  </div>
                );
                })}
              </div>
            </div>

            {/* Weekly Challenge */}
            <div className="rounded-xl p-5 shadow-lg"
              style={{ backgroundColor: `${COLORS.wellness.orange}08` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg" style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.bold }}>Weekly Challenge</h3>
                <Sparkles className="w-5 h-5" style={{ color: COLORS.wellness.orange }} />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="mb-2" style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes.sm, fontWeight: FONTS.weights.bold }}>Log 7 Meals This Week</p>
                  <div className="w-full rounded-full h-2 mb-2" style={{ backgroundColor: isDark ? `${COLORS.theme.dark.textMain}10` : `${COLORS.theme.light.textMain}10` }}>
                    <div className="h-full rounded-full" style={{ 
                      width: '57%',
                      backgroundColor: COLORS.wellness.orange 
                    }} />
                  </div>
                  <p style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontSize: FONTS.sizes.xs }}>4 of 7 completed</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="rounded-xl p-5 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg" style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.bold }}>Your Stats</h3>
                <TrendingUp className="w-5 h-5" style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary }} />
              </div>
              <div className="space-y-3">
                {stats.map((stat, index) => {
                  const Icon = iconMap[stat.icon];
                  return (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg"
                      style={{ backgroundColor: `${stat.color}08` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${stat.color}15` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: stat.color }} />
                        </div>
                        <div>
                          <p style={{ color: isDark ? COLORS.theme.dark.textSecondary : COLORS.theme.light.textSecondary, fontSize: FONTS.sizes.xs }}>{stat.label}</p>
                          <p className="text-lg" style={{ color: isDark ? COLORS.theme.dark.textMain : COLORS.theme.light.textMain, fontSize: FONTS.sizes.lg, fontWeight: FONTS.weights.black }}>{stat.value}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialCommunity;



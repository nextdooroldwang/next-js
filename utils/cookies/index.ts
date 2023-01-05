export const reservedKeys = {
  token: "TOKEN",
  fmc: "FMC_TOKEN",
  name: "NAME",
  avatar: "AVATAR",
};

export const reservedChatKeys = (roomId: string, userId: string) =>
  `CHAT-MESSAGE-${roomId}-${userId}`;

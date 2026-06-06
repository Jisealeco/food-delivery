const Notification =
  require("../models/Notification");

const sendNotification =
  async (
    userId,
    title,
    message,
    type = "system"
  ) => {

    await Notification.create({
      user: userId,
      title,
      message,
      type
    });

};

module.exports =
  sendNotification;
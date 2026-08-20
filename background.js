const extensionAPI = typeof browser !== "undefined" ? browser : chrome;

async function checkStreams() {
  const data = await extensionAPI.storage.local.get(["streamers"]);
  const streamers = data.streamers || [];

  if (streamers.length === 0) {
    await extensionAPI.action.setBadgeText({ text: "" });
    return;
  }

  let liveCount = 0;

  for (const username of streamers) {
    try {
      const response = await fetch(`https://kick.com/api/v2/channels/${encodeURIComponent(username)}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        const result = await response.json();
        if (result && result.livestream) {
          liveCount++;
        }
      }
    } catch (error) {
      console.error(`Sorgu hatası (${username}):`, error);
    }
  }

  if (liveCount > 0) {
    await extensionAPI.action.setBadgeBackgroundColor({ color: "#53FC18" });
    await extensionAPI.action.setBadgeText({ text: String(liveCount) });
  } else {
    await extensionAPI.action.setBadgeText({ text: "" });
  }
}

extensionAPI.alarms.create("checkKickStreams", { periodInMinutes: 2 });
extensionAPI.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "checkKickStreams") checkStreams();
});

extensionAPI.runtime.onInstalled.addListener(() => {
  extensionAPI.action.setIcon({ path: "icon/icon.png" });
  checkStreams();
});

extensionAPI.runtime.onMessage.addListener((msg) => {
  if (msg.action === "refresh") checkStreams();
});
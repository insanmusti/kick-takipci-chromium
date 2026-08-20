const extensionAPI = typeof browser !== "undefined" ? browser : chrome;

document.addEventListener("DOMContentLoaded", async () => {
  const streamerInput = document.getElementById("streamerInput");
  const addBtn = document.getElementById("addBtn");
  const streamerList = document.getElementById("streamerList");
  const liveBadge = document.getElementById("liveBadge");

  async function fetchStreamerData(username) {
    try {
      const response = await fetch(`https://kick.com/api/v2/channels/${encodeURIComponent(username)}`, {
        method: "GET",
        headers: { "Accept": "application/json" }
      });
      if (response.ok) {
        const data = await response.json();
        return {
          isLive: Boolean(data && data.livestream),
          viewers: data?.livestream?.viewer_count || 0,
          avatarUrl: getSafeAvatarUrl(data)
        };
      }
    } catch (e) {
      console.error(e);
    }
    return { isLive: false, viewers: 0, avatarUrl: null };
  }

  function getSafeAvatarUrl(data) {
    const candidate = data?.user?.profile_pic || data?.profile_pic;
    if (typeof candidate !== "string" || !candidate) return null;

    try {
      const url = new URL(candidate);
      const isKickHost = url.protocol === "https:" &&
        !url.username &&
        !url.password &&
        !url.port &&
        (url.hostname === "kick.com" || url.hostname.endsWith(".kick.com"));
      return isKickHost ? url.href : null;
    } catch (error) {
      return null;
    }
  }

  async function loadStreamers() {
    const data = await extensionAPI.storage.local.get(["streamers"]);
    const streamers = data.streamers || [];
    await renderList(streamers);
  }

  async function renderList(streamers) {
    streamerList.innerHTML = "";
    
    if (streamers.length === 0) {
      streamerList.innerHTML = "<li class='empty'>Henüz yayıncı eklenmedi.</li>";
      liveBadge.textContent = "0 Canlı";
      return;
    }

    let liveCount = 0;

    for (const username of streamers) {
      const streamInfo = await fetchStreamerData(username);
      if (streamInfo.isLive) liveCount++;

      const li = document.createElement("li");

      const infoDiv = document.createElement("div");
      infoDiv.className = "streamer-info";
      infoDiv.addEventListener("click", () => {
        extensionAPI.tabs.create({ url: `https://kick.com/${username}` });
      });

      const nameSpan = document.createElement("span");
      nameSpan.className = "streamer-name";
      nameSpan.textContent = username;

      const avatar = document.createElement("span");
      avatar.className = "streamer-avatar";
      avatar.textContent = username.charAt(0).toUpperCase();
      if (streamInfo.avatarUrl) {
        const avatarImage = document.createElement("img");
        avatarImage.src = streamInfo.avatarUrl;
        avatarImage.alt = `${username} profil fotoğrafı`;
        avatarImage.loading = "lazy";
        avatarImage.referrerPolicy = "no-referrer";
        avatarImage.addEventListener("load", () => {
          avatar.textContent = "";
        });
        avatarImage.addEventListener("error", () => {
          avatarImage.remove();
        });
        avatar.appendChild(avatarImage);
      }

      const viewerSpan = document.createElement("span");
      viewerSpan.className = `viewer-count ${streamInfo.isLive ? 'is-live' : ''}`;
      viewerSpan.textContent = streamInfo.isLive ? `${streamInfo.viewers.toLocaleString()} izleyici` : "Çevrimdışı";

      infoDiv.appendChild(avatar);
      infoDiv.appendChild(nameSpan);
      infoDiv.appendChild(viewerSpan);

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Sil";
      removeBtn.className = "remove-btn";
      removeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        removeStreamer(username);
      });

      li.appendChild(infoDiv);
      li.appendChild(removeBtn);
      streamerList.appendChild(li);
    }

    liveBadge.textContent = `${liveCount} Canlı`;
  }

  async function addStreamer() {
    const username = streamerInput.value.trim().toLowerCase();
    if (!username) return;

    const data = await extensionAPI.storage.local.get(["streamers"]);
    const streamers = data.streamers || [];

    if (!streamers.includes(username)) {
      streamers.push(username);
      await extensionAPI.storage.local.set({ streamers });
      streamerInput.value = "";
      loadStreamers();
      extensionAPI.runtime.sendMessage({ action: "refresh" });
    }
  }

  async function removeStreamer(username) {
    const data = await extensionAPI.storage.local.get(["streamers"]);
    let streamers = data.streamers || [];
    streamers = streamers.filter((item) => item !== username);

    await extensionAPI.storage.local.set({ streamers });
    loadStreamers();
    extensionAPI.runtime.sendMessage({ action: "refresh" });
  }

  addBtn.addEventListener("click", addStreamer);
  streamerInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addStreamer();
  });

  loadStreamers();
});
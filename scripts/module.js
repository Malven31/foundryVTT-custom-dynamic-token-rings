// Hooks.once('init', async function() {

// });

// Hooks.once('ready', async function() {

// });

Hooks.on("initializeDynamicTokenRingConfig", (ringConfig) => {
  const myCustomRings = new foundry.canvas.tokens.DynamicRingData({
    id: "myCustomRings",
    label: "External Ring",
    effects: {
      RING_PULSE: "TOKEN.RING.EFFECTS.RING_PULSE",
      RING_GRADIENT: "TOKEN.RING.EFFECTS.RING_GRADIENT",
      BACKGROUND_WAVE: "TOKEN.RING.EFFECTS.BACKGROUND_WAVE",
    },
    spritesheet:
      "modules/custom-dynamic-token-rings/rings/external/rings-external.json",
  });
  ringConfig.addConfig("myCustomRings", myCustomRings);
});

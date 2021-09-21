module.exports = {
  disableFrameRateLimit : true,
  angleBackend : "gl", // gl default d3d11 d3d9 d3d11on12 vulkan metal
  inProcessGPU : false,
  allowScripts : true,
  discordRpc : false,
  startInFullscreen : false,
  scriptSettings : {
    skyColor : {
      enabled : true,
      color : "#000000",
    },
    autoFFA : {
      // provided by nz#4471 / krTree
      enabled : true,
      autoJoinGameMode : "ffa", // ffa tdm point ctf kc
      autoJoinKeybind : "F6",
      attemptJoinFull : false,
      filterWrongVersion : true,
    }
  }
}

var playerWindow = null;
function launchPlayerV2(stationID)
{
      if (stationID === null) {
            stationID = "";
      }
            
      var base = "http://betaplayer.radio.com/player/RadioPlayer.php?";
            
      var link = base + "station=" + stationID;
      if (playerWindow !== null && playerWindow.closed === false)
      {
            playerWindow.location = link;
            playerWindow.focus();
      }
      else
      {
            playerWindow = window.open(link, "RadioPlayer");
      }
}

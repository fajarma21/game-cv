import { BLOCKERS, DISTANCE, PLAYER } from "./View.constants";

export const checkCollision = (playerTop: number, playerLeft: number) => {
  let id = 0;
  let from = "";
  let blockerData = null;
  for (const blocker of BLOCKERS) {
    // left
    if (
      playerLeft - DISTANCE <= blocker.left + blocker.width &&
      playerLeft + DISTANCE >= blocker.left + blocker.width &&
      ((playerTop + PLAYER.height / 10 >= blocker.top &&
        playerTop + PLAYER.height / 10 <= blocker.top + blocker.height) ||
        (playerTop + (PLAYER.height - PLAYER.height / 10) >= blocker.top &&
          playerTop + (PLAYER.height - PLAYER.height / 10) <=
            blocker.top + blocker.height))
    ) {
      blockerData = blocker;
      id = blocker.id;
      from = "l";
      break;
    }

    // right
    if (
      playerLeft + PLAYER.width + DISTANCE >= blocker.left &&
      playerLeft + PLAYER.width - DISTANCE <= blocker.left &&
      ((playerTop + PLAYER.height / 10 >= blocker.top &&
        playerTop + PLAYER.height / 10 <= blocker.top + blocker.height) ||
        (playerTop + (PLAYER.height - PLAYER.height / 10) >= blocker.top &&
          playerTop + (PLAYER.height - PLAYER.height / 10) <=
            blocker.top + blocker.height))
    ) {
      blockerData = blocker;
      id = blocker.id;
      from = "r";
      break;
    }

    // top
    if (
      ((playerLeft + PLAYER.width / 10 >= blocker.left &&
        playerLeft + PLAYER.width / 10 <= blocker.left + blocker.width) ||
        (playerLeft + (PLAYER.width - PLAYER.width / 10) >= blocker.left &&
          playerLeft + (PLAYER.width - PLAYER.width / 10) <=
            blocker.left + blocker.width)) &&
      playerTop - DISTANCE <= blocker.top + blocker.height &&
      playerTop + DISTANCE >= blocker.top + blocker.height
    ) {
      blockerData = blocker;
      id = blocker.id;
      from = "t";
      break;
    }

    // bottom
    if (
      ((playerLeft + PLAYER.width / 10 >= blocker.left &&
        playerLeft + PLAYER.width / 10 <= blocker.left + blocker.width) ||
        (playerLeft + (PLAYER.width - PLAYER.width / 10) >= blocker.left &&
          playerLeft + (PLAYER.width - PLAYER.width / 10) <=
            blocker.left + blocker.width)) &&
      playerTop + PLAYER.height + DISTANCE >= blocker.top &&
      playerTop + PLAYER.height - DISTANCE <= blocker.top
    ) {
      blockerData = blocker;
      id = blocker.id;
      from = "b";
      break;
    }
  }

  return { blockerData, id, from };
};

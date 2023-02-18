const online = `#2ceb06`;
const offline = `#d80b0b`;
export function isOnline(status) {
  if (status) {
    return online;
  } else {
    return offline;
  }
}

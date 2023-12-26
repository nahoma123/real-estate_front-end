function formatTime(timeD: string): string {
  let time = new Date(timeD)
  return `${time.toDateString()} at ${time.toLocaleTimeString("en-GB", {
    hour12: false,
  })}`;
}
export { formatTime };

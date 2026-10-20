async function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello, world"), 1000);
  });
}

getMessage().then((result: string) => {
  console.log(typeof result === "string");
});

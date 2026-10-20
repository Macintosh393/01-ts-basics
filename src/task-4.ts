function printUserInfo(name: string, age: number, email?: string): void {
  if (email !== undefined) {
    console.log(`${name} - ${age}: ${email}`);
  } else {
    console.log(`${name} - ${age}`);
  }
}

printUserInfo("John", 20);
printUserInfo("John", 20, "john@example.com");

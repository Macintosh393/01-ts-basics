function getFirstElement<T>(elements: T[]): T | null {
  if (elements.length === 0) {
    return null;
  }

  return elements[0];
}

getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["John", "Joe", "Josh"]);
getFirstElement<boolean>([true, true, false]);

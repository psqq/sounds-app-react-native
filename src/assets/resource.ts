import pathParse from 'path-parse';

export interface Resource {
  relativePath: string;
  filename: string;
  requireId?: number;
}

export function makeResource(
  relativePath: string,
  useRequire: boolean = false,
): Resource {
  const filename = pathParse(relativePath).base;
  let requireId;
  if (useRequire) {
    requireId = require(relativePath);
  }
  return {relativePath, filename, requireId};
}

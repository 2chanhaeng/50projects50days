import { readdirSync, existsSync } from "fs";
import path from "path";

export const getChildrenPages = (dir: string) =>
  readdirSync(dir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory()) // 디렉토리만 필터링
    .filter((dirent) => existsSync(path.join(dir, dirent.name, "page.tsx"))) // page.tsx 파일이 존재하는지 확인
    .map((dirent) => dirent.name);

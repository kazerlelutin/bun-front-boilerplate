import { version } from '../../package.json';

export { version };
export function displayVersion() {
  const versionElement = document.getElementById('version');
  if (versionElement && version) versionElement.textContent = version;
}



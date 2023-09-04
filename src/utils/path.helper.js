import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const getProjectPath = () => join(dirname(fileURLToPath(import.meta.url)), '..');

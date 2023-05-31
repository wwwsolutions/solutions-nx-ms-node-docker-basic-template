const { getJestProjects } = require('@nrwl/jest');

export default {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/api',
    '<rootDir>/apps/html',
    '<rootDir>/libs/todos',
  ],
};

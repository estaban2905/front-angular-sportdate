// sonar.js
// SonarQube analysis script. Run with: npm run sonar
// Configure SONAR_URL and SONAR_TOKEN as environment variables before running.

const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: process.env.SONAR_URL || 'http://localhost:9000',
    token: process.env.SONAR_TOKEN || '',
    options: {
      'sonar.projectKey': 'sportdate',
      'sonar.projectName': 'SportDate',
      'sonar.projectVersion': '1.0',
      'sonar.projectDescription': 'SportDate Angular App',
      'sonar.sources': 'src',
      'sonar.exclusions': '**/node_modules/**,**/*.spec.ts,**/environments/**',
      'sonar.tests': 'src',
      'sonar.test.inclusions': '**/*.spec.ts',
      'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.sourceEncoding': 'UTF-8',
    },
  },
  () => process.exit(),
);

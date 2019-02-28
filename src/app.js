import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import updateNotifier from 'update-notifier';

const pkg = require(path.resolve(__dirname, '../package.json'));

const notifier = updateNotifier({ pkg });

if (notifier.update) {
  notifier.notify();
}

export const start = args => {
  if (!args.length > 0) {
    console.error(
      chalk.red('Please provide a component name in the format "my-component"'),
    );

    process.exit(1);
  }

  const cssClass = args[0];

  const componentName = cssClass
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  if (!componentName && !cssClass) {
    console.error(
      chalk.yellow('Error, requires valid component and css className'),
    );
  }

  const jsxTemp = `import Component, {Config} from 'metal-jsx';

import './${componentName}.scss';

export default class ${componentName} extends Component {
	created() {}

	attached() {}

	render() {
		return (
			<div class="${cssClass}-container">

			</div>
		);
	}
}

${componentName}.PROPS = {}

${componentName}.STATE = {}
`;

  const scssTemp = `@import "~styles/variables";

.${cssClass}-container {}

`;

  try {
    fs.appendFile(`${componentName}.js`, jsxTemp, error => {
      if (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.error(chalk.yellow('Unable to create component'));
  }

  try {
    fs.appendFile(`${componentName}.scss`, scssTemp, error => {
      if (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.error(chalk.yellow('Unable to create scss file'));
  }

  console.log(chalk.green('Done.'));

  fs.readdir('.', function(err, items) {
    for (var i = 0; i < items.length; i++) {
      console.log(items[i]);
    }
  });
};

# Metal Generate Component

Generate a Metal.js JSX component and SCSS file at working directory using CSS Modules syntax

## Usage

This generator takes one argument. Component name in kebab-format.

```
metalgen <component-name>
```

example:

```
metalgen my-application
```

outputs:

```
MyApplication.js

import Component, {Config} from 'metal-jsx';

import classNames from './MyApplication.scss';

export default class MyApplication extends Component {
	created() {}

	attached() {}

	render() {
		return (
			<div class="{classNames['my-application-container']}>

			</div>
		);
	}
}

MyApplication.PROPS = {}

MyApplication.STATE = {}

// ----------

MyApplicaiton.scss

@import "~styles/variables";

.my-application-container {}


// ----------
```

# Metal Generate Component

Generate a Metal.js JSX component and SCSS file at working directory using CSS Modules syntax

## Installation

```
npm install --global metal-gen-component
```

## Usage

This generator takes one argument. Component name in kebab-format.

```
metalgen <component-name>
smelt <component-name>
```

example:

```
metalgen my-application
smelt my-application
```

outputs in your current working directory:

```
MyApplication.js

import Component, {Config} from 'metal-jsx';

import './MyApplication.scss';

export default class MyApplication extends Component {
	created() {}

	attached() {}

	render() {
		return (
			<div class="my-application-container">

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

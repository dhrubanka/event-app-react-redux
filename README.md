# Event-based Redux App

Demo Link: [Event-based Redux App Demo](https://reliable-swan-5831ce.netlify.app/)

This is a README file for an event-based Redux app. The app allows users to add events and store them using Redux state management.

![Redux Architecture and Workflow](https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

## Getting Started

To get started with the app, follow the instructions below.

### Prerequisites

Before running the app, ensure that you have the following software installed:

- Node.js
- NPM (Node Package Manager)

### Installation

1. Clone the repository to your local machine.

2. Open a terminal and navigate to the project's root directory.

3. Install the project dependencies by running the following command:


### Usage

1. Start the development server by running the following command:


2. Open your web browser and navigate to `http://localhost:3000` to access the app.

Alternatively, you can access the hosted app using the following link: [Event-based Redux App](https://reliable-swan-5831ce.netlify.app/)

## Code Overview

The app consists of the following files:

- `store.js`: This file configures the Redux store and combines the reducers for the profile and event features.

- `event-slice.js`: This file contains the event slice, which defines the initial state and action reducers for handling events. It also includes a helper function to load events from local storage.

- `form.js`: This file contains a React component that displays a form for adding events. It imports the `eventAdded` action creator from the event slice and uses the `useState` and `useDispatch` hooks.

## Functionalities

The app provides the following functionalities:

- Adding events: The `form.js` component renders a form where users can enter details for an event. When the form is submitted, the `eventAdded` action is dispatched, and the event data is stored in the Redux store and local storage.

- Loading events: The app automatically loads events from local storage when it starts. The `loadEvents` helper function in the event slice retrieves the events from local storage and initializes the state.

## Contributions

Contributions to the project are welcome. If you find any issues or want to add new features, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

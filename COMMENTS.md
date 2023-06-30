# Dreadful Cherry Tomatoes - Design Decisions

During the implementation of the Dreadful Cherry Tomatoes web app, I made several key decisions to enhance the user
experience, improve code maintainability, and ensure the overall quality of the application. Here's an explanation of
each decision:

## Choice of Styled Components

I opted to use the Styled Components library for styling the components in this project. Styled Components offers a
convenient way to write CSS-in-JS, providing scoped styles for each component. This approach promotes code organization,
simplifies the management of stylesheets, and enables easy reuse of styles across different components. Additionally,
choosing Styled Components allowed me to practice and familiarize myself with a popular and powerful styling solution in
React.

## ApiMovie for Data Request

To retrieve the required movie data for the application, I implemented the `ApiMovie` module. This module handles the
HTTP request to fetch the data from the `data.json` file. By separating the data fetching logic into a dedicated module,
I ensured a clear separation of concerns and created a reusable component that can be utilized across the application.

## MovieService for Data Handling

The `MovieService` module is responsible for handling the movie data received from the `ApiMovie` module. It takes the
raw data and performs any necessary transformations or filtering operations. This separation of data handling logic into
a separate service promotes better code organization, improves maintainability, and allows for future modifications or
extensions to the data processing pipeline.

## Custom Hooks: useHover and useMovies

I leveraged custom hooks in this project to encapsulate and reuse specific functionalities:

- **useHover:** This hook enables the hover effect on the movie cards by providing a boolean value that indicates
  whether the mouse is currently hovering over a card. By encapsulating the hover behavior in a custom hook, I
  facilitated the addition of hover functionality to multiple components throughout the application in a consistent and
  reusable manner.

- **useMovies:** This hook handles the logic for retrieving and managing the movie data. It abstracts away the details
  of data fetching and provides a clean interface for components to access and update the movie list. Encapsulating the
  movie data logic in a custom hook promotes code reuse, separates concerns, and ensures that components remain focused
  on their specific responsibilities.

## Constants and Types Files

To enhance code organization and maintainability, I created separate files for constants and types:

- **Constants:** The constants file contains values that are used throughout the application, such as Colors,
  Breakpoints or configuration options. Centralizing these values in one place simplifies future modifications and
  ensures consistency across the codebase.

- **Types:** The types file contains TypeScript type definitions used in the project. By explicitly stating the expected
  shape of data, these type definitions help catch potential errors during development and improve code documentation.
  Having well-defined types promotes code reliability and maintainability.

## MoviesApiMock and MoviesTestMock

During the development process, I initially utilized the `MoviesApiMock` module as a mock implementation of the movie
API. This mock module provided test data for developing and testing the application's features. However, as the project
progressed, I transitioned to using the `ApiMovie` module to fetch the actual movie data from the `data.json` file.

The `MoviesTestMock` module is a separate file that contains sample movie data specifically designed for unit testing
various parts of the application. It allows for thorough testing of components and services without relying on the
actual API or data file. Utilizing mock data simplifies the testing process and ensures reliable test results.

## GlobalStyles

The `GlobalStyles` file contains global CSS styles that are applied to the entire application. These styles include
resets for default browser styles and consistent definitions for typography, spacing, and color schemes. Defining global
styles in one place ensures a consistent look and feel across different components and pages. It also promotes
maintainability by providing a centralized location to manage and modify global styles.

## Movie Search Behavior

I implemented a movie search functionality that filters the movie list as the user types in the search input. This
approach provides instant feedback to the user and enhances the overall user experience by dynamically updating the
movie list based on the search query. It allows users to quickly find movies of interest without the need for manual
page navigation or scrolling through the entire list.

## MovieCard Title and Description Display

For the `MovieCard` component, I decided to display the full title only if it is less than 16 characters. If the title
exceeds this limit, I truncate it and add an ellipsis at the end. This decision ensures that the movie cards maintain a
visually balanced appearance while still providing enough information about each movie. Users can easily scan the cards
and get a glimpse of the movie's title, year, and description without overwhelming visual clutter.

## MovieCard Hover Effect

When hovering over a `MovieCard`, I implemented a hover effect that displays the full title and description of the
movie. If the description text is too long to fit within the card's height, a scrollbar appears, allowing users to
scroll and read the complete description. This hover effect ensures that all information about the movie is accessible
to the user, even for movies with lengthy descriptions. It provides additional details and context without cluttering
the interface.

## Pagination Button Disabled State

To enhance the user experience and prevent unnecessary API calls or invalid page navigation, I disabled the pagination
buttons under specific conditions. For example, the previous page button is disabled if the user is already on the first
page, and the next page button is disabled if the user is on the last page. This prevents users from attempting actions
that would have no effect and communicates the current page state clearly. Disabling the buttons in such cases helps
avoid confusion and provides a smoother browsing experience.

These were the key decisions I made while implementing the Dreadful Cherry Tomatoes web app. Each decision aimed to
improve the user experience, promote code maintainability, and ensure the overall quality of the application. 


## Overview

_**And...Sold!** is a companion app for organizations running auctions. Users can create auctions, and for each auction, can keep track of a list of dealers, bidders, and lots. There is a screen just for entering bids, and also a screen for registering and checking out bidders._


<br>

## MVP


_The **And...Sold!** MVP consists of all of the basic screens and backend functions needed to perform the capabilities listed in the description. The MVP styling includes at least 2 media queries for responsive design. The project will have a RESTful JSON API with CRUD actions on tables._

<br>

### Goals

- _Require users to sign up/sign in and utilize authentication_
- _Create a RESTful JSON API including user, auction, dealer, bidder, lot, and transaction tables_
- _Create a React app to allow users to navigate the tasks of holding an auction, including bid entry and bidder management_
- _Style with flexbox and/or CSS Grid, and implement responsive design_
- _Use proper coding conventions_
- _Deploy frontend and backend_

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Handle frontend layout_ |
|   React Router   | _Handle page changes and flow_ |
| Rails | _Create and interact with backend API_ |

<br>

### Client (Front End)

#### Wireframes

[Desktop Wireframe](https://www.figma.com/file/ZmYStDokr1PrEwmZEuRACL/And...Sold?node-id=312%3A2)

#### Component Hierarchy

[Component Hierarchy](https://whimsical.com/and-sold-MWLcd82ePMKmJQ9ymb49pw)



<!-- #### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

``` -->

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Set Up Authentication    |    H     |     4 hrs      |     .5 hrs     |    TBD    |
| Create Auctions Table |    H     |     1.5 hrs      |     0 hrs     |     TBD     |
| Create Dealers Table |    H     |     1.5 hrs      |     0 hrs     |     TBD     |
| Create Bidders Table |    H     |     1.5 hrs      |     0 hrs     |     TBD     |
| Create Lots Table |    M     |     1.5 hrs      |     0 hrs     |     TBD     |
| Create Payments Table |    L     |     1.5 hrs      |     0 hrs     |     TBD     |
| Add Associations |    H     |     1.5 hrs      |     0 hrs     |     TBD     |
| Auctions Backend CRUD |    H     |     1 hr      |     0 hrs     |     TBD     |
| Dealers Backend CRUD |    H     |     1 hr      |     0 hrs     |     TBD     |
| Bidders Backend CRUD |    H     |     1 hr      |     0 hrs     |     TBD     |
| Lots Backend CRUD |    M     |     1.5 hrs      |     0 hrs     |     TBD     |
| Transactions Backend CRUD |    H     |     1 hr      |     0 hrs     |     TBD     |
| Set Up React File Architecture |    L     |     .5 hr      |     0 hrs     |     TBD     |
| Sign Up/Sign in screens |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Routes and Links |    H     |     1.5 hrs      |     0 hrs     |     TBD     |
| Navbar |    H     |     4 hrs     |     0 hrs     |     TBD     |
| Auctions Screen |    H    |     1.5 hrs      |     0 hrs     |     TBD     |
| Auctions Frontend CRU Services |    H     |     1 hr      |     0 hrs     |     TBD     |
| Dealers Frontend CRU Services |    H     |     1 hr      |     0 hrs     |     TBD     |
| Bidders Frontend CRU Services |    H     |     1 hr      |     0 hrs     |     TBD     |
| Lots Frontend CRUD Services |    L     |     2 hrs      |     0 hrs     |     TBD     |
| Payments Frontend Services |    L     |     1.5 hrs      |     0 hrs     |     TBD     |
| Bubble Table |    L     |     3 hrs      |     0 hrs     |     TBD     |
| Bid Entry Screen |    M     |     2 hrs      |     0 hrs     |     TBD     |
| Transaction Handler |    L     |     3 hrs      |     0 hrs     |     TBD     |
| Add/Edit Auction Screens |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Bidders Screen |    H     |     1 hr      |     0 hrs     |     TBD     |
| Add/Edit Bidder Screens |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Dealers Screen |    H     |     1 hr      |     0 hrs     |     TBD     |
| Add/Edit Dealer Screens |    H     |     2 hrs      |     0 hrs     |     TBD     |
| Lots Page |    L     |     2 hrs      |     0 hrs     |     TBD     |
| Add/Edit Lot Screens |    H     |     3 hrs      |     0 hrs     |     TBD     |
| Clerk Screen |    L     |     3 hrs      |     0 hrs     |     TBD     |
| TOTAL               |          |     59.5 hrs      |     0 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

[Entity Relationship Diagram](https://res.cloudinary.com/dcdasnmmz/image/upload/v1633377794/And...Sold%21/Screen_Shot_2021-10-04_at_3.01.34_PM_wnmsdx.png)
<br>

***

## Post-MVP

- custom lot order for auction
- search/filter options for tables (especially lots, bidders, dealers)
- multiple types of users with different sets of permissions -> turning users/auctions into many-to-many relationship
- page to view transactions

***

## Code Showcase



## Code Issues & Resolutions

# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
    - [Mobile Screenshot](#mobile-screenshot)
    - [Desktop Screenshot](#desktop-screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshots

#### Mobile Screenshot

![Moblie-screenshot](./mobile-screenshot.png)

#### Desktop Screenshot

![Desktop-screenshot](./desktop-screenshot.png)

### Links

- Solution URL: [Github Repository](https://github.com/DavidFayemi/Product-preview-card-component)
- Live Site URL: [Github Pages](https://davidfayemi.github.io/Product-preview-card-component)

## My process

### Development Steps

- Structured Project Folder
- Updated [.gitignore](./.gitignore) to ignore vscode folder, design folder and style-guide
- Installed TailwindCSS dependencies
- Downloaded fonts and added them to tailwind
- Added custom colors to tailwind
- Structured HTML page
- Styled the component with tailwind utility classes
- Added responsive ness with tailwind utility classes

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- TailwindCSS

### What I learned

> Responsive images with the HTML5 picture tag

```html
<picture>
  <!-- Tablets and larger -->
  <source
    media="(min-width: 640px)"
    srcset="./assets/images/image-product-desktop.jpg"
  />
  <!-- Phones -->
  <img 
    src="./assets/images/image-product-mobile.jpg" 
    alt="" 
  /> 
</picture>
``` 
## Author 
- Frontend Mentor -
[@DavidFayemi](https://www.frontendmentor.io/profile/DavidFayemi)
- Github - [@DavidFayemi](https://github.com/DavidFayemi) 
## Acknowledgments 
>All Glory to God


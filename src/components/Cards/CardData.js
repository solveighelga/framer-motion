
// Everything that is here will be rendered on the cards by id and category. Made a mini API.
const cardData = [
  // Toggle Switch Sandbox Projects
  {
    id: "1",
    category: "Toggle",
    title: "Scale Animation",
    text: "You can use the 'scale' property to animate the size of your toggle switch. When the toggle switch is active 'isOn' is true, the size of the element is increased.",
    url: "https://codesandbox.io/s/animate-scale-xzesep?file=/src/App.js",
  },

  {
    id: "2",
    category: "Toggle",
    title: "Color Animation",
    text: "You can use the 'animate' property to change the color of the switch when it is on by changing the state of the toggle when it is on i.e. isOn? 'color when on' : 'color when off'",
    url: "https://codesandbox.io/s/toggle-color-animation-qi5c1o?file=/src/App.js",
  },
  
  {
    id: "3",
    category: "Toggle",
    title: "Spring Animation",
    text: "Here we are going to play around with the example from the presentation where you will change the damping and stiffness value to see how it creates a spring effect",
    url: "https://codesandbox.io/s/toggle-spring-animation-551fe1?file=/src/App.js",
  },
 
  // Button Effects Sandbox Projects
  {
    id: "4",
    category: "ButtonCard",
    title: "whileHover Effect",
    text: "To let the user know that you have an element on your website that is a button it is good to add a while hovering state to the button, give them some feedback. Some examples are a background change, bordercolor and scale.",
    url: "https://codesandbox.io/s/button-while-hover-2jlpoe?file=/src/App.js",
  },
 
  {
    id: "5",
    category: "ButtonCard",
    title: "whileTap Effect",
    text: "When you press a button you usually expect something to happen and you need some sort of an indication that you have changed the state of that button. Here we are going to test out some animatoin with the x and y axes and a fun transition.",
    url: "https://codesandbox.io/s/button-while-tap-tkcjrf?file=/src/App.js:832-856",
  },


// Path Sandbox Projects
  {
    id: "6",
    category: "Path",
    title: "Drawing Icon",
    text: "The 'path' element is used here to animate the path of an icon of your choosing. ",
    url: "https://codesandbox.io/s/icon-path-9h7eur?file=/src/App.js",
  },

  {
    id: "7",
    category: "Path",
    title: "Drawing checkmark with text",
    text: "Here we are going to be drawing the classic complete page with a checkmark. First when you load you get the completed page and then we are going to be adding the magic to it to make it appear at different times and creating a check like feeling by drawing the path of the checkmark.",
    url: "https://codesandbox.io/s/path-checkmark-czo6pb?file=/src/App.js",
  },

// Scroll Sandbox Projects
  {
    id: "8",
    category: "Progress",
    title: "Element progress scroll",
    text: "Here we are going be using the 'useScroll' hook from framer motion as well as 'useRef' hook from react to track the scroll position of the scrollable container, instead of the page itself. I have added some pictures from our Las Palmas trip to an unordered list (‘ul’). Then there is a progress circle displayed in the top left corner using a motion.circle element.",
    url: "https://codesandbox.io/s/scroll-progressbar-circle-r7r5u7?file=/src/App.js",
  },

  {
    id: "9",
    category: "Progress",
    title: "Scroll Progressbar - scrollX",
    text: "Here we are going to be using 'useScroll' hook from framer motion to create a scroll-linked animations, a progress indicator on the top of the page. In this example we are going to create a page scroll indicator by passing 'scrollYProgress' straight to the 'scaleX style' of a progress bar. All you need to do is add motion. to the div element ( <motion.div> )",
    url: "https://codesandbox.io/s/scroll-progressbar-scrollx-28j2ht?file=/src/App.js",
  }
   
   
];

export default cardData;